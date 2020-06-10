import "../SCSS/style.scss";
import * as MenuBtn from "./style/menu.js";
import * as Resize from "./style/resize.js";
import * as Priority from "./style/priority.js";
import * as DefaultProjects from "./projects/defaults.js";
import { initialRender } from "./projects/render.js";
import * as AddTaskBtn from "./tasks/add.js";
import * as Details from "./tasks/detailsInput.js";

// Style
MenuBtn.showProjects();
Resize.responsive();
Priority.starsChangeColors();

// App logic

//create main list of projects
let projects = [...DefaultProjects.getProjects()];

//render first project
initialRender(projects);

// Button to add task to a defined array
// Also rerender the array after adding a task
AddTaskBtn.addTaskTo(projects, 0);

// Change tasks when user type something to details window
Details.changeTaskOnInput(projects, 0);

//test button
let testBtn = document.getElementById("socials");
testBtn.addEventListener("click", () => console.table(projects));
