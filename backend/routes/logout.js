const express = require("express");
const router = express.Router();

// TODO
router.post("/", async (req, res) => {
  return res.status(200).send("Logged out");
});

module.exports = router;
