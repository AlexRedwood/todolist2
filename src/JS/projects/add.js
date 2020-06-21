import { projectFactory } from "./factory.js";
import { refreshProjects } from "./render.js";
import { activateProject } from "./toggle.js";

function addProjectTo(projects) {
  const submitProjectBtn = document.getElementById("submit-project");

  submitProjectBtn.addEventListener("click", () => addProject(projects));
}

function addProject(projects) {
  // Prevent default submit behavior
  event.preventDefault();
  pushProjectTo(projects);
  if (projects.length === 1) activateProject(projects, 0);
  refreshProjects(projects);
}

function pushProjectTo(projects) {
  projects.push(getProject());
}

function getProject() {
  // Get user input value, save it
  let project = projectFactory({ title: getInputValue() });
  // and clear input
  clearProjectInput();
  return project;
}

function getInputValue() {
  // Get user input value as New Project : STRING
  return document.getElementById("new-project").value;
}

function clearProjectInput() {
  document.getElementById("new-project").value = "";
}

export { addProjectTo };
