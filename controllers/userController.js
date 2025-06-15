const bcrypt = require("bcryptjs"); // paquete de Node.js para encriptar las contrasenias
const path = require("path");
const loadUsers = require("../utils/loadUsers");
const saveUsers = require("../utils/saveUsers");
const { v4: uuidv4 } = require("uuid"); // paquete de Node.js que genera identificadores unicos universales

module.exports = {
  loginForm: (req, res) => {
    res.render("users/login", { title: "Iniciar Sesión" });
  },

  loginProcess: (req, res) => {
    // Aquí iría la lógica de login
    res.send("Procesando login...");
  },

  registerForm: (req, res) => {
    res.render("users/register", { title: "Registro" });
  },

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
        avatar: req.file
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
    res.render("users/account", { title: "Mi Cuenta" });
  },
};
