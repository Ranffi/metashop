const { db, Model } = require("../db");

class Cart extends Model {}

Cart.init(
  {},
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = Cart;
