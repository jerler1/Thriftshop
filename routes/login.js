const express = require('express');
const router = express.Router();

router.post("/login", require('../controllers/loginController'));

module.exports = router;