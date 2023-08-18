const express = require('express');
const router = express.Router();
const shareController = require('../controller/shareController');

router.post('/sharePost', shareController.sharePost);

module.exports = router;
