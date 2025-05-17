const express = require("express");
const AsyncHandler = require("express-async-handler");
const User = require("../models/User");
const generateToken = require("../tokenGenerate");
const userRoute = express.Router();

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

module.exports = userRoute;