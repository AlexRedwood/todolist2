import "../SCSS/style.scss";
import * as MenuBtn from "./style/menu.js";
import { tasksShowDetails } from "./style/details.js";
import * as Resize from "./style/resize.js";
import {} from "./tasks/factory.js";
import * as AddTaskBtn from "./tasks/add.js";
import {} from "./tasks/render.js";
import * as Defaults from "./tasks/defaults.js";

// Style
MenuBtn.showProjects();
Resize.responsive();
tasksShowDetails();

// App Logic
let tasks = [...Defaults.get()];

AddTaskBtn.addTaskTo(tasks);

document.getElementById("submit-project").addEventListener("click", event => {
  event.preventDefault();
  console.table(tasks);
});
