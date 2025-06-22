module.exports = (sequelize, DataTypes) => {
  const ProductColor = sequelize.define(
    "ProductColor",
    {
      productColorId: {
        type: DataTypes.INTEGER,
        field: "product_color_id",
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
      },
    },
    {
      tableName: "product_colors",
      timestamps: false,
    }
  );

  ProductColor.associate = function (models) {
    ProductColor.hasMany(models.Product, {
      foreignKey: "productColorId",
      as: "products",
    });
  };

  return ProductColor;
};
