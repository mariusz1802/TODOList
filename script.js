// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
console.log(myNodelist);
var i;

const arrNode = Array.from(myNodelist);

 arrNode.forEach(el =>{
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  el.appendChild(span);
})

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

static  addTask(taskName) {
    const taskCotnainer = document.querySelector(".taskContainer");
    const taskDiv = document.createElement("div");
    const taskTextDiv = document.createElement("div");
    const taskText = document.createTextNode(taskName);
    const buttonContainer = document.createElement("div");
    const circleBtnCheck = document.createElement("div");
    const circleBtnFailure = document.createElement("div");
    const circleBtnRemove = document.createElement("div");

    circleBtnCheck.classList.add("circleBtn");
    circleBtnCheck.setAttribute("class", "done");
    circleBtnCheck.setAttribute("name", "done");
    circleBtnFailure.classList.add("circleBtn");
    circleBtnFailure.setAttribute("class", "cancel");
    circleBtnRemove.classList.add("circleBtn");
    circleBtnRemove.setAttribute("class", "delete");
    buttonContainer.classList.add("buttonsContainer");

    const checkImg = document.createElement("img");
    checkImg.src = "./icons/check.svg";
    checkImg.alt = "check";

    const failureImg = document.createElement("img");
    failureImg.src = "./icons/cancel.svg";
    failureImg.alt = "failure";

    const deleteImg = document.createElement("img");
    deleteImg.src = "./icons/bin.svg";
    deleteImg.alt = "delete";

    buttonContainer.appendChild(circleBtnCheck);
    buttonContainer.appendChild(circleBtnFailure);
    buttonContainer.appendChild(circleBtnRemove);

    circleBtnCheck.appendChild(checkImg);
    circleBtnFailure.appendChild(failureImg);
    circleBtnRemove.appendChild(deleteImg);

    taskDiv.classList.add("task");
    taskTextDiv.classList.add("textTask");

    taskDiv.appendChild(taskTextDiv);
    taskDiv.appendChild(buttonContainer);
    taskTextDiv.appendChild(taskText);
    taskCotnainer.appendChild(taskDiv)
    return taskDiv;

  }
  static deleteTask(taskName) {
  let taskCotnainer = document.querySelector(".taskContainer");
  let childs = Array.from(taskCotnainer.childNodes);
  const found = childs.find(el => el.innerText === taskName);
  return found;
  }

  
addTodo(text){
  const taskCotnainer = document.querySelector(".taskContainer");

  this.todos.push(text)
  taskCotnainer.appendChild(Task.addTask(text))
}

removeTodo(text){
  let filter = this.todos.filter(i => i !== text);
  this.list.removeChild(Task.deleteTask(text));
  this.todos = filter;
}



addBtn.addEventListener('click', newElement)

  update() {
    input.value = "";
    cancelBtn = document.getElementsByClassName("cancel");
    deleteBtn = document.getElementsByClassName("delete");
    doneBtn = document.getElementsByClassName("done");
    buttonService();
  }

  inputValue = "";

addTaskBtn.addEventListener("click", () => {
  task.addTodo(input.value);
  task.update();
});

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
