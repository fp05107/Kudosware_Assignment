const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/user.model.js");
const router = express.Router();

// Showing home page
router.get("/applicants", async function (req, res) {
  
	try {
		const data = await User.find()
		return res.status(200).send(data);
	  } catch (error) {
		return res.status(404).send({ message: error.message });
	  }
	
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
    email: req.body.email
  });

  // send response to client
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
