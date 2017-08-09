const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to database
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connect', () => {
  console.log('connected to database' + config.database);
});

mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});


const app = express();

const users = require('./routes/users');

//Post Number
const port = 3000;

//CORS Middleware
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
  res.send('Khuong nguyen');
});

//start Server
app.listen(port, () => {
  console.log('server started on port' + port);
});
