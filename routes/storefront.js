const router = require("express").Router();
const storefrontController = require("../controllers/storefrontController");

// Matches with "/api/inventory"
router
    .route("/")
    .get(storefrontController.findAll);

// Matches with "/api/inventory/:id"
router
    .route("/:id")
    .get(storefrontController.findById)
    .put(storefrontController.update);

module.exports = router;