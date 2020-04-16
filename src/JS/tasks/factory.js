const taskFactory = function ({
  title = "",
  from = "",
  date = "",
  priority = "low",
  note = "",
  done = false,
}) {
  return { title, from, date, priority, note, done };
};

export { taskFactory };
