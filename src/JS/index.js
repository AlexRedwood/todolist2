import "../SCSS/style.scss";
import * as MenuBtn from "./style/menu.js";
import * as Resize from "./style/resize.js";
import * as Priority from "./style/priority.js";
import * as AddTaskBtn from "./tasks/add.js";
import { renderAllTasksFrom } from "./tasks/render.js";
import * as Defaults from "./tasks/defaults.js";
import * as Input from "./tasks/detailsInput.js";
import { renderProject } from "./projects/render.js";
import { projectFactory } from "./projects/factory.js";

// Style
MenuBtn.showProjects();
Resize.responsive();
Priority.starsChangeColors();

// App Logic
// define tasks array
let allTasks = [...Defaults.getTasksByNumber(1)];

// Initial render of the default tasks form tasks array
renderAllTasksFrom(allTasks);

// Button to add task to a defined array
// Also rerender the array after adding a task
AddTaskBtn.addTaskTo(allTasks);

// Change tasks when user type something to details window
Input.changeTaskOnInput(allTasks);

renderProject(
  7,
  projectFactory({
    title: "Project 1",
  })
);
