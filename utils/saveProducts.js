const fs = require("fs/promises");
const path = require("path");

const productsPath = path.join(__dirname, "../data/products.json");

/* 
Guarda (sobrescribe) el archivo products.json con la información nueva que le pases como argumento, 
de forma segura, clara y asincrónica.
fs.writeFile() -> para sobreescribir el archivo con nueva data
productsPath -> ruta del archivo
JSON.stringify(products, null, 2) -> convierte el array/objeto JS a una cadena JSON legible (con indentación de 2 espacios)
 */
async function saveProducts(products) {
  try {
    await fs.writeFile(productsPath, JSON.stringify(products, null, 2));
  } catch (error) {
    console.error("Error al guardar productos:", error);
  }
}

module.exports = saveProducts;
