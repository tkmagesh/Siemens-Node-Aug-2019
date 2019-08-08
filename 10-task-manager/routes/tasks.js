const express = require('express'),
	router = express.Router(),
	taskService = require('../services/taskService');

/*
router.get('/', function(req, res, next){
	taskService.getAll()
		.then(function(taskList){
			res.json(taskList);	
		});
});*/

//using async await

router.get('/', async function(req, res, next){
	const taskList = await taskService.getAll()
	res.json(taskList);	
});

router.get('/:id', async function(req, res, next){
	const taskId = parseInt(req.params.id);
	const result = await taskService.get(taskId)
	if (result){
		res.json(result); 
	} else {
		res.status(404).end();
	}
});

router.post('/', async function(req, res, next){
	const taskData = req.body;
	const newTask = await taskService.addNew(taskData);
	res.status(201).json(newTask);	
});

module.exports = router;