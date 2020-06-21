function save(projects) {
  window.localStorage.setItem("projects", stringify(projects));
}

function stringify(obj) {
  return JSON.stringify(obj);
}

function get() {
  return JSON.parse(window.localStorage.getItem("projects"));
}

export { save, get };
