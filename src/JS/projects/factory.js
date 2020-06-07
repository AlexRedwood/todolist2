const projectFactory = function ({
  title = "",
  tasks = [],
  count = tasks.length,
}) {
  return { title, tasks, count };
};

export { projectFactory };
