const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  createEmployee: function(req, res) {
    const employeeToCreate = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      storefront: req.body.storefront,
      isAdmin: req.body.isAdmin,
    };
    bcrypt.hash(req.body.password, 8, (err, hashedPassword) => {
      if (err) throw new Error(err);
      console.log(hashedPassword);
      employeeToCreate.password = hashedPassword;
      db.Employee.create(employeeToCreate).then((newEmployee) => {
        //FIXME: Don't send back the user
        res.json(newEmployee);
      })
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