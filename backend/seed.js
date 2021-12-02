//the role of this function is to be able to push our data from our json file into our table, and to add the table into our db
const path = require("path");
const fs = require("fs").promises;

//access to our model and database
const { db } = require("./db");
const { Cart, Category, Item, User } = require("./models");

//define our seed function
const seed = async () => {
  //clear out our table
  await db.sync({ force: true });

  //find the path to our json file
  const seedItemPath = path.join(__dirname, "json/item.json");
  const seedCategoriesPath = path.join(__dirname, "json/categories.json");
  const seedUserPath = path.join(__dirname, "json/user.json");

  const itemBuffer = await fs.readFile(seedItemPath);
  const categoryBuffer = await fs.readFile(seedCategoriesPath);
  const userBuffer = await fs.readFile(seedUserPath);

  const itemData = JSON.parse(String(itemBuffer));
  const categoryData = JSON.parse(String(categoryBuffer));
  const userData = JSON.parse(String(userBuffer));

  // will create each row for the Tables
  const itemPromises = itemData.map((item) => Item.create(item));
  const categoryPromises = categoryData.map((category) =>
    Category.create(category)
  );
  const userPromises = userData.map((user) => User.create(user));

  await Promise.all(itemPromises);
  await Promise.all(categoryPromises);
  await Promise.all(userPromises);

  console.log("data has been successfully populated into the table");
};

//export this seed function
module.exports = seed;
