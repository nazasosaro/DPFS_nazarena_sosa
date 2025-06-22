module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(25),
      },
      lastname: {
        type: DataTypes.STRING(25),
      },
      email: {
        type: DataTypes.STRING(70),
      },
      password: {
        type: DataTypes.STRING(50),
      },
      userCategoryId: {
        type: DataTypes.INTEGER,
        field: "user_categories_id",
      },
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );

  User.associate = function (models) {
    User.belongsTo(models.UserCategory, {
      foreignKey: "userCategoryId",
      as: "category",
    });

    User.hasMany(models.Cart, {
      foreignKey: "userId",
      as: "carts",
    });
  };

  return User;
};
