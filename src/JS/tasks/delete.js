import { refreshProjects } from "../projects/render.js";
import * as DetailsToggle from "./detailsToggle.js";

function getActiveProject(arr) {
  // Find active project and return it
  for (let project of arr) {
    if (project.isActive) return project;
  }
}

function deleteTasksFrom(projects) {
  // Take the collcetion of all delete cross buttons from tasks by class name
  let buttons = document.getElementsByClassName("delete-todo-btn");
  // Loop through collection and add event listener to each button
  for (let button of buttons) {
    deleteBtnRemoveTask(button, projects);
  }
}

function deleteBtnRemoveTask(button, projects) {
  // Function to assign Event listener to buttons
  // to remove particular tasks from page
  button.addEventListener("click", function (e) {
    // get Id of a button to which listener is assigned
    let btnId = e.currentTarget.id;
    // get only number after the hyphen from Id
    let number = btnId.split("-")[1];
    // Before removing an item make sure to close its details
    closeDetailsOfDeletedTask(number);
    makeDetailsConsistent(number);
    // Remove item from the array of tasks by that number
    getActiveProject(projects).tasks.splice(number, 1);
    // Rerender projects
    refreshProjects(projects);
    // Avoid firing parent element listener after clicking on the button
    e.stopPropagation();
  });
}

function closeDetailsOfDeletedTask(number) {
  // Before removing an item make sure his details are not shown
  // If they are then hide them
  if (DetailsToggle.getDetailsContainerIdNumber() === number)
    DetailsToggle.hideDetails();
}

function makeDetailsConsistent(number) {
  // This function is needed for details container to have the same id as taks have
  // For e.g. if you open the details of a task which has id = 4 (its details id is also = 4)
  // and then delete task with id = 2, then all tasks after 2 will have id = id - 1, but details stays the same
  // That's why we need a function to decrease details id by one every time we delete a task with id < id of deleted task
  if (DetailsToggle.getDetailsContainerIdNumber() > number) {
    decreaseDetailsId();
  }
}

function decreaseDetailsId() {
  // get id of current details
  let details = document.getElementById("todo-misc-container").children[0];
  let detailsIdNumber = details.id.split("-")[2];
  // Now decrease it by one
  DetailsToggle.setDetailsIdTo(detailsIdNumber - 1);
}
export { deleteTasksFrom };
