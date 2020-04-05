function todoListShowDetails() {
  // Make todo lists show details onclick
  let todoTasks = document.getElementsByClassName("todo");
  for (let task of todoTasks) {
    task.addEventListener("click", () => showDetails());
  }
}

function ArrowHideDetails() {
  // Make Arrow hide Details onclick
  let arrowBtn = document.getElementById("close-details-btn");

  arrowBtn.addEventListener("click", () => showDetails());
}

function showDetails() {
  let details = document.getElementById("todo-misc-container");
  let main = document.getElementById("main");

  // If details are shown then hide them and make main take all the space
  // Else Show details and narrow mains to fit the middle column
  if (getComputedDisplay(details) === "flex") {
    hide(details);
    main.style.gridColumn = "2/4";
  } else {
    showAsFlex(details);
    // If screen is less then 1024 leave middle column wide and right column overlap
    if (!screenLessThen1024()) main.style.gridColumn = "2/3";
  }
}

function responsiveMiddleColumn() {
  let main = document.getElementById("main");
  window.matchMedia("(max-width: 1024px)").addListener(() => {
    if (screenLessThen1024()) {
      main.style.gridColumn = "2/4";
    } else {
      main.style.gridColumn = "2/3";
    }
  });
}

function screenLessThen1024() {
  // Check if screen is less then 1024px wide
  return window.matchMedia("(max-width: 1024px)").matches;
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

export { ArrowHideDetails, todoListShowDetails, responsiveMiddleColumn };