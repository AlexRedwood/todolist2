import { screenLessThen1024 } from "../style/resize.js";
import * as DetailsInput from "./detailsInput.js";

function tasksToggleDetails(arr) {
  // Make todo tasks show details on click (from right side)
  todoListShowDetails(arr);
  // Make button in details interact: hide details
  ArrowHideDetails();
}

function todoListShowDetails(arr) {
  // Make todo lists show details onclick
  let tasks = document.getElementsByClassName("todo");

  for (let task of tasks) {
    task.addEventListener("click", function (e) {
      // get Id of a task to which listener is assigned
      let taskId = e.currentTarget.id;
      // get only number from Id after the hyphen
      let number = taskId.split("-")[1];
      // Pass a number of the clicked task to details
      toggleDetails(number);
      // Put info from tasks in inputs when details are shown
      DetailsInput.putTaskInfoToInput(arr[number]);
    });
  }
}

function ArrowHideDetails() {
  // Make Arrow hide Details onclick
  let arrowBtn = document.getElementById("close-details-btn");
  arrowBtn.addEventListener("click", hideDetails);
}

function toggleDetails(number) {
  let idNumber = getDetailsContainerIdNumber();

  // if details are visible on the page AND
  // if user clicks on the same task 2x than hide details
  if (detailsAreShown() && idNumber === number) {
    hideDetails();
  } else {
    showDetails(number);
  }
}

function detailsAreShown() {
  let details = document.getElementById("todo-misc-container");
  // Are details shown on the page? Return boolean:
  return getComputedDisplay(details) !== "none";
}

function getDetailsContainerIdNumber() {
  let details = document.getElementById("todo-misc-container");
  // Take id of the details child
  let detailsContainerId = details.children[0].id;
  // Take a number from that id and return it
  let idNumber = detailsContainerId.split("-")[2];
  return idNumber;
}

function setDetailsIdTo(number) {
  // First make details ID the same as initial ID (with no numbers)
  // Another words remove all existing numbers from it
  makeDetailsDefault();
  // Then pass a number to it
  let details = document.getElementById("todo-misc-container");
  details.children[0].id += `-${number}`;
}

function hideDetails() {
  let details = document.getElementById("todo-misc-container");
  let main = document.getElementById("main");

  hide(details);
  // When details are hidden the main column will be broader
  main.style.gridColumn = "2/4";
  // When details are hidden their details-container-ID will be default with no number
  makeDetailsDefault();
}

function showDetails(number) {
  let details = document.getElementById("todo-misc-container");
  let main = document.getElementById("main");

  showAsFlex(details);
  // Also set new ID number to details container (only if it doesn't have ID already)
  setDetailsIdTo(number);
  // If screen is bigger than 1024 then make "main" the middle column of 3 columns
  if (!screenLessThen1024()) main.style.gridColumn = "2/3";
}

function makeDetailsDefault() {
  // Change ID of child of the details to default "details-container"
  let details = document.getElementById("todo-misc-container");
  details.children[0].id = "details-container";
}

function getComputedDisplay(element) {
  let computedDisplay = window
    .getComputedStyle(element)
    .getPropertyValue("display");
  return computedDisplay;
}

function showAsFlex(element) {
  element.style.display = "flex";
}

function hide(element) {
  element.style.display = "none";
}

export {
  tasksToggleDetails,
  getComputedDisplay,
  getDetailsContainerIdNumber,
  hideDetails,
  detailsAreShown,
  setDetailsIdTo,
};
