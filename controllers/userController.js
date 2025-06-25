const bcrypt = require("bcryptjs");
const path = require("path");
const db = require("../database/models"); // importacion de Sequelize
const { Op } = require("sequelize");
const { validationResult } = require("express-validator");

module.exports = {
  // mostrar formulario de login
  loginForm: (req, res) => {
    const error = req.session.loginError || null;
    const old = req.session.oldInput || {};
    // Limpiamos sesión después de usarlos
    delete req.session.loginError;
    delete req.session.oldInput;

    res.render("users/login", {
      title: "Iniciar Sesión",
      error,
      old,
    });
  },

  // procesar login
  loginProcess: async (req, res) => {
    try {
      const { email, password, rememberUser } = req.body;

      const userFound = await db.User.findOne({
        where: { email: email.trim().toLowerCase() },
      });

      // Si no se encuentra el usuario o la contraseña no coincide
      if (!userFound || !bcrypt.compareSync(password, userFound.password)) {
        // Guardamos los errores y datos ingresados en sesión temporal
        req.session.loginError = "Credenciales inválidas";
        req.session.oldInput = { email, rememberUser }; // No guardamos la contraseña
        return res.redirect("/users/login");
      }

      console.log("Usuario encontrado:", userFound.toJSON());

      // Guardamos al usuario en sesión
      req.session.userLogin = {
        userId: userFound.userId,
        name: userFound.name,
        email: userFound.email,
        image: userFound.image,
      };

      // Recordar usuario con cookie si marcó la opción
      if (rememberUser) {
        res.cookie("userEmail", userFound.email, {
          maxAge: 1000 * 60 * 60 * 24 * 30, // 30 días
          httpOnly: true,
        });
      }

      // Limpiamos errores antiguos si el login fue exitoso
      delete req.session.loginError;
      delete req.session.oldInput;

      res.redirect("/users/account");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      res.status(500).send("Hubo un error al iniciar sesión.");
    }
  },

  // cerrar sesión
  logout: (req, res) => {
    req.session.destroy(() => {
      res.clearCookie("userEmail");
      res.redirect("/");
    });
  },

  // mostrar formulario de registro
  registerForm: async (req, res) => {
    res.render("users/register", {
      title: "Registro",
      categories: await db.UserCategory.findAll(),
      errors: [], // o los que vengan de express-validator
      old: req.body, // para repoblar el formulario si falla
    });
  },

  // procesar registro
  registerProcess: async (req, res) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      console.log("Errores de validación:", errors.array());

      return res.render("users/register", {
        title: "Registro",
        categories: await db.UserCategory.findAll(),
        errors: errors.array(),
        old: req.body,
      });
    }
  
    try {
      const { name, lastname, email, password } = req.body;
  
      const existingUser = await db.User.findOne({
        where: { email: email.trim().toLowerCase() },
      });
  
      if (existingUser) {
        const categories = await db.UserCategory.findAll();
        return res.render("users/register", {
          title: "Registro",
          categories,
          errors: [{ msg: "Este email ya está registrado." }],
          old: req.body,
        });
      }
  
      await db.User.create({
        name: name.trim(),
        lastname: lastname.trim(),
        email: email.trim().toLowerCase(),
        password: bcrypt.hashSync(password, 10),
        image: req.file
          ? `/uploads/users/${req.file.filename}`
          : "/assets_front/images/default-user.jpg",
        userCategoryId: 3, // cliente
      });
  
      res.redirect("/users/login");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      res.status(500).send("Hubo un error al registrar el usuario.");
    }
  },

  // formulario de recuperación de contraseña
  forgotPasswordForm: (req, res) => {
    res.render("users/forgotPasssword", { title: "Reestablecer contraseña" });
  },

  forgotPasswordProcess: (req, res) => {
    res.send("Procesando reestablecer contraseña...");
  },

  // vista de cuenta
  account: async (req, res) => {
    try {
      if (!req.session.userLogin) {
        return res.redirect("/users/login");
      }

      console.log("ID en sesión:", req.session.userLogin.userId);

      const user = await db.User.findByPk(req.session.userLogin.userId);

      if (!user) {
        return res.status(404).send("Usuario no encontrado");
      }

      res.render("users/account", {
        title: "Mi Cuenta",
        user,
      });
    } catch (error) {
      console.error("Error al cargar cuenta:", error);
      res.status(500).send("No se pudo cargar la cuenta.");
    }
  },

  // actualizacion de datos de cuenta
  updateAccount: async (req, res) => {
    try {
      const userId = req.session.userLogin.userId;
      const { name, lastname, email, password, confirmPassword, oldImage } =
        req.body;

      const userToUpdate = await db.User.findByPk(userId);
      if (!userToUpdate) return res.status(404).send("Usuario no encontrado");

      // Actualizar datos básicos
      userToUpdate.name = name.trim();
      userToUpdate.lastname = lastname.trim();
      userToUpdate.email = email.trim().toLowerCase();
      userToUpdate.image = req.file
        ? `/uploads/users/${req.file.filename}`
        : oldImage;

      // Si el usuario desea cambiar su contraseña
      if (password) {
        if (password !== confirmPassword) {
          return res.status(400).send("Las contraseñas no coinciden");
        }
        userToUpdate.password = bcrypt.hashSync(password, 10);
      }

      await userToUpdate.save();

      // Actualizamos la sesión (email, nombre, imagen)
      req.session.userLogin.name = userToUpdate.name;
      req.session.userLogin.email = userToUpdate.email;
      req.session.userLogin.image = userToUpdate.image;

      res.redirect("/users/account");
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
      res.status(500).send("Error al actualizar perfil");
    }
  },
};
