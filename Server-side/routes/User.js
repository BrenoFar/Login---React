const express = require('express');
const router = express.Router();
const { User } = require('../models');



router.post('/', async (req, res) => {
  try {
    const userData = req.body;
    const createdUser = await User.create(userData);
    res.json(createdUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user', message: error.message });
  }
});

module.exports = router;
