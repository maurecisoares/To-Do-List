let addTaskButton = document.getElementById("task-button");
let taskInput = document.getElementById("task-input");
let ul = document.getElementById("ul");
let item = document.getElementsByTagName("li");

function createListElement() {
  var li = document.createElement("li");

  li.appendChild(document.createTextNode(taskInput.value));
  ul.appendChild(li);
  taskInput.value = "";

  function crossTask() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", crossTask);

  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.add("delete");
  }
}

function inputLength() {
  return taskInput.value.length;
}

addTaskButton.addEventListener("click", addListAfterClick);
taskInput.addEventListener("keypress", addListAfterKeypress);

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  } else if (inputLength() == 0) {
    alert("Inserir tarefa!");
  }
}

function addListAfterKeypress() {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}
