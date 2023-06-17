const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', (req, res) => {
    res.send('Hello from user route');

});

router.post('/', async (req, res) => {
    const user = req.body; // GET the user from the request
    await User.create(user); // Create a new user in the database
    res.json(user); // Return the user to the client (browser)
        
});

module.exports = router;