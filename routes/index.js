const express = require('express');
const router = express.Router();

const loginRoutes = require("./login");
const inventoryRoutes = require("./inventory");

router.use(loginRoutes);

module.exports = router;