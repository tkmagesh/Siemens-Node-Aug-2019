const express = require('express'),
	router = express.Router(),
	taskService = require('../services/taskService');

router.get('/', function(req, res, next){
	const taskList = taskService.getAll();
	res.json(taskList);
});

router.get('/:id', function(req, res, next){
	const taskId = parseInt(req.params.id);
	const result = taskService.get(taskId);
	if (result){
		res.json(result); 
	} else {
		res.status(404).end();
	}
});

router.post('/', function(req, res, next){
	const taskData = req.body;
	const newTask = taskService.addNew(taskData);
	res.status(201).json(newTask);
});

module.exports = router;