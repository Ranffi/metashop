const { db, DataTypes, Model } = require("../db");

class User extends Model {}

User.init(
  {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    isAdmin: DataTypes.BOOLEAN,
  },
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = User;
