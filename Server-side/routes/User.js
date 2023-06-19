const express = require('express');
const router = express.Router();
const { User } = require('../models');



//Routers

// GET /user 

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve users', message: error.message });
  }
});

// POST /user

router.post('/', async (req, res) => {
const user = req.body;
console.log("This is the body ",req.body);
await User.create(user);
res.json(user);

});
module.exports = router;
