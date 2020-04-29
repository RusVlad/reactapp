import express from "express";
const router = express.Router();
import UserController from "../controllers/user";

router.post("/", async (req, res) => {
  UserController.register(req, res);
});

export default router;
