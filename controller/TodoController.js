let todoService = require('../service/TodoService');

async function getAllTodos(req, res, next) {
		let todos = await todoService.getAllTodos();
		res.json(todos);
}

async function getTodoById(req, res, next) {
		const id = req.params.id;
		let todo = await todoService.getTodoById(id);
		res.json(todo);
}

async function saveTodo(req, res, next) {
		let todo = req.body;
		todo = await todoService.saveTodo(todo);
		res.status(201).json(todo);
}

async function updateTodo(req, res, next) {
		const id = req.params.id;
		let todo = req.body;
		todo = await todoService.updateTodo(id, todo);
		res.status(200).json(todo);
}

async function deleteTodo(req, res, next) {
		const id = req.params.id;
		let todo = await todoService.deleteTodo(id);
		res.status(200).json(todo);
}

module.exports = {
		getAllTodos,
		getTodoById,
		saveTodo,
		updateTodo,
		deleteTodo,
};