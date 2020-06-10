const projectFactory = function ({ title = "", tasks = [], isActive = false }) {
  return { title, tasks, isActive };
};

export { projectFactory };
