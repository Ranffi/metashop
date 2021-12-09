//the role of this function is to be able to push our data from our json file into our table, and to add the table into our db
const path = require("path");
const fs = require("fs").promises;

//access to our model and database
const { db } = require("./db");
const { Category, Item, User } = require("./models");

//define our seed function
const seed = async () => {
  //clear out our table
  await db.sync({ force: true });

  //find the path to our json file
  const seedCategoriesPath = path.join(__dirname, "json/categories.json");
  const seedItemPath = path.join(__dirname, "json/item.json");
  const seedUserPath = path.join(__dirname, "json/user.json");

  const categoryBuffer = await fs.readFile(seedCategoriesPath);
  const itemBuffer = await fs.readFile(seedItemPath);
  const userBuffer = await fs.readFile(seedUserPath);

  const categoryData = JSON.parse(String(categoryBuffer));
  const itemData = JSON.parse(String(itemBuffer));
  const userData = JSON.parse(String(userBuffer));

  // will create each row for the Tables
  const categoryPromises = categoryData.map((category) =>
    Category.create(category)
  );
  const itemPromises = itemData.map((item) => Item.create(item));
  const userPromises = userData.map(async (user) => await User.create(user));

  const jin = await User.create({
    name: "Jin",
    email: "jin@test.com",
    password: "sdfkmsdkfm",
    isAdmin: true,
  });

  const item = await Item.create({
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    CategoryId: 3,
  });
  const item2 = await Item.create({
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    CategoryId: 2,
  });

  await jin.addItems(item);
  await jin.addItems(item2);

  await Promise.all(categoryPromises);
  await Promise.all(itemPromises);
  await Promise.all(userPromises);

  console.log("data has been successfully populated into the table");
};

//export this seed function
module.exports = seed;
