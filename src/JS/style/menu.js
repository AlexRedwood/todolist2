function showProjects() {
  // Make menu button in the top left corner do work (change projects to wide or narrow)
  document
    .getElementById("menu-icon")
    .addEventListener("click", () => broadenProjectContainer());
}

function broadenProjectContainer() {
  // Take an array of elements from the page and toggle a class 'broad' on each
  for (let element of getElementsToBroad()) {
    toggleBroad(element);
  }
}

function minimizeProjectContainer() {
  // Take an array of elements from the page and toggle a class 'broad' on each
  for (let element of getElementsToBroad()) {
    addBroad(element);
  }
}

function addBroad(element) {
  // Remove class 'broad' from an element
  // this class changes left-side page menu making it smaller
  element.classList.add("broad");
}

function toggleBroad(element) {
  // Add/remove class 'broad' to an element
  // this class changes left-side page menu making it smaller
  element.classList.toggle("broad");
}

function getElementsToBroad() {
  // Take some DOM elements from the page
  let content = document.getElementById("content");
  let projectList = document.getElementById("project-list");
  let project = document.getElementsByClassName("project");
  let projectIcon = document.getElementsByClassName("project-icon");
  let projectTitleCountContainer = document.getElementsByClassName(
    "project-title-count-container "
  );
  let deleteProjectBtn = document.getElementsByClassName("delete-project-btn");
  let newProjectForm = document.getElementById("new-project-form");
  let newProject = document.getElementById("new-project");
  let submitProject = document.getElementById("submit-project");

  // Put them in the array and return it
  let elements = [
    content,
    projectList,
    ...project,
    ...projectIcon,
    ...projectTitleCountContainer,
    ...deleteProjectBtn,
    newProjectForm,
    newProject,
    submitProject
  ];
  return elements;
}

export { showProjects, minimizeProjectContainer };
