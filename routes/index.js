const express = require('express');
const router = express.Router();

const loginRoutes = require("./login");
const inventoryRoutes = require("./inventory");
const employeeRoutes = require("./employee");
const storefrontRoutes = require("./storefront");

router.use(loginRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/employee", employeeRoutes);
router.use("/storefront", storefrontRoutes);

module.exports = router;