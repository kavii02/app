const Photo = require('../models/photo');

exports.uploadPhoto = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const image_data = req.file.buffer.toString('base64');
  const user_id = req.body.user_id;

  const newPhoto = {
    user_id,
    image_data
  };

  Photo.uploadPhoto(newPhoto, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error uploading photo' });
    }
    return res.status(200).json({ message: 'Photo uploaded successfully' });
  });
};
