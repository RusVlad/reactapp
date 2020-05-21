import express from "express";
import { verify } from "./verifyToken";
import UserController from "../controllers/user";
import multer from "multer";

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + "-" + Date.now() + "." + extension);
  },
});
const upload = multer({ storage: storage });

router.post("/profile", upload.single("avatar"), async (req, res) => {
  UserController.updateProfile(req, res);
});

router.post("/", async (req, res) => {
  UserController.login(req, res);
});

router.post("/user", verify, async (req, res) => {
  UserController.getUser(req, res);
});

export default router;
