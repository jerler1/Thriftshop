const express = require('express');
const router = express.Router();

const authRoutes = require("./auth");
const inventoryRoutes = require("./inventory");

router.use(authRoutes);
router.use("/inventory", inventoryRoutes);

module.exports = router;