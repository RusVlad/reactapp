import express from "express";
const router = express.Router();

// TODO
router.post("/", async (req, res) => {
  return res.status(200).send("Logged out");
});

export default router;
