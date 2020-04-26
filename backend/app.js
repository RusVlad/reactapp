const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
// Import routes
const itemsRoute = require("./routes/items");
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const logoutRoute = require("./routes/logout");

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
