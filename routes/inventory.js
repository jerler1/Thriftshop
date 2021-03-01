const router = require("express").Router();
const inventoryController = require("../controllers/inventoryController");

// Matches with "/api/inventory"
router
    .route("/")
    .get(inventoryController.findAll)
    .post(inventoryController.create);

// /api/inventory/latest
router.get('/latest', inventoryController.findLatest);

// Matches with "/api/inventory/cat/:category"
router.get('/cat/:category', inventoryController.findCat)

// /api/inventory/search
router.get('/search', inventoryController.search);

// Matches with "/api/inventory/:id"
router
    .route("/:id")
    .get(inventoryController.findById)
    .put(inventoryController.update)
    .delete(inventoryController.remove);

module.exports = router;