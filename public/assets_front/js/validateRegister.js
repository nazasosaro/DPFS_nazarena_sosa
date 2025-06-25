document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#registerForm");

  const nameInput = document.querySelector("#name");
  const lastnameInput = document.querySelector("#lastname");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const imageInput = document.querySelector("#image");

  const nameError = document.querySelector("#nameError");
  const lastnameError = document.querySelector("#lastnameError");
  const emailError = document.querySelector("#emailError");
  const passwordError = document.querySelector("#passwordError");
  const imageError = document.querySelector("#imageError");

  const isImageValid = (file) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
    return file && allowedTypes.includes(file.type);
  };

  const clearErrors = () => {
    nameError.textContent = "";
    lastnameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    imageError.textContent = "";
  };

  form.addEventListener("submit", function (e) {
    clearErrors();

    let hasError = false;

    // Validar nombre
    if (!nameInput.value.trim()) {
      nameError.textContent = "El nombre es obligatorio.";
      hasError = true;
    } else if (nameInput.value.trim().length < 2) {
      nameError.textContent = "Debe tener al menos 2 caracteres.";
      hasError = true;
    }

    // Validar apellido
    if (!lastnameInput.value.trim()) {
      lastnameError.textContent = "El apellido es obligatorio.";
      hasError = true;
    } else if (lastnameInput.value.trim().length < 2) {
      lastnameError.textContent = "Debe tener al menos 2 caracteres.";
      hasError = true;
    }

    // Validar email
    if (!emailInput.value.trim()) {
      emailError.textContent = "El email es obligatorio.";
      hasError = true;
    } else if (!validator.isEmail(emailInput.value.trim())) {
      emailError.textContent = "Debe ser un email válido.";
      hasError = true;
    }

    // Validar contraseña
    const password = passwordInput.value;
    if (!password) {
      passwordError.textContent = "La contraseña es obligatoria.";
      hasError = true;
    } else if (password.length < 8) {
      passwordError.textContent = "Debe tener al menos 8 caracteres.";
      hasError = true;
    }

    // Validar imagen si se cargó
    const image = imageInput.files[0];
    if (image && !isImageValid(image)) {
      imageError.textContent = "La imagen debe ser JPG, JPEG, PNG o GIF.";
      hasError = true;
    }

    if (hasError) {
      e.preventDefault(); // Evitar que se envíe el formulario si hay errores
    }
  });
});
