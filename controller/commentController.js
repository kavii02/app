const Comment = require('../models/comment');

exports.addComment = (req, res) => {
  const { post_id, user_id, content } = req.body;

  const newComment = {
    post_id,
    user_id,
    content
  };

  Comment.addComment(newComment, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error adding comment' });
    }
    return res.status(201).json({ message: 'Comment added successfully' });
  });
};
