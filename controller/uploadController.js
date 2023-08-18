const fs = require('fs');
const Upload = require('../models/upload');

exports.uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const imageData = req.file.buffer.toString('base64');

  const filename = Upload.saveImageToFile(imageData);

  return res.status(200).json({ message: 'File uploaded successfully', filename });
};
