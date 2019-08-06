var fs = require('fs'),
	path = require('path');
	
var staticExtns =['.html', '.css', '.js', '.jpg', '.png', '.ico', '.xml', '.txt', '.json'];

function isStatic(resourceName){
	var resExtn = path.extname(resourceName);
	return staticExtns.indexOf(resExtn) >= 0;
}

module.exports = function(req, res){
	var resourceName = req.urlObj.pathname === '/' ? '/index.html' : req.urlObj.pathname;
	
	if (isStatic(resourceName)){
		var resourceFullName = path.join(__dirname, resourceName);
		if (!fs.existsSync(resourceFullName)){
			res.statusCode = 404;
			res.end();
			return;
		}
		fs.createReadStream(resourceFullName).pipe(res);
	}
}