//## 01 refactor this code, using named function and passing them as callback
var app = () => {
const fs = require('fs');

const file = './todo.txt';

const showResult = function(err) {
  if (err) return console.log(err);
  console.log('todo added!');
}

const addTodo = function(err, todoList) {
  if (err) return console.log(err);
  todoList = todoList + '\n watch GOT';
  fs.writeFile(file, todoList, showResult);
}

fs.readFile(file, 'utf8', addTodo);
}

module.exports = app

//## 02 create a 08_callback.exercise_01.test.js file and... test :)
