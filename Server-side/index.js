const express = require('express');
const app = express();

const db = require('./models');

// Routers
const userRouter = require('./routes/User');
app.use('/user', userRouter);



db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server running on port 3001');
    
    });
});
