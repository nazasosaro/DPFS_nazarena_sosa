document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  const name = document.getElementById("name");
  const description = document.getElementById("description");
  const image = document.getElementById("image");
  const category = document.getElementById("category");
  const colors = document.getElementById("colors");
  const price = document.getElementById("price");
  const promotionalPrice = document.getElementById("promotionalPrice");
  const stock = document.getElementById("stock");

  const nameError = document.getElementById("nameError");
  const descriptionError = document.getElementById("descriptionError");
  const imageError = document.getElementById("imageError");
  const categoryError = document.getElementById("categoryError");
  const colorsError = document.getElementById("colorsError");
  const priceError = document.getElementById("priceError");
  const promotionalPriceError = document.getElementById(
    "promotionalPriceError"
  );
  const stockError = document.getElementById("stockError");

  form.addEventListener("submit", function (e) {
    let hasErrors = false;

    // Reset errores
    nameError.textContent = "";
    descriptionError.textContent = "";
    imageError.textContent = "";
    categoryError.textContent = "";
    colorsError.textContent = "";
    priceError.textContent = "";
    promotionalPriceError.textContent = "";
    stockError.textContent = "";

    // Nombre
    if (validator.isEmpty(name.value.trim()) || name.value.trim().length < 5) {
      nameError.textContent = "Debe tener al menos 5 caracteres.";
      hasErrors = true;
    }

    // Descripción
    if (
      validator.isEmpty(description.value.trim()) ||
      description.value.trim().length < 20
    ) {
      descriptionError.textContent = "Debe tener al menos 20 caracteres.";
      hasErrors = true;
    }

    // Imagen
    const file = image.files[0];
    if (file) {
      const validExtensions = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/gif",
      ];
      if (!validExtensions.includes(file.type)) {
        imageError.textContent = "Formato inválido. Use JPG, JPEG, PNG o GIF.";
        hasErrors = true;
      }
    }

    // Categoría
    if (!category.value) {
      categoryError.textContent = "Debe seleccionar una categoría.";
      hasErrors = true;
    }

    // Color
    if (!colors.value) {
      colorsError.textContent = "Debe seleccionar un color.";
      hasErrors = true;
    }

    // Precio
    if (
      validator.isEmpty(price.value) ||
      !validator.isFloat(price.value, { min: 0.01 })
    ) {
      priceError.textContent = "Ingrese un precio válido mayor a 0.";
      hasErrors = true;
    }

    // Precio promocional (opcional)
    if (
      !validator.isEmpty(promotionalPrice.value) &&
      !validator.isFloat(promotionalPrice.value, { min: 0.01 })
    ) {
      promotionalPriceError.textContent =
        "El precio promocional debe ser válido.";
      hasErrors = true;
    }

    // Stock
    if (
      validator.isEmpty(stock.value) ||
      !validator.isInt(stock.value, { min: 1 })
    ) {
      stockError.textContent = "Debe ingresar un stock mayor a 0.";
      hasErrors = true;
    }

    if (hasErrors) e.preventDefault();
  });
});