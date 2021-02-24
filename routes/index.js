const express = require('express');
const router = express.Router();

const loginRoutes = require("./login");
const inventoryRoutes = require("./inventory");

router.use(loginRoutes);
router.use(inventoryRoutes);

module.exports = router;