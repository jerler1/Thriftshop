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
  storefront: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Storefront,
    required: true,
  },
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
