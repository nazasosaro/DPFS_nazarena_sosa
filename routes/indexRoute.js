var express = require('express');
var router = express.Router();

const { categoriesFeatured, offerProducts } = require("../config/demo");

/* GET home page. */
router.get('/', function(req, res) {
  res.render("index", {
    title: "Bienvenido",
    categories: categoriesFeatured,
    offers: offerProducts,
  });
});

module.exports = router;
