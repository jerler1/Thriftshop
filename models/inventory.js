const mongoose = require("mongoose");
const Currency = require("mongoose-currency");

const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  type: {
      type: String,
      trim, true,
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
  },
  condition: {
    type: String,
    trim: true,
  },
  image: {
      type: Array,
  },
  status: {
      type: String,
      trim: true,
  }
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
