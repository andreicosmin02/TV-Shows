const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/routes');

const app = express();



app.use(express.json());
app.use('/api', routes);


mongoose.connect(process.env.MONGO_URI);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});
database.once('connected', () => {
    console.log('Database Connected');
})

port = 3000 || process.env.PORT;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
