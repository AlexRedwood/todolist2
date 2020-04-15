import * as DetailsToggle from "./detailsToggle.js";

// Clear all input in details -----------------------
function clearInput() {
  clearNameInput();
  setDateInput();
  clearNoteInput();
}

function clearNameInput() {
  document.getElementById("todo-name-changer").value = "";
}

function clearDateInput() {
  document.getElementById("date").value = "";
}

function setPiority(level) {
  console.log(level);
}

function clearNoteInput() {
  document.getElementById("note-changer").value = "";
}
// ---------------------------------------------------

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
  document.getElementById("date").value = date;
  console.log(`New date for input is set: ${date}`);
}

function setNoteInput(note) {
  document.getElementById("note-changer").value = note;
  console.log(`New Note for input is set: ${note}`);
}

export { getDateInput, clearDateInput };
