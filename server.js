const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');


require("./config/database");
require('dotenv').config
const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));


//PUT API ROUTES HERE!!!

app.use('/api/users', require('./routes/api/users'));

//static catch-all app; always goes last bc want to test everything else first
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

const port = process.env.PORT || 3002;

app.listen(port, () => console.log('Express app running on port ${port}'));


