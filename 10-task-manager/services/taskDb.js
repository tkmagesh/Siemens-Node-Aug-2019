const path = require('path'),
	fs = require('fs');

const dataFile = path.join(__dirname, '../data/taskDb.json');

function readData(){
	var rawData = fs.readFileSync(dataFile, {encoding : 'utf8'});
	return JSON.parse(rawData);
}

module.exports = { readData };