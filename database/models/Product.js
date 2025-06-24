module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      productId: {
        type: DataTypes.INTEGER,
        field: "product_id",
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING(50),
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      price: DataTypes.FLOAT,
      promotionalPrice: {
        type: DataTypes.FLOAT,
        field: "promotional_price",
      },
      stock: DataTypes.INTEGER,
      productCategoryId: {
        type: DataTypes.INTEGER,
        field: "product_categories_id",
      },
      productColorId: {
        type: DataTypes.INTEGER,
        field: "product_colors_id",
      },
      productStatusId: {
        type: DataTypes.INTEGER,
        field: "product_statuses_id",
      },
    },
    {
      tableName: "products",
      timestamps: false,
    }
  );

  Product.associate = function (models) {
    Product.belongsTo(models.ProductCategory, {
      foreignKey: "productCategoryId",
      as: "category",
    });

    Product.belongsTo(models.ProductColor, {
      foreignKey: "productColorId",
      as: "color",
    });

    Product.hasMany(models.CartDetail, {
      foreignKey: "productId",
      as: "cartDetails",
    });

    Product.belongsTo(models.ProductStatus, {
      foreignKey: "productStatusId",
      as: "status",
    });
    
  };

  return Product;
};
