import { renderAllTasksFrom } from "./render.js";

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
    // remove item from the array by that number
    arr.splice(number, 1);
    // Rerender array
    renderAllTasksFrom(arr);
    // Avoid firing parent element listener after clicking on the button
    e.stopPropagation();
  });
}

export { deleteTasksFrom };
