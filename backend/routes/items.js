import express from "express";
const router = express.Router();
import ItemModel from "../models/items";
import { verify } from "./verifyToken";
import { itemValidation } from "../validation";

router.get("/", verify, async (req, res) => {
  const items = await ItemModel.find({});
  res.status(200).send(items);
});

router.get("/:id", verify, async (req, res) => {
  try {
    const item = await ItemModel.findOne({ _id: req.params.id });
    res.status(200).send(item);
  } catch (err) {
    res.json({ message: err });
  }
});

router.put("/:id", verify, async (req, res) => {
  const { error } = itemValidation(req.body);

  if (error) {
    let errorMessages = error.details.map((err) => err.message);
    return res.status(400).send({
      error: errorMessages,
    });
  }

  try {
    const updatedItem = await ItemModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedItem);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const deletedItem = await ItemModel.findByIdAndRemove(req.params.id);
    res.json(deletedItem);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", verify, async (req, res) => {
  const { error } = itemValidation(req.body);

  if (error) {
    return res.status(400).send({
      error: error.details[0].message,
    });
  }

  const item = new ItemModel({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    published: req.body.published,
  });

  try {
    const savedItem = await item.save();
    res.json(savedItem);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
