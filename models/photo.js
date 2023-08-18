const pool = require('../database');

class Photo {
  static uploadPhoto(newPhoto, callback) {
    pool.query('INSERT INTO posts SET ?', newPhoto, callback);
  }
}

module.exports = Photo;
