const input = document.querySelector("input");
const addTaskBtn = document.querySelector("#addBtn");
const taskCotnainer = document.querySelector(".taskContainer");
const deleteBtns = document.querySelectorAll('#delete');


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
    circleBtnFailure.classList.add("circleBtn");
    circleBtnRemove.classList.add("circleBtn");
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

    taskCotnainer.appendChild(taskDiv);
    taskDiv.appendChild(taskTextDiv);
    taskDiv.appendChild(buttonContainer);
    taskTextDiv.appendChild(taskText);
    taskCotnainer.childNodes.forEach((el, index)=> {
      el.childNodes[0]      
 })
      
  }
  doneTask() {}
  cancelTask() {}
  deleteTask(numberTask) {
    console.log(numberTask)
    let nodeNumber = numberTask;

    taskCotnainer.childeNodes.forEach((el, index) => {
      console.log(el.childNodes[nodeNumber])
    });
  }


    update() {

      
    }
    

}

const task = new Task();

addTaskBtn.addEventListener("click", () => {
  task.addTask(input.value);
  input.value="";
});

deleteBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    console.log("yo yo");
      task.deleteTask(index);  
      task.update();
  })

})






