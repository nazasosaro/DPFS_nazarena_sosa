const { body } = require("express-validator");
const path = require("path");

module.exports = [
  body("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 2 })
    .withMessage("Debe tener al menos 2 caracteres"),

  body("description")
    .notEmpty()
    .withMessage("La descripción es obligatoria")
    .isLength({ min: 10 })
    .withMessage("Debe tener al menos 10 caracteres"),

  body("category")
    .notEmpty()
    .withMessage("Debe seleccionar una categoría")
    .isInt({ min: 1 })
    .withMessage("Debe ser una categoría válida"),

  body("colors")
    .notEmpty()
    .withMessage("Debe seleccionar un color")
    .isInt({ min: 1 })
    .withMessage("Debe ser un color válido"),

  body("price")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .isFloat({ gt: 0 })
    .withMessage("Debe ser un número igual o mayor que 0"),

  body("promotionalPrice")
    .optional({ checkFalsy: true })
    .isFloat({ min: 0 })
    .withMessage("El precio promocional debe ser 0 o mayor"),

  body("stock")
    .notEmpty()
    .withMessage("Debe indicar el stock")
    .isInt({ min: 0 })
    .withMessage("Debe ser un número entero mayor o igual a 0"),

  body("image").custom((value, { req }) => {
    if (!req.file) return true;
    const acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    const ext = path.extname(req.file.originalname).toLowerCase();
    if (!acceptedExtensions.includes(ext)) {
      throw new Error("Los formatos permitidos son JPG, JPEG, PNG y GIF");
    }
    return true;
  }),
];
