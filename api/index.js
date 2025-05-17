const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const mongoose = require("mongoose");

const databaseSeeder = require("./databaseSeeder.js");
const userRoute = require("./routes/User.js");
const productRoute = require("./routes/Product.js");

const app = express();

const PORT = process.env.PORT;
const MONGO_DB = process.env.MONGO_DB;

mongoose
  .connect(MONGO_DB)
  .then(() => {
    console.log("Connected to Mongo successfuly");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.use(express.json());
app.use(cors());

// mongo db seeder routes
app.use("/api/seed", databaseSeeder);

// user routes
app.use("/api/users", userRoute);

// products route
app.use("/api/products", productRoute);

app.listen(PORT || 9000, () => {
  console.log(`App listening in port: ${PORT}`);
});