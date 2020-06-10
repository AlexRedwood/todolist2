import * as DetailsToggle from "./detailsToggle.js";
import { activateStar } from "../style/priority.js";
import { renderAllTasksFrom } from "./render.js";

function putTaskInfoToInput(task) {
  // Function to put info from tasks in inputs when details are shown
  setName(task.title);
  setDate(task.date);
  setPiority(task.priority);
  setNote(task.note);
}

function changeTaskOnInput(projects, number) {
  // Change a task with input from Details Window
  changeTitleOnInput(projects[number].tasks);
  changeDateOnInput(projects[number].tasks);
  changePriorityOnInput(projects[number].tasks);
  changeNoteOnInput(projects[number].tasks);
}

function changeTitleOnInput(arr) {
  let input = document.getElementById("todo-name-changer");

  input.oninput = () => changeTitle(arr);
}

function changeTitle(arr) {
  // get number of task from details
  let taskNumber = DetailsToggle.getDetailsContainerIdNumber();
  // Use this number to get to task.title in array
  let task = arr[taskNumber];
  let input = document.getElementById("todo-name-changer");
  // Task title is now user input value
  task.title = input.value;
  // rerender to see the changes
  renderAllTasksFrom(arr);
}

function changeDateOnInput(arr) {
  let input = document.getElementById("date");

  input.oninput = () => changeDate(arr);
}

function changeDate(arr) {
  // get number of task from details
  let taskNumber = DetailsToggle.getDetailsContainerIdNumber();
  // Use this number to get to task.date in array
  let task = arr[taskNumber];
  let input = document.getElementById("date");
  // Task date is now formatted date input value
  task.date = formatDate2(input.value);
  // rerender to see the changes
  renderAllTasksFrom(arr);
}

function changePriorityOnInput(arr) {
  let stars = [
    document.getElementById("star-1"),
    document.getElementById("star-2"),
    document.getElementById("star-3"),
  ];

  for (let star of stars) {
    star.addEventListener("click", () => changePriority(arr));
  }
}

function changePriority(arr) {
  // get number of task from details
  let taskNumber = DetailsToggle.getDetailsContainerIdNumber();
  // Use this number to get to task.date in array
  let task = arr[taskNumber];
  let input = getPriorityInput();
  // Task date is now formatted date input value
  task.priority = input;
  // rerender to see the changes
  renderAllTasksFrom(arr);
}

function getPriorityInput() {
  let star1 = document.getElementById("star-1");

  if (star1.classList.contains("selected-1")) {
    return "medium";
  } else if (star1.classList.contains("selected-2")) {
    return "high";
  } else {
    return "low";
  }
}

function changeNoteOnInput(arr) {
  let input = document.getElementById("note-changer");

  input.oninput = () => changeNote(arr);
}

function changeNote(arr) {
  // get number of task from details
  let taskNumber = DetailsToggle.getDetailsContainerIdNumber();
  // Use this number to get to task.note in array
  let task = arr[taskNumber];
  let input = document.getElementById("note-changer");
  // Task Note is now formatted Note input value
  task.note = input.value;
  // rerender to see the changes
  renderAllTasksFrom(arr);
}

// ---------------------------------------------------

// Set input
function setName(name) {
  document.getElementById("todo-name-changer").value = name;
}

function setDate(date) {
  document.getElementById("date").value = formatDate(date);
  formatDate(date);
}

function setPiority(level) {
  if (level === "high") {
    activateStar(3);
  } else if (level === "medium") {
    activateStar(2);
  } else if (level === "low") {
    activateStar(1);
  }
}

function setNote(note) {
  document.getElementById("note-changer").value = note;
}

function formatDate(date) {
  // If date is undefined yet, then return nothing ""
  if (!date) return "";
  // Date formatting: from "dd.mm.yyyy" to "yyyy-MM-dd"
  let day = date.split(".")[0];
  let month = date.split(".")[1];
  let year = date.split(".")[2];

  let formatted = `${year}-${month}-${day}`;
  return formatted;
}

function formatDate2(date) {
  // If date is undefined yet, then return nothing ""
  if (!date) return "";
  // Date formatting: from  "yyyy-MM-dd" to "dd.mm.yyyy"
  let day = date.split("-")[2];
  let month = date.split("-")[1];
  let year = date.split("-")[0];

  let formatted = `${day}.${month}.${year}`;
  return formatted;
}

export { putTaskInfoToInput, changeTaskOnInput };
