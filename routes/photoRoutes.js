const express = require('express');
const router = express.Router();
const multer = require('multer');
const photoController = require('../controller/photoController');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/uploadPhoto', upload.single('photo'), photoController.uploadPhoto);

module.exports = router;
