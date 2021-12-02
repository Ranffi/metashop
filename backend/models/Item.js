const { db, DataTypes, Model } = require("../db");

class Item extends Model {}

Item.init(
  {
    title: DataTypes.STRING,
    price: DataTypes.FLOAT(5, 2),
    description: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = Item;
