// const execSync = require('execSync');
const app = require('./08_callback.exercise_01')

test('true is true', () => {
  expect(true).toBe(true)
});

test('it should add a new todo to the todo list', (done) => {
  var initalNumberOfLines
  var finalNumberOfLines
  const exec = require('child_process').exec;

  function getInitalNumberOfLines(){
    exec('wc ./todo.txt', getInitialNumberOfLinesFromWordCount)
  }

  function getInitialNumberOfLinesFromWordCount(error, wordCountResults) {
    initalNumberOfLines = parseInt(wordCountResults.split("      ")[1]);
  };

  function getFinalNumberOfLines() {
    exec('wc ./todo.txt', getFinalNumberOfLinesFromWordCount)

  }
  function getFinalNumberOfLinesFromWordCount(error, wordCountResults) {
    finalNumberOfLines = parseInt(wordCountResults.split("      ")[1]);
  };

  getInitalNumberOfLines()
  setTimeout(() => {
    app()
    getFinalNumberOfLines()
  }, 2000)
  setTimeout(() => {
    expect(initalNumberOfLines + 1).toEqual(finalNumberOfLines)
    done()
  }, 4000)
})
