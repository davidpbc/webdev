// Global scope of variable to be able to use it from console
var todos = [];
window.setTimeout(function() {
  // This wrapper is for letting chrome display the page before prompts and alerts
  var input = prompt("What would you like to do?");

  while (input !== "quit") {
    if (input === "list") {
      listTodos();
    }
    else if (input === "new") {
      addTodo();
    }
    else if (input === "delete") {
      deleteTodo();
    }

    input = prompt("What would you like to do?");
  }
  console.log("OK, YOU QUIT THE APP");

}, 500);

function listTodos() {
  console.log("***************");
  todos.forEach(function(todo, index, array) {
    // array is the complete array but is not used here
    console.log(index + ": " + todo);
  })
  console.log("***************");
}

function addTodo() {
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("Added Todo");
}

function deleteTodo() {
  var index = prompt("Enter index of todo to delete.");
  todos.splice(index, 1);
  console.log("Deleted Todo");
}
