const taskFactory = function(title, from, date, priority, note, done) {
  return { title, from, date, priority, note, done };
};

export { taskFactory };
