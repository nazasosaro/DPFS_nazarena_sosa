module.exports = {
  loginForm: (req, res) => {
    res.render("users/login", { title: "Iniciar Sesión" });
  },

  registerForm: (req, res) => {
    res.render("users/register", { title: "Registro" });
  },

  loginProcess: (req, res) => {
    // Aquí iría la lógica de login
    res.send("Procesando login...");
  },

  registerProcess: (req, res) => {
    // Aquí iría la lógica de registro
    res.send("Procesando registro...");
  },
};
