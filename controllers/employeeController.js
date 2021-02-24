const db = require("../models");

// Defining methods for the employeeController
module.exports = {
    findAll: function (req, res) {
        db.Employee.find(req.query)
            .sort({ date: -1 })
            .then((dbEmployee) => res.json(dbEmployee))
            .catch((err) => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Employee.findById(req.params.id)
            .then((dbEmployee) => res.json(dbEmployee))
            .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Employee.create(req.body)
            .then((dbEmployee) => res.json(dbEmployee))
            .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Employee.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        })
            .then((dbEmployee) => res.json(dbEmployee))
            .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Employee.findById({ _id: req.params.id })
            .then((dbEmployee) => dbEmployee.remove())
            .then((dbEmployee) => res.json(dbEmployee))
            .catch((err) => res.status(422).json(err));
    },
};