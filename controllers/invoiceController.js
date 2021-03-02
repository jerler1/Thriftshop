const db = require("../models");

// Defining methods for the invoiceController
module.exports = {
    findAll: function (req, res) {
        db.Invoice.find()
            .sort({ date: -1 })
            .then((dbInvoice) => res.json(dbInvoice))
            .catch((err) => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Invoice.findById(req.params.id)
            .then((dbInvoice) => res.json(dbInvoice))
            .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(`invoiceController(Line17): ${req}`);
        db.Invoice.create(req)
            .then((dbInvoice) => res.json(dbInvoice))
            .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Invoice.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        })
            .then((dbInvoice) => res.json(dbInvoice))
            .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Invoice.findById({ _id: req.params.id })
            .then((dbInvoice) => dbInvoice.remove())
            .then((dbInvoice) => res.json(dbInvoice))
            .catch((err) => res.status(422).json(err));
    },
};