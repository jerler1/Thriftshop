const express = require('express');
const router = express.Router();

const authRoutes = require("./auth");
const inventoryRoutes = require("./inventory");
const employeeRoutes = require("./employee");
const storefrontRoutes = require("./storefront");
const invoiceRoutes = require("./invoice");
const checkoutSession = require("./checkout");

router.use("/auth/", authRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/employee", employeeRoutes);
router.use("/storefront", storefrontRoutes);
router.use("/invoice", invoiceRoutes);
router.use("/create-checkout-session", checkoutSession);

module.exports = router;