const { body } = require("express-validator");
const path = require("path");
const db = require("../database/models");

module.exports = [
  body("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({ min: 5 })
    .withMessage("El nombre debe tener al menos 5 caracteres"),

  body("description")
    .isLength({ min: 20 })
    .withMessage("La descripción debe tener al menos 20 caracteres"),

  body("image").custom((value, { req }) => {
    if (!req.file) return true; // Si no hay imagen, OK
    const acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    const ext = path.extname(req.file.originalname).toLowerCase();
    if (!acceptedExtensions.includes(ext)) {
      throw new Error("Los formatos permitidos son JPG, JPEG, PNG y GIF");
    }
    return true;
  }),

  body("category")
    .notEmpty()
    .withMessage("La categoría es obligatoria")
    .bail()
    .custom(async (id) => {
      const category = await db.ProductCategory.findByPk(id);
      if (!category) throw new Error("La categoría seleccionada no es válida");
      return true;
    }),

  body("colors")
    .notEmpty()
    .withMessage("El color es obligatorio")
    .bail()
    .custom(async (id) => {
      const color = await db.ProductColor.findByPk(id);
      if (!color) throw new Error("El color seleccionado no es válido");
      return true;
    }),

  body("price")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .bail()
    .isFloat({ gt: 0 })
    .withMessage("El precio debe ser un número mayor a 0"),

  body("promotionalPrice")
    .optional({ checkFalsy: true }) // permite null, "", 0
    .isFloat({ min: 0 })
    .withMessage("El precio promocional debe ser un número mayor o igual a 0"),

  body("stock")
    .notEmpty()
    .withMessage("El stock es obligatorio")
    .bail()
    .isInt({ min: 0 })
    .withMessage("El stock debe ser un número entero igual o mayor a 0"),
];
