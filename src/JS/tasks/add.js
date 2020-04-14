import { taskFactory } from "./factory.js";
import { renderAllTasksFrom } from "./render.js";

function addTaskTo(arr) {
  const submitTodoBtn = document.getElementById("submit-todo");

  submitTodoBtn.addEventListener("click", function (event) {
    // Prevent default submit behavior
    event.preventDefault();
    // Get task name from User and add it to tasks array
    pushTaskTo(arr);
    console.table(arr);
    // Render each array to the page
    renderAllTasksFrom(arr);

    return arr;
  });
}

function pushTaskTo(arr) {
  // Push task to array
  arr.push(getTask());
  return arr;
}

function getTask() {
  // Get user input value, save it
  let task = taskFactory({ title: getInputValue() });
  // and clear input
  clearTaskInput();
  return task;
}

function getInputValue() {
  // Get user input value as New Task : STRING
  return document.getElementById("new-todo").value;
}

function clearTaskInput() {
  // Clear user input
  document.getElementById("new-todo").value = "";
}

export { getTask, addTaskTo };
