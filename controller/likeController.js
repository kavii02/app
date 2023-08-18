const Like = require('../models/like');

exports.likePost = (req, res) => {
  const { post_id, user_id } = req.body;

  const newLike = {
    post_id,
    user_id
  };

  Like.addLike(newLike, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error liking post' });
    }
    return res.status(200).json({ message: 'Post liked successfully' });
  });
};
