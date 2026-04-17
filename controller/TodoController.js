var todos = require('../dummy/todos');

async function getAllTodos(req, res, next) {
		res.json(todos);
}

async function getTodoById(req, res, next) {
		const id = req.params.id;
		res.json({
				id: id,
				title: 'Test'
		});
}

async function saveTodo(req, res, next) {
		const todo = req.body;
		res.status(201).json(todo);
}

async function updateTodo(req, res, next) {
		const todo = req.body;
		const id = req.params.id;
		res.status(200).json(todo);
}

async function deleteTodo(req, res, next) {
		const id = req.params.id;
		res.status(200).json({
				id: id,
				message: 'successfully deleted'
		});
}

module.exports = {
		getAllTodos,
		getTodoById,
		saveTodo,
		updateTodo,
		deleteTodo,
};