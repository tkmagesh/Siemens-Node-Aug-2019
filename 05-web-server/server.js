var http = require('http'),
	fs = require('fs'),
	path = require('path');

/*
	req - IncomingMessage (ReadableStream)
	res - ServerResponse (WritableStream)

*/
var server = http.createServer(function(req, res){
	/*var fileContents = fs.readFileSync('index.html', { encoding : 'utf8'});
	res.write(fileContents);
	res.end();*/
	var resourceName = req.url === '/' ? '/index.html' : req.url;
	console.log(req.method + '\t' + req.url);
	var resourceFullName = path.join(__dirname, resourceName);
	if (!fs.existsSync(resourceFullName)){
		res.statusCode = 404;
		res.end();
		return;
	}
	fs.createReadStream(resourceFullName).pipe(res);
});

server.listen(8080);

server.on('listening', function(){
	console.log('server listening on 8080!');
});

