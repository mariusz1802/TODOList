const input = document.querySelector("input");
const addTaskBtn = document.querySelector("#addBtn");
const taskCotnainer = document.querySelector(".taskContainer");
const countArr = [1, 2, 3, 4, 5];
let doneBtn;
let cancelBtn;
let deleteBtn;
let circleBtn;

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
    console.log("deleteButton");
  }
  cancelTask() {}

  update() {
    input.value = "";
    circleBtn = document.querySelectorAll(".circleBtn");
    cancelBtn = document.querySelectorAll("#cancel");
    deleteBtn = document.querySelectorAll("#delete");
    doneBtn = document.querySelectorAll("#done");
    buttonService();
  }
}

const task = new Task();

addTaskBtn.addEventListener("click", () => {
  task.addTask(input.value);
  task.update();
});

function buttonService() {
  if (taskArr) {
    doneBtn.forEach((el) => {
      el.addEventListener("click", () => {
        console.log("done clicked");
      });
    });

    cancelBtn.forEach((el) => {
      el.addEventListener("click", () => {
        console.log("Cancel clicked");
      });
    });

    deleteBtn.forEach((el) => {
      el.addEventListener("click", () => {
        console.log("delete clicked");
      });
    });

    // circleBtn.forEach((el, index) => {
    //   el.addEventListener("click", (e) => {
    //     switch (e.target.alt) {
    //       case "check":
    //         console.log(e.target.alt);
    //         break;
    //       case "failure":
    //         console.log("cancel button pressed");
    //         break;
    //       case "delete":
    //         console.log("delete button pressed");
    //         break;
    //       default:
    //         console.log("cos nie zagralo");
    //     }
    //   });
    // });
  }
}
