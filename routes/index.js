const express = require('express');
const router = express.Router();

const loginRoutes = require("./login");

router.use(loginRoutes);

module.exports = router;