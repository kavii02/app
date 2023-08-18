const User = require('../models/user');

exports.registerUser = (req, res) => {
  const { name, email, username, password, gender } = req.body;

  const newUser = {
    name,
    email,
    username,
    password,
    gender
  };

  User.createUser(newUser, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error registering user' });
    }
    return res.status(201).json({ message: 'User registered successfully' });
  });
};
