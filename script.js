const input = document.querySelector("input");
const addTaskBtn = document.querySelector("#addBtn");
let doneBtn;
let cancelBtn;
let deleteBtn;
let circleBtn;

const taskArr = [];
class Task {
  constructor() {
    this.todos = [];
  }
  static addTask(taskName) {
    const taskCotnainer = document.querySelector(".taskContainer");
    const taskDiv = document.createElement("div");
    const taskTextDiv = document.createElement("div");
    const taskText = document.createTextNode(taskName);
    const buttonContainer = document.createElement("div");
    const circleBtnCheck = document.createElement("div");
    const circleBtnFailure = document.createElement("div");
    const circleBtnRemove = document.createElement("div");

    circleBtnCheck.classList.add("circleBtn");
    circleBtnCheck.setAttribute("id", "done");
    circleBtnCheck.setAttribute("name", "done");
    circleBtnFailure.classList.add("circleBtn");
    circleBtnFailure.setAttribute("id", "cancel");
    circleBtnRemove.classList.add("circleBtn");
    circleBtnRemove.setAttribute("id", "delete");
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
    taskCotnainer.appendChild(taskDiv);
    return taskDiv;
  }
  static deleteTask(taskName) {
    let taskCotnainer = document.querySelector(".taskContainer");
    let childs = Array.from(taskCotnainer.childNodes);
    const found = childs.find((el) => el.innerText === taskName);
    return found;
  }

  addTodo(text) {
    const taskCotnainer = document.querySelector(".taskContainer");
    this.todos.push(text);
    taskCotnainer.appendChild(Task.addTask(text));
  }

  removeTodo(text) {
    let filter = this.todos.filter((i) => i !== text);
    this.list.removeChild(Task.deleteTask(text));
    this.todos = filter;
  }

  cancelTask() {}
  update() {
    input.value = "";
    cancelBtn = document.querySelectorAll("#cancel");
    deleteBtn = document.querySelectorAll("#delete");
    doneBtn = document.querySelectorAll("#done");
    buttonSet();
  }
}

const task = new Task();

// addTaskBtn.addEventListener("click", () => {
//   task.addTodo(input.value);
//   task.update();
// });

function buttonSet() {
  const deleteBtns = Array.from(deleteBtn);
  console.log(deleteBtns);

  deleteBtns.map((el, id) => {
    el.addEventListener("click", (e) => {
      console.log(e.target);
      console.log(id);
    });
  });

  // deleteBtn.addEventListener("click", (e) => {
  //   console.log(e.target);
  // });

  // const taskCotnainer = document.querySelector(".taskContainer");
  // const childs = Array.from(taskCotnainer.childNodes);

  // childs.map((el, index) => {
  //   el.addEventListener("click", (e) => {
  //     console.log(e.target);
  //   });
  // });
}

const testBtn = document.querySelectorAll("#test");

const testBtnArr = Array.from(testBtn);

addTaskBtn.addEventListener("click", () => {
  addElement(input.value);
});

function addElement(taskName) {
  const taskContainer = document.querySelector(".taskContainer");
  const newDiv = document.createElement("div");
  newDiv.innerText = taskName;
  taskContainer.appendChild(newDiv);
}

function deleteElement(taskName) {
  const taskContainer = document.querySelector(".taskContainer");
  const childArr = Array.from(taskContainer.childNodes);
  childArr.map((el) => {
    el.addEventListener("click", (e) => {
      console.log("kliknieto");
    });
  });
}
const deleteBtutton = document.querySelector("#delete");

deleteBtutton.addEventListener("click", deleteElement);
