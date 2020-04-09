function createNewTask({ task }) {}

document.getElementById("todos").append(createTodoLi(12));

function createTodoLi(i) {
  // create list element with a class 'todo'
  let li = document.createElement("li");
  li.setAttribute("class", "todo");
  // Append label, input, div and button to it
  li.append(createLabel(i));

  return li;
}

function createLabel(i) {
  // returns label for "todocheckbox" + i
  let label = document.createElement("label");
  label.htmlFor = `todocheckbox${i}`;
  label.append(createDoneIcon());
  return label;
}

function createDoneIcon() {
  // create icon container
  let container = document.createElement("div");
  container.setAttribute("class", "todo-icon-container");
  // create icon
  let icon = document.createElement("ion-icon");
  icon.setAttribute("name", "checkmark-outline");
  // append icon to container
  container.appendChild(icon);
  return container;
}
