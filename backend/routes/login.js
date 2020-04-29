import express from "express";
const router = express.Router();
import { verify } from "./verifyToken";
import UserController from "../controllers/user";

router.post("/", async (req, res) => {
  UserController.login(req, res);
});

router.get("/user", verify, async (req, res) => {
  UserController.getUser(req, res);
});

export default router;
