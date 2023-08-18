const pool = require('../database');

class Comment {
  static addComment(newComment, callback) {
    pool.query('INSERT INTO comments SET ?', newComment, callback);
  }
}

module.exports = Comment;
