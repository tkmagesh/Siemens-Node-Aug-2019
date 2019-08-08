const taskDb = require('./taskDb');

function getAll(){
	const taskList = taskDb.readData();
	return [...taskList];
}

function get(id){
	const result = taskList.find(task => task.id === taskId);
	return result;
}

function addNew(taskData){
	const newTaskId = taskList.reduce((result, task) => result > task.id ? result : task.id, 0) + 1;
	const newTask = { ...taskData, id : newTaskId}
	taskList.push(newTask);
	return newTask;
}

const taskService = { 
	getAll,
	get,
	addNew
};

module.exports = taskService;