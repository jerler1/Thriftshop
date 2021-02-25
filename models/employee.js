const mongoose = require("mongoose");
const Storefront = require("./storefront");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  storefront: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Storefront,
      required: true,
  },
  isAdmin: {
    type: Boolean,
    trim: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
