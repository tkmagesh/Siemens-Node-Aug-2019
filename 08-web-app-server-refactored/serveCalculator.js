var querystring = require('querystring'),
	calculator = require('./calculator');

module.exports = function(req, res, next){
	if (req.urlObj.pathname === '/calculator'){
		var data = req.method === 'GET' ? req.query : req.body,
			op = queryData.op,
			x = parseInt(queryData.x),
			y = parseInt(queryData.y),
			result = calculator[op](x,y);

		res.write(result.toString());
		res.end();
		next();
	} else {
		next();
	}
}