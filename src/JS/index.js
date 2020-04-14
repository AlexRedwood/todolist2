import "../SCSS/style.scss";
import * as MenuBtn from "./style/menu.js";
import { tasksShowDetails } from "./style/details.js";
import * as Resize from "./style/resize.js";
import { taskFactory } from "./tasks/factory.js";
import * as AddTaskBtn from "./tasks/add.js";
import { renderAllTasksFrom } from "./tasks/render.js";
import * as Defaults from "./tasks/defaults.js";

// Style
MenuBtn.showProjects();
Resize.responsive();
tasksShowDetails();

// App Logic

// define tasks array which is todolist
let tasks = [...Defaults.get()];

// Render default tasks form tasks array
renderAllTasksFrom(tasks);

// Button to add task to a defined array
AddTaskBtn.addTaskTo(tasks);
