var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 8000;
var database = require('./config/database');

mongoose.connect(database.url);


// Express 4 Config stuff -----------------------

var env = process.env.NODE_ENV || 'development';

if ('development' == env) {
	app.use(morgan('short'));
	app.use('/', express.static(__dirname + '/public'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded());
}

// End Config -----------------------------------

require('./app/routes')(app);

app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});

app.listen(port);
console.log("App listening on port " + port);
console.log("Environment: " + env);