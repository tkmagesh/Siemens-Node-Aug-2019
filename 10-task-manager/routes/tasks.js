const express = require('express'),
	router = express.Router();

const taskList = [
	{id : 1, name : 'Learn JavaScript', isCompleted : false},
	{id : 2, name : 'Explore Bangalore', isCompleted : true},
	{id : 3, name : 'Plan the weekend', isCompleted : false}
]
router.get('/', function(req, res, next){
	res.json(taskList);
});

router.get('/:id', function(req, res, next){
	const taskId = parseInt(req.params.id);
	const result = taskList.find(task => task.id === taskId);
	if (result){
		res.json(result); 
	} else {
		res.status(404).end();
	}
});

router.post('/', function(req, res, next){
	const taskData = req.body,
		newTaskId = taskList.reduce((result, task) => result > task.id ? result : task.id, 0) + 1;
	const newTask = { ...taskData, id : newTaskId}
	taskList.push(newTask);
	res.status(201).json(newTask);
});

module.exports = router;