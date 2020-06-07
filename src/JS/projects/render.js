import { renderAllTasksFrom, clearContentOf } from "../tasks/render.js";
import * as Input from "../tasks/detailsInput.js";
import * as AddTaskBtn from "../tasks/add.js";

function renderAllProjects(arr, number) {
  // Clear all previously rendered elements from the page
  clearContentOf("project-list");
  //Render each element of the array to the page
  for (let [index, item] of arr.entries()) {
    renderProject(index, item);
  }
  // Render all tasks from project
  renderAllTasksFrom(arr[number].tasks);

  // Button to add task to a defined array
  // Also rerender the array after adding a task
  AddTaskBtn.addTaskTo(arr[number].tasks);

  // Change tasks when user type something to details window
  Input.changeTaskOnInput(arr[number].tasks);
}

function renderProject(i, project) {
  document.getElementById("project-list").append(createProject(i, project));
}

function createProject(i, project) {
  // create a li element
  let li = document.createElement("li");
  li.setAttribute("class", "project");
  li.setAttribute("id", `project-${i}`);
  // append everything to it
  li.append(createIcon());
  li.append(createTitleAndCount(project.title, project.count));
  li.append(createDeleteBtn(i));
  return li;
}

function createIcon() {
  let span = document.createElement("span");
  span.setAttribute("class", "project-icon");

  let icon = document.createElement("ion-icon");
  icon.setAttribute("name", "reader-outline");

  span.append(icon);

  return span;
}

function createTitleAndCount(title, count) {
  // create a container for Title and Todo Count Number
  let div = document.createElement("div");
  div.setAttribute("class", "project-title-count-container");
  // Create a span for title
  let nameSpan = document.createElement("span");
  nameSpan.setAttribute("class", "project-name");
  nameSpan.textContent = title;
  // Create a span for count number
  let countSpan = document.createElement("span");
  countSpan.setAttribute("class", "count-todos");
  countSpan.textContent = count;
  // Append spans to a div and return a container
  div.append(nameSpan);
  div.append(countSpan);
  return div;
}

function createDeleteBtn(i) {
  let btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.setAttribute("class", "delete-project-btn");
  btn.setAttribute("id", `delete-project-${i}`);

  // create an icon and append it to button
  let icon = document.createElement("ion-icon");
  icon.setAttribute("name", "close-circle");

  btn.appendChild(icon);

  return btn;
}

export { renderAllProjects };
