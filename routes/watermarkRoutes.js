const express = require('express');
const router = express.Router();
const watermarkController = require('../controllers/watermarkController');

router.post('/watermark', watermarkController.addWatermark);

module.exports = router;