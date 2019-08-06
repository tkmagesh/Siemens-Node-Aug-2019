var http = require('http'),
	path = require('path');
	
var dataParser = require('./dataParser'),
	logger = require('./logger'),
	serveStatic = require('./serveStatic'),
	serveCalculator = require('./serveCalculator'),
	notFoundHandler = require('./notFoundHandler'),
	app = require('./app');

app.use(dataParser);
app.use(logger);
app.use(serveStatic(path.join(__dirname, 'public')));
app.use(serveCalculator);
app.use(notFoundHandler);

var server = http.createServer(app);

server.listen(9090);

server.on('listening', function(){
	console.log('server listening on 9090!');
});