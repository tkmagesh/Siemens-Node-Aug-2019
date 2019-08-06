var fs = require('fs'),
	path = require('path');

var staticExtns =['.html', '.css', '.js', '.jpg', '.png', '.ico', '.xml', '.txt', '.json'];

function isStatic(resourceName){
	var resExtn = path.extname(resourceName);
	return staticExtns.indexOf(resExtn) >= 0;
}

module.exports = function(req, res, next){
	var resourceName = req.urlObj.pathname === '/' ? '/index.html' : req.urlObj.pathname;
	
	if (isStatic(resourceName)){
		var resourceFullName = path.join(__dirname, resourceName);
		if (!fs.existsSync(resourceFullName)){
			res.statusCode = 404;
			res.end();
			return;
		}
		/*var stream = fs.createReadStream(resourceFullName);
		stream.on('data', function(chunk){
			console.log('[@serveStatic] serving chunk');
			res.write(chunk);
		});
		stream.on('end', function(){
			console.log('[@serveStatic] ending response');
			res.end();
			next();
		});*/

		var stream = fs.createReadStream(resourceFullName);
		stream.pipe(res);
		stream.on('end', function(){
			next();
		});
		
	} else {
		next();
	}
}