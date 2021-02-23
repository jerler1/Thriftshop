const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storefrontSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  owner: {
      type: String,
      trim, true,
  },
  address1: {
    type: String,
    trim: true,
  },
  address2: {
    type: String,
    trim: true,
  },
  city: {
      type: String,
      trim: true,
  },
  state: {
      type: String,
      trim: true,
  },
  zip: {
      type: String,
      trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
});

const Storefront = mongoose.model("Storefront", storefrontSchema);

module.exports = Storefront;
