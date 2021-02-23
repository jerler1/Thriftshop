const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
      type: String,
      trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
