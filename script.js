const input = document.querySelector("input");
const addTaskBtn = document.querySelector("#addBtn");
let doneBtn;
let cancelBtn;
let deleteBtn;
let circleBtn;

const taskArr = [];
class Task {
  constructor(list) {
    this.list = list;
    this.todos = [];
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


  cancelTask() {}

  update() {
    input.value = "";
    cancelBtn = document.getElementsByClassName("cancel");
    deleteBtn = document.getElementsByClassName("delete");
    doneBtn = document.getElementsByClassName("done");
    buttonService();
  }
}

const task = new Task();

addTaskBtn.addEventListener("click", () => {
  task.addTodo(input.value);
  task.update();
});

function buttonService() {
  circleBtn = document.querySelectorAll(".circleBtn");
  if (taskArr) {
    circleBtn.forEach((el, index) => {
      el.addEventListener("click", () => {
        switch (el.id) {
          case "done":
            console.log("done pressed");
            break;
          case "cancel":
            console.log("cancel button pressed");
            break;
          case "delete":
            task.deleteTask();
            break;
          default:
            console.log("something went wrong");
        }
      });
    });
  }
}
