module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define(
    "ProductCategory",
    {
      productCategoryId: {
        type: DataTypes.INTEGER,
        field: "product_categories_id",
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
      },
    },
    {
      tableName: "product_categories",
      timestamps: false,
    }
  );

  ProductCategory.associate = function (models) {
    ProductCategory.hasMany(models.Product, {
      foreignKey: "productCategoryId",
      as: "products",
    });
  };

  return ProductCategory;
};
