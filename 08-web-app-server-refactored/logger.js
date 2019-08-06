module.exports = function(req, res, next){
	var logStr = req.method + '\t' + req.urlObj.pathname.padEnd(30);
	var startTime = new Date();
	res.on('finish', function(){
		var endTime = new Date(),
			delta = endTime - startTime;
		logStr += res.statusCode + '\t' + delta + 'ms';
		console.log(logStr);
	});
	next();
}