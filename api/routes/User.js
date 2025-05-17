const express = require("express");
const AsyncHandler = require("express-async-handler");
const User = require("../models/User.js");
const generateToken = require("../tokenGenerate.js");
const userRoute = express.Router();
const protect = require("../middleware/Auth");

// User login route
userRoute.post(
  "/login",
  AsyncHandler(async (req, res) => {
    const { email, password } = req.body; // Extract email and password from request body
    const user = await User.findOne({ email }); // Find user by email

    // Check if user exists and password matches
    if (user && (await user.matchPassword(password))) {
      // Respond with user data and a token if authentication is successful
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        createdAt: user.createdAt,
      });
    } else {
      // Respond with an error if authentication fails
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }
  })
);

// User registration route
userRoute.post(
  "/",
  AsyncHandler(async (req, res) => {
    const {
      run,
      name,
      lastname,
      region,
      city,
      address,
      birthday,
      gender,
      phoneNumber,
      email,
      password,
    } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ message: "Email already registered" });
      return;
    } else {
      // Create new user
      const user = await User.create({
        run: run,
        name: name,
        lastname: lastname,
        region: region,
        city: city,
        address: address,
        birthday: birthday,
        gender: gender,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
      });

      // Check if user was created successfully
      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          createdAt: user.createdAt,
        });
      } else {
        res.status(400).json({ message: "Invalid User Data" });
      }
    }
  })
);

userRoute.get(
  "/get-user/:id",
  protect,
  AsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
      res.json({
        // _id: user.id,
        run: user.run,
        name: user.name,
        lastname: user.lastname,
        region: user.region,
        city: user.city,
        address: user.address,
        phoneNumber: user.phoneNumber,
        email: user.email,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
      });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  })
);

module.exports = userRoute;