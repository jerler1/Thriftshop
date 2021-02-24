const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  username: {
    type: String,
    trim: true,
  },
  storefront: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Storefront,
  },
  isAdmin: {
    type: Boolean,
    trim: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
