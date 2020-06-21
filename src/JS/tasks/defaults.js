import { taskFactory } from "./factory.js";

function getTasksByNumber(number = 1) {
  // This function simply creates an array with default tasks in it
  // Number is just a number of bundle from 1 to 3
  let bundle1 = [
    taskFactory({
      title: "Example 1",
      date: "15.03.2025",
      priority: "medium",
      note: "something",
    }),
    taskFactory({
      title: "Example 2",
      date: "15.03.2000",
    }),
    taskFactory({
      title: "Example 3",
      priority: "high",
    }),
  ];

  let bundle2 = [
    taskFactory({
      title: "Example 4",
      note: "something else",
    }),
    taskFactory({
      title: "Example 5",
      date: "15.03.2018",
      priority: "high",
      done: true,
    }),
  ];

  switch (number) {
    case 1:
      return bundle1;

    case 2:
      return bundle2;

    case 3:
      return bundle3;
  }
}

export { getTasksByNumber };
