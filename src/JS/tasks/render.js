import Calendar from "../../ICONS/calendar.svg";
import Note from "../../ICONS/edit.svg";

function renderAllTasksFrom(arr) {
  // Clear all previously rendered elements from the page
  clearContentOf("todos");
  //Render each element of the array to the page
  for (let [index, item] of arr.entries()) {
    renderTask(index, item);
  }
}

function clearContentOf(id) {
  // Remove any child of the element with id
  let contentContainer = document.getElementById(id);

  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }
}

function renderTask(i, task) {
  document.getElementById("todos").append(createTask(i, task));
}

function createTask(i, task) {
  console.log(task);
  // create list element with a class 'todo'
  let li = document.createElement("li");
  li.setAttribute("class", "todo");
  // Append label, input, div and button to it
  li.append(createLabel(i));
  li.append(createInput(i));
  li.append(
    createContent(task.title, task.from, task.date, task.priority, task.note)
  );
  li.append(createDeleteBtn(i));

  return li;
}

// LABEL

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

// INPUT

function createInput(i) {
  // Create input checkbox element after the label
  let checkbox = document.createElement("input");
  // Add attributes
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "todo-checkbox");
  checkbox.setAttribute("id", `todocheckbox${i}`);
  return checkbox;
}

// CONTENT = task title and details

function createContent(title, from, date, priority, note) {
  let content = document.createElement("div");
  content.setAttribute("class", "todo-text");
  // Append title and details to content
  content.appendChild(createTitle(title));
  content.appendChild(createDetails(from, date, priority, note));

  return content;
}

function createTitle(str) {
  let title = document.createElement("div");
  title.setAttribute("class", "todo-title");
  title.textContent = str;
  return title;
}

function createDetails(from, date, priority, note) {
  let details = document.createElement("div");
  details.setAttribute("class", "details");
  if (from) details.appendChild(createFrom(from));
  if (date) details.appendChild(createDue(date));
  if (priority !== "low") details.appendChild(createPriority(priority));
  if (note) details.appendChild(createNote());
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

// DELETE BUTTON
function createDeleteBtn(i) {
  let btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.setAttribute("class", "delete-todo-btn");
  btn.setAttribute("id", `delete-btn${i}`);

  // create an icon and append it to button
  let icon = document.createElement("ion-icon");
  icon.setAttribute("name", "close-circle");

  btn.appendChild(icon);

  return btn;
}

export { renderAllTasksFrom };
