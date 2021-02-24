const express = require('express');
const router = express.Router();

const loginRoutes = require("./login");
const inventoryRoutes = require("./inventory");

router.use(loginRoutes);
router.use("/inventory", inventoryRoutes);

module.exports = router;