import { refreshProjects } from "./render.js";
import { hideDetails } from "../tasks/detailsToggle.js";

function projectsShowTasks(arr) {
  // Make projects on the page show their tasks onclick
  let projects = document.getElementsByClassName("project");

  for (let project of projects) {
    project.addEventListener("click", function () {
      // get Id of a project to which listener is assigned
      let projectId = event.currentTarget.id;
      // get a number from Id after the hyphen
      let number = projectId.split("-")[1];
      // Activate one project and deactivate others
      activateProject(arr, number);
      // Refresh projects
      refreshProjects(arr, number);
      // Close the details on task if it's open
      hideDetails();
    });
  }
}

function activateProject(arr, number) {
  deactivateAllProjects(arr);
  // After deactivation of all projects we activate only one
  arr[number].isActive = true;
}

function deactivateAllProjects(arr) {
  for (let item of arr) {
    item.isActive = false;
  }
}

export { projectsShowTasks, activateProject };
