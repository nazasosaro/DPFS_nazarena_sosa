const bcrypt = require("bcryptjs"); // paquete de Node.js para encriptar las contrasenias
const path = require("path");
const loadUsers = require("../utils/loadUsers");
const saveUsers = require("../utils/saveUsers");
const { v4: uuidv4 } = require("uuid"); // paquete de Node.js que genera identificadores unicos universales

module.exports = {
  // mostrar vista formulario de login
  loginForm: (req, res) => {
    res.render("users/login", { title: "Iniciar Sesión" });
  },

  // sesion iniciada del usuario
  loginProcess: async (req, res) => {
    try {
      const { email, password, rememberUser } = req.body;
      const users = await loadUsers();

      const userFound = users.find(
        (user) => user.email === email.trim().toLowerCase()
      );

      if (!userFound || !bcrypt.compareSync(password, userFound.password)) {
        return res.status(401).send("Credenciales inválidas");
      }

      // guardado de sesion
      req.session.userLogin = {
        id: userFound.id,
        name: userFound.name,
        email: userFound.email,
        image: userFound.image,
      };

      // si el checkout fue marcado, guardar una cookie por 30 días
      if (rememberUser) {
        res.cookie("userEmail", userFound.email, {
          maxAge: 1000 * 60 * 60 * 24 * 30, // 30 días
          httpOnly: true,
        });
      }

      res.redirect("/users/account");
    } catch (error) {
      console.error("Error al procesar login:", error);
      res.status(500).send("Hubo un error al iniciar sesión.");
    }
  },

  // cerrar sesion
  logout: (req, res) => {
    req.session.destroy(() => {
      res.clearCookie("userEmail");
      res.redirect("/");
    });
  },

  // mostrar vista formulario de registro
  registerForm: (req, res) => {
    res.render("users/register", { title: "Registro" });
  },

  // guardar nuevo usuario
  registerProcess: async (req, res) => {
    try {
      const users = await loadUsers();

      const { name, lastname, email, password } = req.body;

      const newUser = {
        id: uuidv4(),
        name: name.trim(),
        lastname: lastname.trim(),
        email: email.trim().toLowerCase(),
        password: bcrypt.hashSync(password, 10),
        image: req.file
          ? `/images/users/${req.file.filename}`
          : "/assets_front/images/default.jpg",
        createdAt: new Date().toISOString().split("T")[0],
      };

      users.push(newUser);
      await saveUsers(users);

      res.redirect("/users/login");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      res.status(500).send("Hubo un error al registrar el usuario.");
    }
  },

  forgotPasswordForm: (req, res) => {
    res.render("users/forgotPasssword", { title: "Reestablecer contraseña" });
  },

  forgotPasswordProcess: (req, res) => {
    // Aquí iría la lógica de reestablecer contraseña
    res.send("Procesando reestablecer contraseña...");
  },

  account: (req, res) => {
    const user = req.session.userLogin;
    res.render("users/account", {
      title: "Mi Cuenta",
      user,
    });
  },
};
