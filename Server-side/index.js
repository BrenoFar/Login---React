const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');

app.use(bodyParser.json()); // Para analisar corpos de requisições com formato JSON
app.use(bodyParser.urlencoded({ extended: true })); // Para analisar corpos de requisições com formato x-www-form-urlencoded


// Routers
const userRouter = require('./routes/User');
app.use('/users', userRouter);



db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server running on port 3001');
    
    });
});
