const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  createEmployee: function(req, res) {
    const employeeToCreate = {
      email: req.body.email,
    };
    bcrypt.hash(req.body.password, 8, (err, hashedPassword) => {
      if (err) throw new Error(err);
      console.log(hashedPassword);
    });
  },
  login: function (req, res) {
    const { email, password } = req.body;
    db.Employee.findOne({ email: email })
      .then((user) => res.json({user}))
      .catch((err) => res.status(401).json(err))
  },
  logout: function (req, res) {
    // destroy the session 
    res.status(200).send();
  }
}