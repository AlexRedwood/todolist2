import { taskFactory } from "./factory.js";

let allTasks = [
  taskFactory({
    title: "Learn stuff",
    from: "Project 2",
    date: "15.03.2020",
    priority: "Medium",
    note: true
  }),
  taskFactory({
    title: "Learn english",
    date: "10.01.2020"
  }),
  taskFactory({
    title: "Learn stuff",
    from: "Project 2",
    priority: "High",
    note: true,
    done: true
  })
];

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
  let task = taskFactory({ title: getInputValue() });
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
