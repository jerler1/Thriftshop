const express = require('express');
const router = express.Router();

const authRoutes = require("./auth");
const inventoryRoutes = require("./inventory");
const employeeRoutes = require("./employee");
const storefrontRoutes = require("./storefront");
const invoiceRoutes = require("./invoice");

router.use("/auth/", authRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/employee", employeeRoutes);
router.use("/storefront", storefrontRoutes);
router.use("/invoice", invoiceRoutes);

module.exports = router;