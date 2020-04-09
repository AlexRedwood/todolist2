import { getComputedDisplay } from "./details.js";
import { minimizeProjectContainer } from "./menu.js";

function responsive() {
  let main = document.getElementById("main");
  let details = document.getElementById("todo-misc-container");
  // Resizing window makes middle column fit
  window.matchMedia("(max-width: 1024px)").addListener(() => {
    // If screen is narrower than 1024px and details are open (right side of the page)
    // than minimize left side and make "main" fit the whole second column
    if (screenLessThen1024() && getComputedDisplay(details) === "flex") {
      main.style.gridColumn = "2/4";
      minimizeProjectContainer();
      // Doesn't matter the size of the screen,
      // if details are closed 'main' fit the whole second column
    } else if (getComputedDisplay(details) === "none") {
      main.style.gridColumn = "2/4";
      // Else for e.g. when screen are wider then 1024px and
      // details are open, then main is the column in the middle
    } else {
      main.style.gridColumn = "2/3";
    }
  });
}

function screenLessThen1024() {
  // Check if screen is less then 1024px wide
  return window.matchMedia("(max-width: 1024px)").matches;
}

// When resizing window middle column resize itself to be responsive
export { responsive, screenLessThen1024 };
