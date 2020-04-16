import { renderAllTasksFrom } from "./render.js";
import * as DetailsToggle from "./detailsToggle.js";

function deleteTasksFrom(arr) {
  // Take the collcetion of all delete cross buttons from tasks by class name
  let buttons = document.getElementsByClassName("delete-todo-btn");
  // Loop through collection and add event listener to each button
  for (let button of buttons) {
    deleteBtnRemoveTask(button, arr);
  }
}

function deleteBtnRemoveTask(button, arr) {
  // Function to assign Event listener to buttons
  // to remove particular tasks from page
  button.addEventListener("click", function (e) {
    // get Id of a button to which listener is assigned
    let btnId = e.currentTarget.id;
    // get only number after the hyphen from Id
    let number = btnId.split("-")[1];
    // Before removing an item make sure to close its details
    closeDetailsOfDeletedTask(number);
    // Remove item from the array by that number
    arr.splice(number, 1);
    // Rerender array
    renderAllTasksFrom(arr);
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

export { deleteTasksFrom };
