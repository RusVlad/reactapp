const mongoose = require("mongoose");

const ItemsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 1,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  published: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  image: {
    data: Buffer,
    contentType: String,
    required: false,
  },
});

module.exports = mongoose.model("Items", ItemsSchema);
