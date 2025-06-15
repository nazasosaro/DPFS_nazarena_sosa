const loadUsers = require("../utils/loadUsers");

/**
 * Middleware de "recordar usuario" (rememberMiddleware).
 *
 * Este middleware verifica si hay una sesión activa de usuario. Si no la hay,
 * intenta recuperar la información del usuario a través de una cookie llamada "userEmail".
 *
 * - Si ya existe `req.session.userLogin`, el middleware continúa con la ejecución.
 * - Si no hay sesión pero existe la cookie "userEmail":
 *    - Carga la lista de usuarios desde el archivo correspondiente.
 *    - Busca un usuario cuyo email coincida con el de la cookie.
 *    - Si lo encuentra, guarda los datos esenciales del usuario en la sesión.
 *
 * El middleware permite que los usuarios sean "recordados" entre sesiones,
 * siempre que la cookie esté presente.
 *
 * En caso de error, lo registra en consola y continúa con la ejecución.
 */ 

module.exports = async (req, res, next) => {
  try {
    // Si ya está logueado por sesión, continuar
    if (req.session.userLogin) {
      return next();
    }

    // Si existe la cookie "userEmail", buscar el usuario
    if (req.cookies.userEmail) {
      const users = await loadUsers();
      const userFound = users.find(
        (user) => user.email === req.cookies.userEmail
      );

      // Si el usuario existe, guardar en sesión
      if (userFound) {
        req.session.userLogin = {
          id: userFound.id,
          name: userFound.name,
          email: userFound.email,
          avatar: userFound.avatar,
        };
      }
    }

    next();
  } catch (error) {
    console.error("Error en rememberMiddleware:", error);
    next(); // Continuar aunque haya error
  }
};
