function greeting(name) {
  console.log(name);
}

function processUserInput(callback) {
  var name = prompt('Please enter the name.');
  callback(name);
}

processUserInput(greeting);