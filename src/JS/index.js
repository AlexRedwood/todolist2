import "../SCSS/style.scss";
import * as MenuBtn from "./style/menu.js";
import * as Resize from "./style/resize.js";
import * as Priority from "./style/priority.js";
import * as AddTaskBtn from "./tasks/add.js";
import { renderAllTasksFrom } from "./tasks/render.js";
import * as Defaults from "./tasks/defaults.js";

// Style
MenuBtn.showProjects();
Resize.responsive();
Priority.starsChangeColors();
// App Logic

// define tasks array which is todolist
let allTasks = [...Defaults.get()];

// Initial render of the default tasks form tasks array
renderAllTasksFrom(allTasks);

// Button to add task to a defined array
// Also rerender the array after adding a task
AddTaskBtn.addTaskTo(allTasks);
