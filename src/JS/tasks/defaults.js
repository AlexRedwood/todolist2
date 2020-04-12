import { taskFactory } from "./factory.js";

function get() {
  // This functin simply create an array with default tasks in it
  let allTasks = [
    taskFactory({
      title: "Learn stuff",
      from: "Project 2",
      date: "15.03.2020",
      priority: "medium",
      note: true,
    }),
    taskFactory({
      title: "Learn english",
      date: "10.01.2020",
    }),
    taskFactory({
      title: "Learn stuff",
      from: "Project 2",
      priority: "high",
      note: true,
      done: true,
    }),
  ];

  return allTasks;
}

export { get };
