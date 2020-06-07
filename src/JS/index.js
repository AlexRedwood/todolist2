import "../SCSS/style.scss";
import * as MenuBtn from "./style/menu.js";
import * as Resize from "./style/resize.js";
import * as Priority from "./style/priority.js";
import * as AddTaskBtn from "./tasks/add.js";
import * as DefaultProjects from "./projects/defaults.js";
import * as Input from "./tasks/detailsInput.js";
import { renderAllProjects } from "./projects/render.js";

// Style
MenuBtn.showProjects();
Resize.responsive();
Priority.starsChangeColors();

// App logic

//create a list of projects
let projects = [...DefaultProjects.getProjects()];

// render list of projects
renderAllProjects(projects, 0);
