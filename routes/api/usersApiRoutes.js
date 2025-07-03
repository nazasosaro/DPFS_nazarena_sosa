const express = require("express");
const router = express.Router();
const usersApiController = require("../../controllers/api/usersApiController");

// Listado de usuarios
router.get("/", usersApiController.list);

// Detalle de un usuario
router.get("/:id", usersApiController.detail);

module.exports = router;