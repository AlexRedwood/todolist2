import { taskFactory } from "./factory.js";
import { refreshProjects } from "../projects/render.js";

function addTaskTo(arr) {
  const submitTodoBtn = document.getElementById("submit-todo");

  submitTodoBtn.addEventListener("click", () => addTask(arr));
}

function addTask(arr) {
  // Prevent default submit behavior
  event.preventDefault();
  // Loop to get active project
  for (let project of arr) {
    if (project.isActive) pushTaskTo(project.tasks);
  }

  // Rerender array
  refreshProjects(arr);
  return arr;
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
