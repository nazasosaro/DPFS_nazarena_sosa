module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
    {
      cartId: {
        type: DataTypes.INTEGER,
        field: "cart_id",
        primaryKey: true,
        autoIncrement: true,
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        field: "total_price",
      },
      createAt: {
        type: DataTypes.DATE,
        field: "createAt",
      },
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
      },
    },
    {
      tableName: "carts",
      timestamps: false,
    }
  );

  Cart.associate = function (models) {
    Cart.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });

    Cart.hasMany(models.CartDetail, {
      foreignKey: "cartId",
      as: "details",
    });
  };

  return Cart;
};
