const {Cart, Category, Item, User} = require('./models')
const express = require("express");
const app = express();
const cors = require('cors')
// const { body, validationResult } = require("express-validator");
const PORT = 3001;
app.use(cors())
const seed = require("./seed");

app.use(express.json());
require("./models");

//invoke our seed function
seed();

app.get('/categories', async(req, res, next) => {
  try {
    const categories = await Category.findAll()
    res.send(categories)
    console.log('we hit this route from the frontend')
  } catch(err) {
    next(err)
  }
})

app.listen(PORT, () => {
  console.log(`Your server is now listening to port: ${PORT}`);
});
