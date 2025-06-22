const db = require("./database/models");

async function test() {
  try {
    // Probar conexión general
    await db.sequelize.authenticate();
    console.log("✅ Conexión a la base de datos establecida con éxito.");

    // Obtener algunos usuarios (ejemplo)
    const users = await db.User.findAll({
      include: [{ model: db.UserCategory, as: "category" }],
    });

    console.log("👥 Usuarios encontrados:", users.length);
    users.forEach((user) => {
      console.log(
        `- ${user.name} ${user.lastname} (${user.email}) - Categoría: ${
          user.category?.category || "Sin categoría"
        }`
      );
    });
  } catch (error) {
    console.error("❌ Error al conectar o consultar:", error);
  } finally {
    await db.sequelize.close();
  }
}

test();
