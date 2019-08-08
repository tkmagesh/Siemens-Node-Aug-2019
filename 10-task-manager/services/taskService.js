const taskDb = require('./taskDb');

function getAll(callback){
	return taskDb.readData();	
}

function get(id, callback){
	return taskDb
		.readData()
		.then(function(taskList){
			const result = taskList.find(task => task.id === taskId);
			return result;
		});
}

function addNew(taskData, callback){
	return taskDb
		.readData()
		.then(function(taskList){
			const newTaskId = taskList.reduce((result, task) => result > task.id ? result : task.id, 0) + 1;
			const newTask = { ...taskData, id : newTaskId}
			taskList.push(newTask);
			return taskDb
				.saveData(taskList)
				.then(function(){
					return newTask;
				});
		});
}

const taskService = { 
	getAll,
	get,
	addNew
};

module.exports = taskService;