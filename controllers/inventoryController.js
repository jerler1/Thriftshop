const db = require("../models");

// Defining methods for the inventoryController
module.exports = {
  findAll: function (req, res) {
    let { limit = 0 } = req.query;
    limit = parseInt(limit, 10);

    db.Inventory.find()
      .limit(limit)
      .sort({ addedAt: 1 })
      .then((dbInventory) => res.json(dbInventory))
      .catch((err) => res.status(422).json(err));
  },
  findCat: function (req, res) {
    let regex = new RegExp (req.params.category, "i")
    db.Inventory.find({ category: regex })
    .then((dbInventory) => res.json(dbInventory))
    .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Inventory.findById(req.params.id)
      .then((dbInventory) => res.json(dbInventory))
      .catch((err) => res.status(422).json(err));
  },
  findLatest: function (req, res) {
    let { limit = 0 } = req.query;
    limit = parseInt(limit, 10);

    const oneDay = 60 * 60 * 24 * 1000;
    const lastDay = new Date(Date.now() - oneDay);

    db.Inventory.find({ addedAt: { $gte: lastDay } })
      .limit(limit)
      .then((dbInventory) => res.json(dbInventory))
      .catch((err) => res.status(500).json(err));
  },
  create: function (req, res) {
    db.Inventory.create(req.body)
      .then((dbInventory) => {
        db.Storefront.findOneAndUpdate(
          { _id: req.body.storefront },
          { $push: { items: [dbInventory._id] } },
          { new: true }
        ).then((updatedStorefront) => {
          res.json(dbInventory);
        });
      })
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Inventory.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((dbInventory) => res.json(dbInventory))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Inventory.findById({ _id: req.params.id })
      .then((dbInventory) => dbInventory.remove())
      .then((dbInventory) => res.json(dbInventory))
      .catch((err) => res.status(422).json(err));
  },
};
