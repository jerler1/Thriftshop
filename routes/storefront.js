const router = require("express").Router();
const storefrontController = require("../controllers/storefrontController");

// Matches with "/api/storefront"
router
    .route("/")
    .get(storefrontController.findAll);

// Matches with "/api/storefront/:id"
router
    .route("/:id")
    .get(storefrontController.findById)
    .put(storefrontController.update);

module.exports = router;