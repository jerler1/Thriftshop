const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storefrontSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  owner: {
    type: String,
    trim: true,
    required: true,
  },
  address1: {
    type: String,
    trim: true,
    required: true,
  },
  address2: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
    required: true,
  },
  state: {
    type: String,
    trim: true,
    required: true,
  },
  zip: {
    type: String,
    trim: true,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: "Employee",
    },
  ],
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Inventory"
    }
  ],
  invoices: [
    {
      type: Schema.Types.ObjectId,
      ref: "Invoice"
    }
  ]
});

const Storefront = mongoose.model("Storefront", storefrontSchema);

module.exports = Storefront;
