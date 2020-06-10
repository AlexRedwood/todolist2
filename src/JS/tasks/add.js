import { taskFactory } from "./factory.js";
import { refreshProjects } from "../projects/render.js";

function addTaskTo(arr, number) {
  const submitTodoBtn = document.getElementById("submit-todo");

  submitTodoBtn.addEventListener("click", () => addTask(arr, number));
}

function addTask(arr, number) {
  // Prevent default submit behavior
  event.preventDefault();
  // Get task name from User and add it to tasks array
  pushTaskTo(arr[number].tasks);
  console.table(arr[number].tasks);
  // Rerender array
  refreshProjects(arr, number);
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
