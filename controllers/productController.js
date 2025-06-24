const db = require("../database/models"); // importacion de Sequelize
const { Op } = require("sequelize");

module.exports = {
  // listar todos los productos
  products: async (req, res) => {
    try {
      const allProducts = await db.Product.findAll({
        include: [
          {
            association: "category",
          },
          {
            association: "color",
          },
          {
            association: "status",
            where: { name: "active" },
          },
        ],
      });
      res.render("products/productCatalog", {
        title: "Catálogo",
        products: allProducts,
      });
    } catch (error) {
      console.error("Error al listar productos:", error);
      res.status(500).send("Error interno del servidor");
    }
  },

  // mostrar el detalle de un producto por ID
  details: async (req, res) => {
    try {
      const product = await db.Product.findByPk(req.params.id, {
        include: ["category", "color"],
      });

      if (!product) return res.status(404).send("Producto no encontrado");

      res.render("products/productDetails", {
        title: product.name,
        product,
      });
    } catch (error) {
      console.error("Error al obtener detalle:", error);
      res.status(500).send("Error interno del servidor");
    }
  },

  // mostrar formulario de creación
  create: async (req, res) => {
    try {
      const [categories, colors] = await Promise.all([
        db.ProductCategory.findAll(),
        db.ProductColor.findAll(),
      ]);
  
      res.render("products/createProduct", {
        title: "Crear producto",
        categories,
        colors,
      });
    } catch (error) {
      console.error("Error al cargar formulario de creación:", error);
      res.status(500).send("Error al cargar el formulario de creación.");
    }
  },  

  // guardar producto nuevo (POST)
  store: async (req, res) => {
    try {
      const {
        name,
        description,
        category,
        colors,
        price,
        promotionalPrice,
        stock,
      } = req.body;
  
      await db.Product.create({
        name: name.trim(),
        description: description.trim(),
        image: req.file
          ? `/uploads/products/${req.file.filename}`
          : "/assets_front/images/default.jpg",
        productCategoryId: parseInt(category),
        productColorId: parseInt(colors),
        price: parseFloat(price) || 0,
        promotionalPrice: parseFloat(promotionalPrice) || 0,
        stock: parseInt(stock) || 0,
        status: "active",
      });
  
      res.redirect("/products");
    } catch (error) {
      console.error("Error al crear producto:", error);
      res.status(500).send("Error interno del servidor");
    }
  },  

  // mostrar formulario de edición
  edit: async (req, res) => {
    try {
      const product = await db.Product.findByPk(req.params.id, {
        include: ["category", "color"], // según los alias definidos en las asociaciones
      });
  
      if (!product) return res.status(404).send("Producto no encontrado");
  
      const [categories, colors] = await Promise.all([
        db.ProductCategory.findAll(),
        db.ProductColor.findAll(),
      ]);
  
      res.render("products/editProduct", {
        title: "Editar Producto",
        product,
        categories,
        colors,
      });
    } catch (error) {
      console.error("Error al cargar formulario de edición:", error);
      res.status(500).send("Error interno del servidor");
    }
  },

  // actualizar producto (POST/PUT)
  update: async (req, res) => {
    try {
      const allowedStatuses = ["active", "inactive", "deleted"];
      const newStatus = req.body.status?.trim().toLowerCase();

      await db.Product.update(
        {
          name: req.body.name,
          description: req.body.description,
          image: req.file
            ? `/uploads/products/${req.file.filename}`
            : req.body.oldImage,
          productCategoryId: req.body.category,
          productColorId: req.body.colors,
          price: parseFloat(req.body.price),
          promotionalPrice: parseFloat(req.body.promotionalPrice),
          stock: parseInt(req.body.stock),
          status: allowedStatuses.includes(newStatus) ? newStatus : "active",
        },
        {
          where: { productId: req.params.id },
        }
      );

      res.redirect("/products");
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      res.status(500).send("Error interno del servidor");
    }
  },

  // marcar producto como eliminado
  destroy: async (req, res) => {
    try {
      await db.Product.update(
        { status: "deleted" },
        { where: { productId: req.params.id } }
      );
      res.redirect("/products");
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      res.status(500).send("Error interno del servidor");
    }
  },

  // renderiza vista del carrito (no se modifica)
  cart: (req, res) => {
    res.render("products/productCart", { title: "Carrito" });
  },
};