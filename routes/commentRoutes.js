const express = require('express');
const router = express.Router();
const commentController = require('../controller/commentController');

router.post('/addComment', commentController.addComment);

module.exports = router;
