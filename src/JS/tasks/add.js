import { taskFactory } from "./factory.js";

let allTasks = [];

const submitTodoBtn = document.getElementById("submit-todo");
submitTodoBtn.addEventListener("click", function(event) {
  // Prevent default submit behavior
  event.preventDefault();
  // Get task name from User and add it to All Tasks Array
  allTasks.push(getTask());

  console.table(allTasks);
});

function getTask() {
  // Get user input value, save it and then clear input
  let task = taskFactory(getInputValue());
  clearTaskInput();
  return task;
}

function getInputValue() {
  // Get user input value as New Task
  return document.getElementById("new-todo").value;
}

function clearTaskInput() {
  // Clear user input
  document.getElementById("new-todo").value = "";
}
