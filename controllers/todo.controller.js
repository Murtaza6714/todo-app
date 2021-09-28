const todoModel = require("../models/todo.model");
const mongooose = require("mongoose");

exports.createTodo = async (req, res, next) => {
  const newId = mongooose.Types.ObjectId();
  const todo = req.body;
  console.log(req.body);
  const todoCreated = await todoModel.findByIdAndUpdate(newId, todo, {
    new: true,
    upsert: true,
  });
  if (!todoCreated) {
    res.status(404).json("Todo not Created!!");
    throw new Error(" User not created!! ");
  }
  res.status(200).json(todoCreated);
};

exports.updateTodo = async (req, res, next) => {
  const todoId = req.params.id;
  const updatedtodo = req.body;
  const todoUpdated = await todoModel.findByIdAndUpdate(todoId, updatedtodo, {
    new: true,
    upsert: true,
  });
  if (!todoUpdated) {
    res.status(404).json("Todo not Updated!!");
    throw new Error(" Todo not Updated!! ");
  }
  res.status(200).json(todoUpdated);
};

exports.deleteTodo = async (req, res, next) => {
  const todoId = req.params.id;
  const todoDeleted = await todoModel.findByIdAndDelete(todoId);
  console.log(todoDeleted);
  if (todoDeleted !== []) {
    throw new Error(" Todo not Deleted!! ");
  }
};

exports.getAllTodos = async (req, res, next) => {
  const allTodos = await todoModel.find();
  if (!allTodos) {
    return res.status(404).json("No Todo Available!!");
  }
  res.status(200).json(allTodos);
};


exports.getAllTodosByPriority = async (req, res, next) => {
    const allTodosByPriority = await todoModel.find({hasHighPriority: true});
    if (!allTodosByPriority) {
      return res.status(404).json("No Todo With Priority Available!!");
    }
    res.status(200).json(allTodosByPriority);
  };
  