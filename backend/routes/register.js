const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { registerValidation } = require("../validation");

router.post("/", async (req, res) => {
  // Validate
  const { error } = registerValidation(req.body);
  if (error) {
    let errorMessages = error.details.map((err) => err.message);
    return res.status(400).send({
      error: errorMessages,
    });
  }

  // Check availability
  const emailExists = await User.findOne({
    email: req.body.email,
  });

  if (emailExists) {
    return res
      .status(400)
      .send({ error: ["User with that email already exists"] });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // Create model
  const user = new User({
    username: req.body.username,
    password: hashPassword,
    email: req.body.email,
  });

  // Create user
  try {
    const savedUser = await user.save();
    return res.json({
      message: "User created",
      user: savedUser._id,
    });
  } catch (err) {
    return res.json({ message: err });
  }
});

module.exports = router;
