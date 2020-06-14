import { renderAllTasksFrom, clearContentOf } from "../tasks/render.js";
import { projectsShowTasks } from "./toggle.js";
import * as Details from "../tasks/detailsInput.js";
import * as DeleteTaskBtns from "../tasks/delete.js";

function initialRender(arr) {
  refreshProjects(arr);
}

function refreshProjects(arr) {
  // Clear all previously rendered elements from the page
  clearContentOf("project-list");
  renderAllProjects(arr);
  projectsShowTasks(arr);
  // Change tasks when user type something to details window
  Details.changeTaskOnInput(arr);
  // Make delete tasks buttons delete tasks from projects
  DeleteTaskBtns.deleteTasksFrom(arr);
}

function renderAllProjects(arr) {
  //Render each element of the array to the page
  for (let [index, item] of arr.entries()) {
    renderProject(index, item);
    // If project is active then render its tasks
    if (item.isActive) renderAllTasksFrom(item.tasks);
  }
}

function renderProject(i, project) {
  document.getElementById("project-list").append(createProject(i, project));
}

function createProject(i, project) {
  // create a li element
  let li = document.createElement("li");
  li.setAttribute("class", "project");
  if (project.isActive) li.classList.add("active");
  li.setAttribute("id", `project-${i}`);
  // append everything to it
  li.append(createIcon());
  li.append(createTitleAndCount(project.title, project.tasks.length));
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

export { refreshProjects, initialRender };
