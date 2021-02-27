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
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  storefront: {
    type: Schema.Types.ObjectId,
    ref: Storefront,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    trim: true,
  },
});

employeeSchema.pre("save", function (next) {
  this.email = this.email.toLowerCase();
  next();
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
