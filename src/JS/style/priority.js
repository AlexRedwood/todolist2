function starsChangeColors() {
  activeFirstStar();
  activeSecondStar();
  activeThirdStar();
}

function activeFirstStar() {
  getStar1().addEventListener("click", function () {
    outlineSecondStar();
    removeColorFromAllStars();
  });
}

function activeSecondStar() {
  getStar2().addEventListener("click", function () {
    toggleSecondStar();
    toggleColorOfTwoStars();
  });
}

function activeThirdStar() {
  getStar3().addEventListener("click", function () {
    toggleThirdStar();
    toggleColorOfThreeStars();
  });
}

// ------------------------------------SECOND STAR
function toggleSecondStar() {
  // if star is outlined fill it and the other way around
  starIsOutlined(getStar2()) ? fillSecondStar() : outlineSecondStar();
  // toggle a color of first two stars
}

function fillSecondStar() {
  // Get the child of the priority and make it filled star
  getStar2().children[0].setAttribute("name", "star");
}

function outlineSecondStar() {
  // Get the child of the priority and make it outlined star
  getStar2().children[0].setAttribute("name", "star-outline");
}
// ---------------------------------- THIRD STAR
function toggleThirdStar() {
  // if star is outlined fill it and the other way around
  starIsOutlined(getStar3()) ? fillThirdStar() : outlineThirdStar();
  // toggle a color of first two stars
}

function fillThirdStar() {
  // Get the child of the priority and make it filled star
  getStar3().children[0].setAttribute("name", "star");
}

function outlineThirdStar() {
  // Get the child of the priority and make it outlined star
  getStar3().children[0].setAttribute("name", "star-outline");
}

//---------------------------------- Helpers

function starIsOutlined(star) {
  return star.children[0].getAttribute("name") === "star-outline";
}

function toggleColorOfTwoStars() {
  getStar1().classList.toggle("selected-1");
  getStar2().classList.toggle("selected-1");
}
function toggleColorOfThreeStars() {}

function removeColorFromAllStars() {
  getStar1().classList.remove("selected-1");
  getStar2().classList.remove("selected-1");
  getStar3().classList.remove("selected-1");
}

function getStar1() {
  return document.getElementById("star-1");
}

function getStar2() {
  return document.getElementById("star-2");
}

function getStar3() {
  return document.getElementById("star-3");
}

export { starsChangeColors };
