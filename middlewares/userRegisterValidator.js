const { body } = require("express-validator");
const path = require("path");

module.exports = [
  body("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener al menos 2 caracteres"),

  body("lastname")
    .notEmpty()
    .withMessage("El apellido es obligatorio")
    .isLength({ min: 2 })
    .withMessage("El apellido debe tener al menos 2 caracteres"),

  body("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Debes escribir un email válido"),

  body("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres"),

  body("image").custom((value, { req }) => {
    if (!req.file) return true; // no se subió imagen
    const acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    const extension = path.extname(req.file.originalname).toLowerCase();
    if (!acceptedExtensions.includes(extension)) {
      throw new Error("Los formatos permitidos son JPG, JPEG, PNG y GIF");
    }
    return true;
  }),
];