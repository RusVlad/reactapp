const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verify = require("./verifyToken");

router.post("/", async (req, res) => {
  // validation
  const { error } = loginValidation(req.body);

  if (error) {
    let errorMessages = error.details.map((err) => err.message);
    return res.status(400).send({
      error: errorMessages,
    });
  }

  // Find user
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).send({
      error: ["Email or password is wrong"],
    });
  }

  // Check password
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send({
      error: ["Invalid Password"],
    });
  }

  // jwt
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send({ token: token });
});

router.get("/user", verify, async (req, res) => {
  // validation
  const user = await User.findOne({ email: req.body.email });
  res.send({ user: user });
});

module.exports = router;
