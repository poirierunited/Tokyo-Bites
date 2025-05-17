const router = require("express").Router();
const User = require("./models/User.js");
const users = require("./data/User.js");
const Product = require("./models/Product.js");
const products = require("./data/Product.js");
const AsyncHandler = require("express-async-handler");

router.post(
  "/users",
  AsyncHandler(async (req, res) => {
    await User.deleteMany({});
    const UserSeeder = await User.insertMany(users);
    res.send({ UserSeeder });
  })
);

router.post(
  "/products",
  AsyncHandler(async (req, res) => {
    await Product.deleteMany({});
    const ProductSeeder = await Product.insertMany(products);
    res.send({ ProductSeeder });
  })
);

module.exports = router;