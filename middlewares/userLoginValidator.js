const { body } = require("express-validator");
const db = require("../database/models");

module.exports = [
  body("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .bail()
    .isEmail()
    .withMessage("Debe ser un email válido")
    .bail()
    .custom(async (email) => {
      const user = await db.User.findOne({
        where: { email: email.trim().toLowerCase() },
      });
      if (!user) {
        throw new Error("No existe una cuenta con este email");
      }
      return true;
    }),

  body("password").notEmpty().withMessage("La contraseña es obligatoria"),
];
