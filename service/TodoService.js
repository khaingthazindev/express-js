// var todos = require('../dummy/todos');
const Todo = require('../models/Todo')

async function getAllTodos() {
	return Todo.find();
}

async function getTodoById(id) {
		return Todo.findById(id);
}

async function saveTodo(todo) {
		let newTodo = new Todo(todo);
		return newTodo.save();
}

async function updateTodo(id, todo) {
		let existingTodo = await Todo.findById(id);
		if (todo.title === undefined) {
				throw new Error('title field is required.');
		}
		if (existingTodo) {
			return Todo.findByIdAndUpdate(id, todo, {new: true, runValidators: true }); // {new: true} return updated item
		} else {
				throw new Error(`Todo ${id} not found`);
		}
}

async function deleteTodo(id) {
		let existingTodo = await Todo.findById(id);
		if (existingTodo) {
				return Todo.findByIdAndDelete(id);
		} else {
				throw new Error(`Todo ${id} not found`);
		}
}

module.exports = {
		getAllTodos,
		getTodoById,
		saveTodo,
		updateTodo,
		deleteTodo
}