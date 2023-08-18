const Share = require('../models/share');

exports.sharePost = (req, res) => {
  const { post_id, user_id } = req.body;

  const newShare = {
    post_id,
    user_id
  };

  Share.addShare(newShare, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error sharing post' });
    }
    return res.status(201).json({ message: 'Post shared successfully' });
  });
};
