const loadProducts = require("../utils/loadProducts");
const saveProducts = require("../utils/saveProducts");
const { v4: uuidv4 } = require("uuid"); // paquete de Node.js que genera identificadores unicos universales

module.exports = {
  // listar todos los productos
  products: async (req, res) => {
    const products = await loadProducts();
    res.render("products/productCatalog", { title: "Catálogo", products });
  },

  // mostrar el detalle de un producto por ID
  details: async (req, res) => {
    const products = await loadProducts();
    const product = products.find(
      (p) => String(p.id) === String(req.params.id)
    ); // convierte a string de modo a comparar correctamente el id entero como el creado con uuid
    if (!product) return res.status(404).send("Producto no encontrado");
    res.render("products/productDetails", { title: req.params.name, product });
  },

  // mostrar formulario de creacion de producto
  create: (req, res) => {
    res.render("products/createProduct", { title: "Cargar Producto" });
  },

  // guardar producto nuevo (POST)
  store: async (req, res) => {
    const products = await loadProducts();

    console.log(req.body);

    const newProduct = {
      id: uuidv4(),
      name: req.body.name || "Nombre no especificado",
      description: req.body.description || "Sin descripción",
      image: req.file
        ? `/uploads/products/${req.file.filename}`
        : "/assets_front/images/default.jpg",
      category: req.body.category || "Sin categoría",
      colors: req.body.colors || "Sin colores",
      price: parseFloat(req.body.price) || 0,
      promotional_price: parseFloat(req.body.promotionalPrice) || 0,
      stock: parseInt(req.body.stock) || 0,
      status: "active",
    };

    products.push(newProduct); // se agrega el producto nuevo al array productos
    await saveProducts(products); // se actualiza el JSON de productos con el nuevo dato

    res.redirect(`/products/details/${newProduct.id}`);
  },

  // mostrar formulario de edicion de producto especifico
  edit: async (req, res) => {
    const products = await loadProducts();
    const product = products.find(
      (p) => String(p.id) === String(req.params.id)
    );
    res.render("products/editProduct", { title: "Editar Producto", product });
  },

  // actualizar producto (PUT)
  update: async (req, res) => {
    const products = await loadProducts();
    const index = products.findIndex(
      (p) => String(p.id) === String(req.params.id)
    );
    if (index === -1) return res.status(404).send("Producto no encontrado");

    products[index] = {
      ...products[index],
      name: req.body.name?.trim() || products[index].name,
      description: req.body.description?.trim() || products[index].description,
      image: req.file
        ? `/uploads/products/${req.file.filename}`
        : products[index].image,
      category: req.body.category?.trim() || products[index].category,
      colors: req.body.colors?.trim() || products[index].colors,
      price: req.body.price
        ? parseFloat(req.body.price)
        : products[index].price,
      promotional_price: req.body.promotionalPrice
        ? parseFloat(req.body.promotionalPrice)
        : products[index].promotional_price,
      stock: req.body.stock ? parseInt(req.body.stock) : products[index].stock,
    };
    

    await saveProducts(products);
    res.redirect("/products");
  },

  cart: (req, res) => {
    res.render("products/productCart", { title: "Carrito" });
  },
};
