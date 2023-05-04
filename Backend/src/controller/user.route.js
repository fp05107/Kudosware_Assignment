const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/user.model.js");
const router = express.Router();

// Showing home page
router.get("/hi", function (req, res) {
  res.send("Hii")
});

// Handling user signup
router.post("/register", async (req, res) => {
  const user = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
    resume: req.body.resume,
    country: req.body.country,
    gender: req.body.gender,
  });
  // send response to client
  res.send(user)
  res.status(200).json({ message: 'Post created successfully' });
});

module.exports = router;
