module.exports = {
  catalog: (req, res) => {
    res.render("products/productCatalog", { title: "Catálogo" });
  },

  details: (req, res) => {
    res.render("products/productDetails", { title: "Detalles" });
  },

  cart: (req, res) => {
    res.render("products/productCart", { title: "Carrito" });
  },
};
