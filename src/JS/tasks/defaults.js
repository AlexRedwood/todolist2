import { taskFactory } from "./factory.js";

function getTasksByNumber(number) {
  // This function simply creates an array with default tasks in it
  // Number is just a number of bundle from 1 to 3
  let bundle1 = [
    taskFactory({
      title: "Learn english",
      date: "15.03.2025",
      priority: "medium",
      note: "something",
    }),
    taskFactory({
      title: "Learn english again",
      date: "15.03.2028",
      priority: "medium",
    }),
    taskFactory({
      title: "And Again!",
      priority: "medium",
      note: "something",
    }),
  ];

  let bundle2 = [
    taskFactory({
      title: "Learn german",
      date: "15.03.2018",
      priority: "high",
      note: "something",
    }),
    taskFactory({
      title: "Learn Math!",
      date: "15.03.2018",
      priority: "high",
    }),
    taskFactory({
      title: "LEHRNE DEUTSCH!!!",
      date: "15.03.2018",
      priority: "high",
    }),
  ];

  let bundle3 = [
    taskFactory({
      title: "Make stuff",
      note: "something",
      done: true,
    }),
    taskFactory({
      title: "Do stuff",
      date: "10.01.2020",
      done: true,
    }),
    taskFactory({
      title: "Run stuff",
      note: "something",
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
