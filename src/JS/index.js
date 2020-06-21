import "../SCSS/style.scss";
import * as MenuBtn from "./style/menu.js";
import * as Resize from "./style/resize.js";
import * as Priority from "./style/priority.js";
import * as DefaultProjects from "./projects/defaults.js";
import { initialRender } from "./projects/render.js";
import * as AddTaskBtn from "./tasks/add.js";
import * as AddProjectBtn from "./projects/add.js";
import * as LocalStorage from "./projects/localstorage.js";

// Style
MenuBtn.showProjects();
Resize.responsive();
Priority.starsChangeColors();

// App logic

// Take projects from local storage if exists
// If not create default projects

let projects = LocalStorage.get() || [...DefaultProjects.getProjects()];

//render first project
initialRender(projects);

// Buttons which can add a task or a project to a defined array
// Also rerender the array after adding a task
AddTaskBtn.addTaskTo(projects);
AddProjectBtn.addProjectTo(projects);
