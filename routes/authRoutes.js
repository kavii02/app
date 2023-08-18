const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

router.post('/login', authController.loginUser);
router.get('/protected', authController.verifyToken, (req, res) => {
  return res.status(200).json({ message: 'Access granted to protected route' });
});

module.exports = router;
