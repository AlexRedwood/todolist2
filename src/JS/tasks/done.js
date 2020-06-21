import * as DetailsToggle from "./detailsToggle.js";
import { refreshOnlyTasksFrom } from "../projects/render.js";
import { getActiveProject } from "./detailsInput.js";

function doneBtns(arr) {
  // Take the collection of all checkboxes from tasks by class name
  let checkboxes = document.getElementsByClassName("todo-icon-container");
  // Loop through collection and add event listener to each button
  for (let checkbox of checkboxes) {
    doneBtnCompleteTask(checkbox, arr);
  }
}

function doneBtnCompleteTask(checkbox, arr) {
  // Function to assign Event listener to checkboxes
  // to complete particular tasks from page
  checkbox.addEventListener("click", function (e) {
    // get Id of a checkbox to which listener is assigned
    let cboxId = e.currentTarget.parentNode.parentNode.id;
    // get only number after the hyphen from Id
    let number = cboxId.split("-")[1];
    // Before completing an item make sure to close its details
    closeDetailsOfCompletedTask(number);
    // If task is done then undone it, else complete it
    getActiveProject(arr).tasks[number].done = !getActiveProject(arr).tasks[
      number
    ].done;
    // Rerender array
    refreshOnlyTasksFrom(arr);
    // Avoid firing parent element listener after clicking on the checkbox
    e.stopPropagation();
  });
}

function closeDetailsOfCompletedTask(number) {
  // Before removing an item make sure his details are not shown
  // If they are then hide them
  if (DetailsToggle.getDetailsContainerIdNumber() === number)
    DetailsToggle.hideDetails();
}

export { doneBtns };
