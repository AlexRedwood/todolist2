const taskFactory = function({
  title = "",
  from = "",
  date = "",
  priority = "Low",
  note = false,
  done = false
}) {
  return { title, from, date, priority, note, done };
};

export { taskFactory };
