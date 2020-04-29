import express from "express";
const router = express.Router();
import UserModel from "../models/user";
import { verify } from "./verifyToken";
import UserController from "../controllers/user";

router.post("/", async (req, res) => {
  UserController.login(req, res);
});

router.get("/user", verify, async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });
  res.send({ user: user });
});

export default router;
