module.exports = (sequelize, DataTypes) => {
  const UserCategory = sequelize.define(
    "UserCategory",
    {
      userCategoryId: {
        type: DataTypes.INTEGER,
        field: "user_categories_id",
        primaryKey: true,
        autoIncrement: true,
      },
      category: {
        type: DataTypes.STRING(25),
      },
    },
    {
      tableName: "user_categories",
      timestamps: false,
    }
  );

  UserCategory.associate = function (models) {
    UserCategory.hasMany(models.User, {
      foreignKey: "userCategoryId",
      as: "users",
    });
  };

  return UserCategory;
};
