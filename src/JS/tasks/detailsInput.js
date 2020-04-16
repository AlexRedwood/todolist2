import * as DetailsToggle from "./detailsToggle.js";

function putTaskInfoToInput(task) {
  // Function to put info from tasks in inputs when details are shown
  setNameInput(task.title);
  setDateInput(task.date);
  setNoteInput(task.note);
}

// Get input
function getNameInput() {
  let nameInput = document.getElementById("todo-name-changer").value;
  console.log(nameInput);
  return nameInput;
}

function getDateInput() {
  let dateInput = document.getElementById("date").value;
  console.log(dateInput);
  return dateInput;
}

function getNoteInput() {
  let noteInput = document.getElementById("note-changer").value;
  console.log(noteInput);
  return noteInput;
}

// ---------------------------------------------------

// Set input
function setNameInput(name) {
  document.getElementById("todo-name-changer").value = name;
  console.log(`New name for input is set: ${name}`);
}

function setDateInput(date) {
  document.getElementById("date").value = formatDate(date);
  console.log(`New date for input is set: ${date}`);
  formatDate(date);
}

function setPiority(level) {
  console.log(level);
}

function setNoteInput(note) {
  document.getElementById("note-changer").value = note;
  console.log(`New Note for input is set: ${note}`);
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

export { putTaskInfoToInput };
