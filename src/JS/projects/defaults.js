import projectFactory from "./factory.js";
import * as DefaultTasks from "../tasks/defaults.js";

function getProjects() {
  // This function simply creates an array with default projects in it
  let allProjects = [
    projectFactory({
      title: "All tasks",
      tasks: DefaultTasks.get(),
    }),
    projectFactory({
      title: "Project 1",
    }),
    projectFactory({
      title: "Project 5",
    }),
    projectFactory({
      title: "Learn English",
    }),
  ];

  return allProjects;
}

export { getProjects };
