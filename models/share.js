const pool = require('../database');

class Share {
  static addShare(newShare, callback) {
    pool.query('INSERT INTO shares SET ?', newShare, callback);
  }
}

module.exports = Share;
