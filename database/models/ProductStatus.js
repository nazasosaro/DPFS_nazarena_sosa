module.exports = (sequelize, DataTypes) => {
  const ProductStatus = sequelize.define(
    "ProductStatus",
    {
      productStatusId: {
        type: DataTypes.INTEGER,
        field: "product_statuses_id",
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(20),
      },
    },
    {
      tableName: "product_statuses",
      timestamps: false,
    }
  );

  ProductStatus.associate = function (models) {
    ProductStatus.hasMany(models.Product, {
      foreignKey: "productStatusId",
      as: "products",
    });
  };

  return ProductStatus;
};
