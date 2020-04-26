const express = require("express");
const router = express.Router();
const Item = require("../models/items");
const verify = require("./verifyToken");
const { itemValidation } = require("../validation");

router.get("/", verify, async (req, res) => {
  const items = await Item.find({});
  res.status(200).send(items);
});

router.get("/:id", verify, async (req, res) => {
  try {
    const item = await Item.findOne({ _id: req.params.id });
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
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedItem);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndRemove(req.params.id);
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

  const item = new Item({
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

module.exports = router;
