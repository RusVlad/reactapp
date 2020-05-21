import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import itemsRoute from "./routes/items";
import registerRoute from "./routes/register";
import loginRoute from "./routes/login";
import logoutRoute from "./routes/logout";

dotenv.config();
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.json({ limit: "50mb" }));

// Import routes

app.use("/items", itemsRoute);
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("Home");
});

const DB_NAME = "expressTestDb";

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    dbName: DB_NAME,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected");
  }
);

app.listen(3001);
