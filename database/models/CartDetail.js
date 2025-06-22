module.exports = (sequelize, DataTypes) => {
  const CartDetail = sequelize.define(
    "CartDetail",
    {
      cartDetailId: {
        type: DataTypes.INTEGER,
        field: "detail_cart_id",
        primaryKey: true,
        autoIncrement: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      createAt: {
        type: DataTypes.DATE,
        field: "createAt",
      },
      cartId: {
        type: DataTypes.INTEGER,
        field: "cart_id",
      },
      productId: {
        type: DataTypes.INTEGER,
        field: "product_id",
      },
    },
    {
      tableName: "cart_details",
      timestamps: false,
    }
  );

  CartDetail.associate = function (models) {
    CartDetail.belongsTo(models.Cart, {
      foreignKey: "cartId",
      as: "cart",
    });

    CartDetail.belongsTo(models.Product, {
      foreignKey: "productId",
      as: "product",
    });
  };

  return CartDetail;
};
