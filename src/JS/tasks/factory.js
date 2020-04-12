const taskFactory = function ({
  title = "",
  from = "",
  date = "",
  priority = "low",
  note = false,
  done = false,
}) {
  return { title, from, date, priority, note, done };
};

export { taskFactory };
