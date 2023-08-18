const pool = require('../database');

class Like {
  static addLike(newLike, callback) {
    pool.query('INSERT INTO likes SET ?', newLike, callback);
  }
}

module.exports = Like;
