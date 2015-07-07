/*! server.js | Main script file for literallic.com */

var app = require('express')()
	;

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(
	process.env.OPENSHIFT_NODEJS_PORT || 8080,
	process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
