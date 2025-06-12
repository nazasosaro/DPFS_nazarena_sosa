const fs = require("fs/promises"); // modulo de Node.js que permite usar promesas como await
const path = require("path"); // modulo de Node.js que permite usar rutas de forma segura

const productsPath = path.join(__dirname, "../data/products.json"); // crea la ruta completa del archivo

// creacion de una funcion asincrona para poder usar await
async function loadProducts() {
  try {
    const data = await fs.readFile(productsPath, "utf-8"); // se guarda la informacion en formato string en la variable
    const products = JSON.parse(data); // retorna el texto data en un objeto JS (array de productos)
    return products;
  } catch (error) {
    console.error("Error al leer el archivo de productos:", error);
    return [];
  }
}

module.exports = loadProducts;
