const path = require('path'),
	fs = require('fs'),
	util = require('util'),
	bluebird = require('bluebird');

const dataFile = path.join(__dirname, '../data/taskDb.json');

/*function readData(callback){
	fs.readFile(dataFile, {encoding : 'utf8'}, function(err, rawData){
		callback(JSON.parse(rawData));
	});
}

function saveData(dataToWrite, callback){
	fs.writeFile(dataFile, JSON.stringify(dataToWrite), callback);
}
*/

/*function readData(){
	var p = new Promise(function(resolveFn, rejectFn){
		fs.readFile(dataFile, {encoding : 'utf8'}, function(err, rawData){
			if (err){
				rejectFn(err);
			} else {
				resolveFn(JSON.parse(rawData));	
			}
		});	
	})
	return p;
}

function saveData(dataToWrite){
	var p = new Promise(function(resolveFn, rejectFn){
		fs.writeFile(dataFile, JSON.stringify(dataToWrite), function(err, result){
			if (err){
				rejectFn(err);
			} else {
				resolveFn(result);	
			}
		});
	});
	return p;
}

*/


/*
var readFileAsync = util.promisify(fs.readFile),
	writeFileAsync = util.promisify(fs.writeFile);*/

/*function readData(){
	return readFileAsync(dataFile, {encoding : 'utf8'})
		.then(function(rawData){
			return JSON.parse(rawData);
		});
}*/

/*async function readData(){
	const rawData = await readFileAsync(dataFile, {encoding : 'utf8'});
	return JSON.parse(rawData);
}

function saveData(dataToWrite){
	return writeFileAsync(dataFile, JSON.stringify(dataToWrite))
}*/


//using bluebird
bluebird.promisifyAll(fs);

async function readData(){
	const rawData = await fs.readFileAsync(dataFile, {encoding : 'utf8'});
	return JSON.parse(rawData);
}

function saveData(dataToWrite){
	return fs.writeFileAsync(dataFile, JSON.stringify(dataToWrite))
}

module.exports = { readData, saveData };