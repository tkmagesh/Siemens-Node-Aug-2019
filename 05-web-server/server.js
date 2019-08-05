var http = require('http'),
	fs = require('fs');

/*
	req - IncomingMessage (ReadableStream)
	res - ServerResponse (WritableStream)

*/
var server = http.createServer(function(req, res){
	/*var fileContents = fs.readFileSync('index.html', { encoding : 'utf8'});
	res.write(fileContents);
	res.end();*/

	var stream = fs.createReadStream('index.html');
	stream.on('data', function(chunk){
		res.write(chunk);
	});
	stream.on('end', function(){
		res.end();
	});
	stream.on('error', function(){
		res.statusCode = 500;
		res.end();
	});
});

server.listen(8080);

server.on('listening', function(){
	console.log('server listening on 8080!');
});

