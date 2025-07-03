const db = require("../../database/models");

module.exports = {
  list: async (req, res) => {
    try {
      const users = await db.User.findAll();

      const userList = users.map((user) => ({
        id: user.userId,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        detail: `/api/users/${user.userId}`,
      }));

      res.json({
        count: userList.length,
        users: userList,
      });
    } catch (error) {
      console.error("Error en /api/users:", error); // <-- Esto es clave
      res.status(500).json({ error: "Error al obtener usuarios" });
    }
  },

  detail: async (req, res) => {
    try {
      const user = await db.User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      res.json({
        id: user.userId,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        image: `/uploads/users/${user.image}`,
      });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al obtener el detalle del usuario" });
    }
  },
};
