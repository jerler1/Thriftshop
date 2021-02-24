const router = require("express").Router();
const inventoryRoutes = require("./inventory");

router.use("/inventory", inventoryRoutes);

module.exports = router;