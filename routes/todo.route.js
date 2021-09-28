const express = require('express');
const router = express.Router();
const todoControllers = require('../controllers/todo.controller')

router.get('/todos',todoControllers.getAllTodos)

router.get('/todos/has-high-priority',todoControllers.getAllTodos)

router.post('/create-todo', todoControllers.createTodo)

router.post('/update-todo/:id', todoControllers.updateTodo)

router.post('/delete-todo/:id', todoControllers.deleteTodo)


module.exports = router;
