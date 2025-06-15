const fs = require("fs").promises;
const path = require("path");

const usersPath = path.join(__dirname, "../data/users.json");

/* 
Guarda (sobrescribe) el archivo users.json con la información nueva que le pases como argumento, 
de forma segura, clara y asincrónica.
fs.writeFile() -> para sobreescribir el archivo con nueva data
productsPath -> ruta del archivo
JSON.stringify(products, null, 2) -> convierte el array/objeto JS a una cadena JSON legible (con indentación de 2 espacios)
 */

const saveUsers = async (users) => {
  try {
    await fs.writeFile(usersPath, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error("Error al escribir users.json:", error);
  }
};

module.exports = saveUsers;
