const { Category, Item, User } = require("./models");
const express = require("express");
const app = express();
var cors = require("cors");

// const { body, validationResult } = require("express-validator");
const PORT = 3001;

const seed = require("./seed");

app.use(express.json());
require("./models");

app.use(cors());
//invoke our seed function
seed();

// GET User
app.get("/user/:id", async (req, res, next) => {
  const id = req.params.id;

  const user = await User.findOne({
    where: {
      id: id,
    },
  });

  res.send(user);
});

// GET items
app.get("/items", async (req, res, next) => {
  const items = await Item.findAll();
  res.json(items);
});

// GET single item
app.get("/items/:itemId", async (req, res, next) => {
  try {
    const item = await Item.findOne({
      where: {
        id: req.params.itemId,
      },
    });
    res.json(item);
  } catch (error) {
    next(error);
  }
});

// GET cart
app.get("/user/:id/cart", async (req, res, next) => {
  const id = req.params.id;

  try {
    const cart = await User.findOne({
      where: {
        id: id,
      },
      include: [Item],
    });

    res.send(cart);
  } catch (error) {
    next(error);
  }
});

// POST/Create item
app.post("/items", async (req, res, next) => {
  try {
    const item = await Item.create(req.body);
    res.send(item);
  } catch (error) {
    next(error);
  }
});

//PUT/Update item
app.put("/items/:itemId", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.itemId);
    const updatedItem = await item.update(req.body);
    res.json(updatedItem);
  } catch (error) {
    next(error);
  }
});

//DELETE/Destroy item
app.delete("/items/:itemId", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.itemId);
    const destroyedItem = await item.destroy();
    res.json(destroyedItem);
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, () => {
  console.log(`Your server is now listening to port: ${PORT}`);
});
