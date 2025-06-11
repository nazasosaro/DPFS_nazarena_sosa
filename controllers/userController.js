module.exports = {
  loginForm: (req, res) => {
    res.render("users/login", { title: "Iniciar Sesión" });
  },

  registerForm: (req, res) => {
    res.render("users/register", { title: "Registro" });
  },

  forgotPasswordForm: (req, res) => {
    res.render("users/forgotPasssword", { title: "Reestablecer contraseña" });
  },

  loginProcess: (req, res) => {
    // Aquí iría la lógica de login
    res.send("Procesando login...");
  },

  registerProcess: (req, res) => {
    // Aquí iría la lógica de registro
    res.send("Procesando registro...");
  },

  forgotPasswordProcess: (req, res) => {
    // Aquí iría la lógica de reestablecer contraseña
    res.send("Procesando reestablecer contraseña...");
  },

  account: (req, res) => {
    res.render("users/account", { title: "Mi Cuenta" });
  },
};
