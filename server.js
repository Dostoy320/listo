var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var database = require('./config/database');

mongoose.connect(database.url);


// Express 4 Config stuff -----------------------

var env = process.env.NODE_ENV || 'development';

if ('development' == env) {
	app.use(express.static(__dirname + '/public'));
}

// End Config -----------------------------------

require('./app/routes')(app);

app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});

app.listen(port);
console.log("App listening on port " + port);
console.log(env);