const express = require('express');
const router = express.Router();
const likeController = require('../controller/likeController');

router.post('/likePost', likeController.likePost);

module.exports = router;
