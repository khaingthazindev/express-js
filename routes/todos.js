var express = require('express');
var router = express.Router();
var todos = require("../dummy/todos");
var todoController = require('../controller/TodoController')

router.get('/', todoController.getAllTodos);

router.get('/:id', todoController.getTodoById);

router.post('/', todoController.saveTodo);

router.put('/:id', todoController.updateTodo);

router.delete('/:id', todoController.deleteTodo);


module.exports = router;
