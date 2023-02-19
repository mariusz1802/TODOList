const input = document.querySelector("input");
const container = document.querySelector("#myUL");

class ToDo {
  constructor(TodoList) {
    this.TodoList = TodoList;
    this.TodoTable = [];
  }

  add(text) {
    const container = document.querySelector("#myUL");
    const ul = document.createElement("li");
    const textNode = document.createTextNode(text);
    container.appendChild(ul);
    ul.appendChild(textNode);
    this.TodoTable.push(text);
    input.value = "";
  }

  delete(li) {
    const container = document.querySelector("#myUL").children;
    const containerTask = Array.from(container);

    containerTask.forEach((element) => {
      element.addEventListener("click", () => {
        element.style.display = "none";
      });
    });

    li.addEventListener("click", () => {
      li.style.display = "none";
    });
  }

  update() {
    const listElem = document.getElementsByTagName("li");
    return listElem;
  }
}

const addBtn = document.querySelector(".addBtn");

const todo = new ToDo();

container.addEventListener("click", (e) => {
  todo.delete(e.target);
});

addBtn.addEventListener("click", () => {
  todo.add(input.value);
  todo.update();
});
