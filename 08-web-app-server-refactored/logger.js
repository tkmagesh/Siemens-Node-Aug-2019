var chalk = require('chalk');

module.exports = function(req, res, next){
	var logStr = chalk.red(req.method) + '\t' + chalk.yellow(req.urlObj.pathname.padEnd(30));
	var startTime = new Date();
	res.on('finish', function(){
		var endTime = new Date(),
			delta = endTime - startTime;
		logStr += chalk.magenta(res.statusCode) + '\t' + chalk.green(delta) + 'ms';
		console.log(logStr);
	});
	next();
}