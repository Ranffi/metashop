const {Cart, Category, Item, User} = require('./models')
const express = require("express");
const app = express();
// const { body, validationResult } = require("express-validator");
const PORT = 3001;

const seed = require("./seed");

app.use(express.json());
require("./models");

//invoke our seed function
seed();

app.listen(PORT, () => {
  console.log(`Your server is now listening to port: ${PORT}`);
});
