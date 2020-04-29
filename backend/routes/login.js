import express from "express";
const router = express.Router();
import UserModel from "../models/user";
import { LoginValidation } from "../validation";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { verify } from "./verifyToken";

router.post("/", async (req, res) => {
  // validation
  const { error } = LoginValidation(req.body);

  if (error) {
    let errorMessages = error.details.map((err) => err.message);
    return res.status(400).send({
      error: errorMessages,
    });
  }

  // Find user
  const user = await UserModel.findOne({ email: req.body.email });

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
  const user = await UserModel.findOne({ email: req.body.email });
  res.send({ user: user });
});

export default router;
