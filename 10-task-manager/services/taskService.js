const taskDb = require('./taskDb');

function getAll(callback){
	return taskDb.readData();	
}

async function get(id, callback){
	const taskList = await taskDb.readData();
	const result = taskList.find(task => task.id === taskId);
	return result;
}

async function addNew(taskData, callback){
	const taskList = await taskDb.readData()
	const newTaskId = taskList.reduce((result, task) => result > task.id ? result : task.id, 0) + 1;
	const newTask = { ...taskData, id : newTaskId}
	taskList.push(newTask);
	await taskDb.saveData(taskList)
	return newTask;
}

const taskService = { 
	getAll,
	get,
	addNew
};

module.exports = taskService;