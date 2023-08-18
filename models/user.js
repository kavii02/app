const pool = require('../database'); 

class User {
  static createUser(newUser, callback) {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        return callback(err, null);
      }

      connection.query('INSERT INTO register SET ?', newUser, (err, result) => {
        connection.release(); 

        if (err) {
          console.error(err);
          return callback(err, null);
        }

        callback(null, result);
      });
    });
  }

  static getUserByEmail(email, callback) {
    pool.query('SELECT * FROM register WHERE email = ?', email, callback); 
  }
}

module.exports = User;
