var fs = require('fs'),
	path = require('path');

var staticExtns =['.html', '.css', '.js', '.jpg', '.png', '.ico', '.xml', '.txt', '.json'];

function isStatic(resourceName){
	var resExtn = path.extname(resourceName);
	return staticExtns.indexOf(resExtn) >= 0;
}

module.exports = function(staticResPath){
	return function(req, res, next){
		var resourceName = req.urlObj.pathname === '/' ? '/index.html' : req.urlObj.pathname;
		
		if (isStatic(resourceName)){
			var resourceFullName = path.join(staticResPath, resourceName);
			if (!fs.existsSync(resourceFullName)){
				res.statusCode = 404;
				res.end();
				return;
			}
			
			var stream = fs.createReadStream(resourceFullName);
			stream.pipe(res);
			stream.on('end', function(){
				next();
			});
			
		} else {
			next();
		}
	};
}