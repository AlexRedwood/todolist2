import { renderAllTasksFrom, clearContentOf } from "../tasks/render.js";
import { projectsShowTasks } from "./toggle.js";
import * as Details from "../tasks/detailsInput.js";
import * as DeleteTaskBtns from "../tasks/delete.js";
import * as TaskDone from "../tasks/done.js";
import * as DeleteProjectBtns from "./delete.js";
import { getActiveProject } from "../tasks/detailsInput.js";
import * as LocalStorage from "./localstorage.js";

function initialRender(arr) {
  refreshProjects(arr);
}

function refreshProjects(projects) {
  // Show the name of the active project
  showActiveProjectTitle(projects);
  // Clear all previously rendered elements from the page
  clearContentOf("project-list");
  renderAllProjects(projects);
  // each project shows its tasks
  projectsShowTasks(projects);
  // delete btns can delete projects
  DeleteProjectBtns.deleteProjectFrom(projects);
  // Turn on all of the interactiveness of the tasks
  turnOnTasksInteraction(projects);
  // Save the projects to localStorage
  LocalStorage.save(projects);
}

function refreshOnlyTasksFrom(projects) {
  for (let project of projects) {
    // If project is active then render its tasks
    if (project.isActive) renderAllTasksFrom(project.tasks);
  }
  turnOnTasksInteraction(projects);
}

function turnOnTasksInteraction(projects) {
  // Change tasks when user type something to details window
  Details.changeTaskOnInput(projects);
  // Make delete tasks buttons delete tasks from projects
  DeleteTaskBtns.deleteTasksFrom(projects);
  // make done buttonst complete tasks
  TaskDone.doneBtns(projects);
}

function showActiveProjectTitle(projects) {
  let projectTitle = document.getElementById("project-title");
  if (projects.length > 0) {
    projectTitle.textContent = getActiveProject(projects).title;
  } else {
    projectTitle.textContent = "";
  }
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

export { refreshProjects, initialRender, refreshOnlyTasksFrom };
