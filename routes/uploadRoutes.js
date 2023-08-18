const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadController = require('../controller/uploadController');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.single('profilePicture'), uploadController.uploadImage);

module.exports = router;
