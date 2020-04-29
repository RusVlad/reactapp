import express from "express";
const router = express.Router();
import User from "../models/user";
import bcrypt from "bcryptjs";
import { RegisterValidation } from "../validation";

router.post("/", async (req, res) => {
  // Validate
  const { error } = RegisterValidation(req.body);
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

export default router;
