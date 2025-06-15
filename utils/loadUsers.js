const fs = require("fs").promises; // modulo de Node.js que permite usar promesas como await
const path = require("path"); // modulo de Node.js que permite usar rutas de forma segura

const usersPath = path.join(__dirname, "../data/users.json"); // crea la ruta completa del archivo

const loadUsers = async () => {
  try {
    const data = await fs.readFile(usersPath, "utf-8"); // se guarda la informacion en formato string en la variable
    const users = JSON.parse(data); // retorna el texto data en un objeto JS (array de usuarios)
    return users;
  } catch (error) {
    console.error("Error al leer users.json:", error);
    return [];
  }
};

module.exports = loadUsers;
