import express from "express";
const router = express.Router();
import { verify } from "./verifyToken";
import ItemsController from "../controllers/items";

router.get("/", verify, async (req, res) => {
  ItemsController.getAll(req, res);
});

router.get("/:id", verify, async (req, res) => {
  ItemsController.getOneById(req, res);
});

router.put("/:id", verify, async (req, res) => {
  ItemsController.put(req, res);
});

router.delete("/:id", verify, async (req, res) => {
  ItemsController.delete(req, res);
});

router.post("/", verify, async (req, res) => {
  ItemsController.createOne(req, res);
});

export default router;
