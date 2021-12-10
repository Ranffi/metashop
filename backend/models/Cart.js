const { db, Model } = require("../db");

class Cart extends Model {}
// Cart model for connecting the Items and User model
Cart.init(
  {},
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = Cart;
