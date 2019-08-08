const path = require('path'),
	fs = require('fs');

const dataFile = path.join(__dirname, '../data/taskDb.json');

function readData(callback){
	fs.readFile(dataFile, {encoding : 'utf8'}, function(err, rawData){
		callback(JSON.parse(rawData));
	});
}

function saveData(dataToWrite, callback){
	fs.writeFile(dataFile, JSON.stringify(dataToWrite), callback);
}

module.exports = { readData, saveData };