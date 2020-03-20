function showProjectContainer() {
  let projectsTitleCountContainer = document.getElementsByClassName(
    "project-title-count-container"
  );
  let inputProject = document.getElementById("new-todo");
  let deleteButtons = document.getElementsByClassName("delete-project-btn");
  let content = document.getElementById("content");
  let submitProjectBtn = document.getElementById("submit-project");

  if (content.classList.contains("hiddenToLeft")) {
    for (let projectTitleContainer of projectsTitleCountContainer) {
      projectTitleContainer.style.opacity = "1";
      projectTitleContainer.style.visibility = "visible";
    }

    for (let deleteButton of deleteButtons) {
      deleteButton.style.display = "inline-block";
    }

    inputProject.style.opacity = "1";
    inputProject.style.visibility = "visible";
    submitProjectBtn.style.left = "10px";
  } else {
    for (let projectTitleContainer of projectsTitleCountContainer) {
      projectTitleContainer.style.opacity = "0";
      projectTitleContainer.style.visibility = "hidden";
    }

    for (let deleteButton of deleteButtons) {
      deleteButton.style.display = "none";
    }

    inputProject.style.opacity = "0";
    inputProject.style.visibility = "hidden";
    submitProjectBtn.style.left = "7px";
  }

  // Toggle animate calss from Animation.scss
  content.classList.toggle("hiddenToLeft");
}

export { showProjectContainer };
