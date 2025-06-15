/**
 * Middleware de autenticación (authMiddleware).
 *
 * Este middleware protege rutas que requieren que el usuario esté autenticado.
 *
 * - Verifica si existe una sesión activa (`req.session.userLogin`).
 * - Si el usuario está logueado, permite continuar con la ejecución (`next()`).
 * - Si no hay sesión activa, redirige al formulario de login (`/users/login`).
 *
 * Útil para restringir el acceso a páginas privadas o protegidas por autenticación.
 */

module.exports = (req, res, next) => {
  if (req.session && req.session.userLogin) {
    // El usuario está logueado
    next();
  } else {
    // Redirigimos al login si no está logueado
    res.redirect("/users/login");
  }
};
