const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  createEmployee: function (req, res) {
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
      db.Employee.create(employeeToCreate)
        .then((newEmployee) => {
          const token = jwt.sign({
            _id: newEmployee._id
          }, process.env.SECRET);
          res.json({ token });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).end();
        })
    });
  },
  login: function (req, res) {
    const { email, password } = req.body;
    db.Employee.findOne({ email: email.toLowerCase() })
      .then(foundUser => {
        bcrypt.compare(password, foundUser.password, (err, result) => {
          if (result) {
            const token = jwt.sign({
              _id: foundUser._id,
              storefront: foundUser.storefront,
              firstname: foundUser.firstname,
              lastname: foundUser.lastname,
            }, process.env.SECRET);
            res.json({ token });
          } else {
            res.status(401).end();
          }
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).end();
      })
  },
  logout: function (req, res) {
    // destroy the session
    res.status(200).send();
  },
};
