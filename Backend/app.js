const dotenv = require('dotenv'); 
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes.js');
const captainRoutes = require('./routes/captain.routes');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.post('/captain/register', (req, res) => {
    console.log(req.body); 
    res.send('Captain registered');});
app.post('/captain/login', (req, res) => {
        console.log('Request Body:', req.body); 
      });
      
app.use('/captain', captainRoutes);  

app.use('/user', userRoutes);

module.exports = app;
