import { projectFactory } from "./factory.js";
import * as DefaultTasks from "../tasks/defaults.js";

function getProjects() {
  // This function simply creates an array with default projects in it
  let allProjects = [
    projectFactory({
      title: "Project 1",
      tasks: DefaultTasks.getTasksByNumber(1),
      isActive: true,
    }),
    projectFactory({
      title: "Project 2",
      tasks: DefaultTasks.getTasksByNumber(2),
    }),
    projectFactory({
      title: "Something to consider",
      tasks: DefaultTasks.getTasksByNumber(3),
    }),
  ];

  return allProjects;
}

export { getProjects };
