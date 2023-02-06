const input = document.querySelector("input");
const addTaskBtn = document.querySelector("#addBtn");
const taskCotnainer = document.querySelector(".taskContainer");
let doneBtn;
let cancelBtn;
let deleteBtn;

const taskArr = [];
class Task {
  addTask(taskName) {
    const taskDiv = document.createElement("div");
    const taskTextDiv = document.createElement("div");
    const taskText = document.createTextNode(taskName);
    const buttonContainer = document.createElement("div");
    const circleBtnCheck = document.createElement("div");
    const circleBtnFailure = document.createElement("div");
    const circleBtnRemove = document.createElement("div");

    circleBtnCheck.classList.add("circleBtn");
    circleBtnCheck.setAttribute("id", "done");
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

    // taskCotnainer.appendChild(taskDiv);
    taskDiv.appendChild(taskTextDiv);
    taskDiv.appendChild(buttonContainer);
    taskTextDiv.appendChild(taskText);

    taskArr.push(taskDiv);

    taskArr.forEach((el) => {
      taskCotnainer.appendChild(el);
    });
  }
  deleteTask(number) {
    console.log(`Number of: ${number}`);
  }
  cancelTask() {}

  update() {
    input.value = "";
    doneBtn = document.querySelectorAll("#done");
    cancelBtn = document.querySelectorAll("#cancel");
    deleteBtn = document.querySelectorAll("#delete");

    checkSomething();
  }
}

const task = new Task();

addTaskBtn.addEventListener("click", () => {
  task.addTask(input.value);
  task.update();
});

function checkSomething() {
  if (taskArr) {
    doneBtn.forEach((el, index) => {
      el.addEventListener("click", () => {
        console.log("done button pressed");
      });
    });
    cancelBtn.forEach((el, index) => {
      el.addEventListener("click", () => {
        console.log("cancel button pressed");
      });
    });

    deleteBtn.forEach((el, index) => {
      el.addEventListener("click", () => {
        task.deleteTask(index);
      });
    });
  }
}
