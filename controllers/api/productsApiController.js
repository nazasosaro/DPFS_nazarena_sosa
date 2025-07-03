const db = require("../../database/models");
const path = require("path");

module.exports = {
  list: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        include: ["category"],
      });

      const countByCategory = {};
      products.forEach((product) => {
        const categoryName = product.category?.name || "Sin categoría";
        countByCategory[categoryName] =
          (countByCategory[categoryName] || 0) + 1;
      });

      const result = {
        count: products.length,
        countByCategory,
        products: products.map((product) => ({
          id: product.productId,
          name: product.name,
          description: product.description,
          category: product.category?.name || "Sin categoría",
          detail: `/api/products/${product.productId}`,
        })),
      };

      return res.json(result);
    } catch (error) {
      console.error("Error al obtener productos:", error);
      return res.status(500).json({ error: "Error al obtener productos" });
    }
  },

  detail: async (req, res) => {
    try {
      const product = await db.Product.findByPk(req.params.id, {
        include: ["category", "color"],
      });

      if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }

      const result = {
        id: product.productId,
        name: product.name,
        description: product.description,
        category: product.category?.name || null,
        color: product.color?.name || null,
        price: product.price,
        promotionalPrice: product.promotionalPrice,
        stock: product.stock,
        status: product.status,
        image: `/images/products/${product.image}`,
      };

      return res.json(result);
    } catch (error) {
      console.error("Error al obtener detalle del producto:", error);
      return res
        .status(500)
        .json({ error: "Error al obtener detalle del producto" });
    }
  },
};
