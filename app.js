const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//TODO:connect to database
mongoose.connect(config.database,{
  useMongoClient: true
});

//TODO:on connection

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to database: ' + config.database);
});



const app = express();

const users = require('./routes/users');

//TODO:Post Number
const port = 3000;

//TODO:CORS Middleware
app.use(cors());

//TODO:Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//TODO:Body parser Middleware
app.use(bodyParser.json());

//TODO:Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// TODO:Index Route
app.get('/', (req, res) => {
  res.send('Khuong nguyen');
});

//TODO:start Server
app.listen(port, () => {
  console.log('server started on port ' + port);
});
