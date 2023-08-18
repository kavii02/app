const jwt = require('jsonwebtoken');
const User = require('../models/user');

const secretKey = 'your_secret_key';

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  User.getUserByEmail(email, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error during login' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Email or password is incorrect' });
    }

    const user = results[0];

    console.log('Database Password:', user.password);
    console.log('Input Password:', password);

    if (user.password.trim() === password.trim()) {
      const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
      return res.status(200).json({ message: 'Login successful', token });
    } else {
      return res.status(401).json({ message: 'Email or password is incorrect' });
    }
  });
};

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }

    req.userId = decoded.userId;
    next();
  });
};
