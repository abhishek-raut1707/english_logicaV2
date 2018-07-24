
var express = require('express');
var cors = require('cors');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();
var port = process.env.PORT || 8080;


app.use(cors());
// app.use('*', cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// var dbConfig = require('./config/db.config');

// mongoose.connect(dbConfig.localUrl);

// mongoose.connection.on('open', () => {
//     console.log(' ---- DataBase is Connected ---- ');
// });

// mongoose.connection.on('error', () => {
//     console.log('error occured');
//     process.exit();
// });


require('./routes/routes')(app);


app.listen(port, () => {
    console.log(' ---- Listening on port ' + port + ' ---- ');
});