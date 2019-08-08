const express = require('express'),
	router = express.Router(),
	taskService = require('../services/taskService');

router.get('/', function(req, res, next){
	taskService.getAll()
		.then(function(taskList){
			res.json(taskList);	
		});
});

router.get('/:id', function(req, res, next){
	const taskId = parseInt(req.params.id);
	taskService.get(taskId)
		.then(function(result){
			if (result){
				res.json(result); 
			} else {
				res.status(404).end();
			}
		});
});

router.post('/', function(req, res, next){
	const taskData = req.body;
	taskService.addNew(taskData)
		.then(function(newTask){
			res.status(201).json(newTask);	
		});
});

module.exports = router;