const db = require("../models");

module.exports = {
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