// Associations
const Cart = require("./Cart");
const Category = require("./Category");
const Item = require("./Item");
const User = require("./User");

/*
Associations:

User has one ShoppingCart
ShoppingCart belongs to User

Category has many Items
Item belongs to Category

ShoppingCart has many Items through Order
Item has many ShoppingCart through Order

*/

User.belongsToMany(Item, { through: Cart });
Item.belongsToMany(User, { through: Cart });

Category.hasMany(Item);
Item.belongsTo(Category);

module.exports = { Cart, Category, Item, User };
