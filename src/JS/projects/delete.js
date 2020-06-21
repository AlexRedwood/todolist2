import { refreshProjects } from "./render.js";

import { activateProject } from "./toggle.js";
import { clearContentOf } from "../tasks/render.js";

function deleteProjectFrom(projects) {
  // Take the collection of all delete cross buttons from projects by class name
  let buttons = document.getElementsByClassName("delete-project-btn");
  // Loop through collection and add event listener to each button
  for (let button of buttons) {
    deleteBtnRemoveProject(button, projects);
  }
}

function deleteBtnRemoveProject(button, projects) {
  // Function to assign Event listener to buttons
  // to remove particular projects from page
  button.addEventListener("click", function (e) {
    // get Id of a button to which listener is assigned
    let btnId = e.currentTarget.id;
    // get only number after the hyphen from Id
    let number = btnId.split("-")[2];

    // Remove item from the array of projects by that number
    projects.splice(number, 1);
    // Handle active projects after deleting one but before rerendering
    activationHandling(projects);
    // Rerender projects
    refreshProjects(projects);
    // Avoid firing parent element listener after clicking on the button
    e.stopPropagation();
  });
}

function activationHandling(projects) {
  // This function is needed when you delete projects
  // When is one active deleted, there needs to be another active project
  // When all deleted, there needs to be all tasks shown
  if (projects.length > 0 && noneActiveProjects(projects))
    activateProject(projects, 0);
  if (projects.length === 0) clearContentOf("todos");
}

function noneActiveProjects(projects) {
  for (let project of projects) {
    if (project.isActive) return false;
  }
  return true;
}

export { deleteProjectFrom };
