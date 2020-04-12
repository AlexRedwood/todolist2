import Calendar from "../../ICONS/calendar.svg";
import Note from "../../ICONS/edit.svg";

function createNewTask({ task }) {}

// Example of creating a one todo
document.getElementById("todos").append(createTodoLi(12));

function createTodoLi(i) {
  // create list element with a class 'todo'
  let li = document.createElement("li");
  li.setAttribute("class", "todo");
  // Append label, input, div and button to it
  li.append(createLabel(i));
  li.append(createInput(i));
  li.append(createContent("Hello", "Project 0", "11.02.2020", "medium"));

  return li;
}

function createLabel(i) {
  // returns label for "todocheckbox" + i
  let label = document.createElement("label");
  label.htmlFor = `todocheckbox${i}`;
  label.append(createDoneIcon());
  return label;
}

function createDoneIcon() {
  // create icon container
  let container = document.createElement("div");
  container.setAttribute("class", "todo-icon-container");
  // create icon
  let icon = document.createElement("ion-icon");
  icon.setAttribute("name", "checkmark-outline");
  // append icon to container
  container.appendChild(icon);
  return container;
}

function createInput(i) {
  // Create input checkbox element after the label
  let checkbox = document.createElement("input");
  // Add attributes
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "todo-checkbox");
  checkbox.setAttribute("id", `todocheckbox${i}`);
  return checkbox;
}

function createContent(title, from, date, priority) {
  let content = document.createElement("div");
  content.setAttribute("class", "todo-text");
  // Append title and details to content
  content.appendChild(createTitle(title));
  content.appendChild(createDetails(from, date, priority));

  return content;
}

function createTitle(str) {
  let title = document.createElement("div");
  title.setAttribute("class", "todo-title");
  title.textContent = str;
  return title;
}

function createDetails(from, date, priority) {
  let details = document.createElement("div");
  details.setAttribute("class", "details");
  details.appendChild(createFrom(from));
  details.appendChild(createDue(date));
  details.appendChild(createPriority(priority));
  details.appendChild(createNote());
  return details;
}

function createFrom(from) {
  let span = document.createElement("span");
  span.setAttribute("class", "from-project");
  span.textContent = `From ${from}`;
  return span;
}

function createDue(date) {
  let due = document.createElement("span");
  due.setAttribute("class", "due-date");
  due.appendChild(createCalendarImage());
  due.appendChild(createSpanForDate(date));
  return due;
}

function createCalendarImage() {
  let img = document.createElement("img");
  img.setAttribute("src", Calendar);
  img.setAttribute("alt", "Calendar");
  img.setAttribute("width", "12px");

  return img;
}

function createSpanForDate(date) {
  let span = document.createElement("span");
  span.textContent = `Due ${date}`;
  return span;
}

function createPriority(level) {
  let priority = document.createElement("span");
  priority.setAttribute("class", `${level}-priority`);
  priority.appendChild(createSpanForPriority(level));
  return priority;
}

function createSpanForPriority(level) {
  let span = document.createElement("span");
  span.textContent = `${capitalizeFirstLetter(level)} priority`;
  return span;
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createNote() {
  let span = document.createElement("span");
  span.setAttribute("class", "note-presence");

  // create and Append Note Icon
  let noteIcon = document.createElement("img");
  noteIcon.setAttribute("src", Note);
  noteIcon.setAttribute("alt", "Pen");
  noteIcon.setAttribute("width", "12px");

  // create and append text
  let text = document.createElement("span");
  text.textContent = "Note";

  span.appendChild(noteIcon);
  span.appendChild(text);
  return span;
}
