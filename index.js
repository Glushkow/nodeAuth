const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//setup to read an env var from a file

dotenv.config();

//Connect to DB

mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true},
    ()=> console.log('Connected to DB!'))

//Middleware

app.use(express.json());

//Route middleware
app.use('/api/user', authRoute);
app.listen(3000, ()=> console.log('Server is running'));
