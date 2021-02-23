const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storefrontSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a restaurant name.",
  },
  address: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  cuisine: {
    type: String,
    trim: true,
  },
});

const Storefront = mongoose.model("Storefront", storefrontSchema);

module.exports = Storefront;
