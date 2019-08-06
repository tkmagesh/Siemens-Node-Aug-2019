var http = require('http');
	
var dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	serveCalculator = require('./serveCalculator'),
	notFoundHandler = require('./notFoundHandler'),
	app = require('./app');

app.use(dataParser);
app.use(serveStatic);
app.use(serveCalculator);
app.use(notFoundHandle);

//console.log(req.method + '\t' + req.url);

var server = http.createServer(app);

server.listen(9090);

server.on('listening', function(){
	console.log('server listening on 9090!');
});