document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  form.addEventListener("submit", (e) => {
    let hasError = false;

    // Resetear errores
    emailError.textContent = "";
    passwordError.textContent = "";

    // Validar email
    const email = emailInput.value.trim();
    if (!email) {
      emailError.textContent = "El email es obligatorio.";
      hasError = true;
    } else if (!validator.isEmail(email)) {
      emailError.textContent = "Debe ingresar un email válido.";
      hasError = true;
    }

    // Validar password
    const password = passwordInput.value.trim();
    if (!password) {
      passwordError.textContent = "La contraseña es obligatoria.";
      hasError = true;
    }

    if (hasError) e.preventDefault();
  });
});
