const mongoose = require("mongoose");
const Currency = require("mongoose-currency");

const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  category: {
    type: String,
    trim: true,
    required: true,
  },
  length: {
    type: String,
    trim: true,
  },
  width: {
    type: String,
    trim: true,
  },
  height: {
    type: String,
    trim: true,
  },
  wieght: {
    type: String,
    trim: true,
  },
  price: {
    type: Currency,
    trim: true,
    required: true,
  },
  condition: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
  status: {
    type: String,
    trim: true,
    required: true,
    default: "Available",
  },
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
