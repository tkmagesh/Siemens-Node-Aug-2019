var http = require('http');
	
var dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	serveCalculator = require('./serveCalculator'),
	notFoundHandler = require('./notFoundHandler');

var server = http.createServer(function(req, res){
	dataParser(req);	
	console.log(req.method + '\t' + req.url);
	serveStatic(req, res);
	serveCalculator(req, res);
	notFoundHandler(res);
});

server.listen(9090);

server.on('listening', function(){
	console.log('server listening on 9090!');
});