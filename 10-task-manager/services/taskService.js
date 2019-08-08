const taskDb = require('./taskDb');

function getAll(callback){
	taskDb.readData(function(taskList){
		callback([...taskList]);	
	});
	
}

function get(id, callback){
	taskDb.readData(function(taskList){
		const result = taskList.find(task => task.id === taskId);
		callback(result);
	});
}

function addNew(taskData, callback){
	taskDb.readData(function(taskList){
		const newTaskId = taskList.reduce((result, task) => result > task.id ? result : task.id, 0) + 1;
		const newTask = { ...taskData, id : newTaskId}
		taskList.push(newTask);
		taskDb.saveData(taskList, function(){
			callback(newTask);
		});
	});
}

const taskService = { 
	getAll,
	get,
	addNew
};

module.exports = taskService;