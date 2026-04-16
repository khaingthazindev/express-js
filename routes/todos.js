var express = require('express');
var router = express.Router();
var todos = require("../dummy/todos");

router.get('/', function(req, res, next) {
		res.json(todos);
});

router.get('/:id', function (req, res, next) {
		const id = req.params.id;
		res.json({
				id: id,
				title: 'Test'
		});
});

router.post('/', function (req, res, next) {
		const todo = req.body;
		res.status(201).json(todo);
});

router.put('/:id', function (req, res, next) {
		const todo = req.body;
		const id = req.params.id;
		res.status(200).json(todo);
});

router.delete('/:id', function (req, res, next) {
		const id = req.params.id;
		res.status(200).json({
				id: id,
				message: 'successfully deleted'
		});
});


module.exports = router;
