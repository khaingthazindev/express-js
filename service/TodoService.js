var todos = require('../dummy/todos');

async function getAllTodos() {
	return todos;
}

async function getTodoById(id) {
		return todos[id];
}

async function saveTodo(todo) {
		return todo;
}

async function updateTodo(id, todo) {
		return todo;
}

async function deleteTodo(id) {
		return todos[id];
}

module.exports = {
		getAllTodos,
		getTodoById,
		saveTodo,
		updateTodo,
		deleteTodo
}