const db = require("../models");

// Defining methods for the storefrontController
module.exports = {
    findAll: function (req, res) {
        db.Storefront.find(req.query)
            .sort({ date: -1 })
            .then((dbStorefront) => res.json(dbStorefront))
            .catch((err) => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Storefront.findById(req.params.id)
            .then((dbStorefront) => res.json(dbStorefront))
            .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Storefront.create(req.body)
            .then((dbStorefront) => res.json(dbStorefront))
            .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Storefront.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        })
            .then((dbStorefront) => res.json(dbStorefront))
            .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Storefront.findById({ _id: req.params.id })
            .then((dbStorefront) => dbStorefront.remove())
            .then((dbStorefront) => res.json(dbStorefront))
            .catch((err) => res.status(422).json(err));
    },
};