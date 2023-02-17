const input = document.querySelector("input");
const addTaskBtn = document.querySelector("#addBtn");
const taskCotnainer = document.querySelector(".taskContainer");

class MakeTodoList {
  constructor(list) {
    this.todos = [];
    this.toDoList = list;
  }
  static addtoList(text) {
    let container = document.querySelector(".toDoContainer");
    let li = document.createElement("li");
    li.textContent = text;
    container.appendChild(li)
    return li;
  }

  static removeFromList(text) {
    let container = document.querySelector("#toDoContainer");
    let childs = Array.from(container.childNodes);
    let item = childs.find((i) => i.innerText === text);
    return item;
  }

  addTodo(text) {
    this.todos.push(text);
    this.todoList.appendChild(addtoList(text));
  }

  removeTodo(text) {
    let filter = this.todos.filter((i) => i !== text);
    this.todoList(MakeTodoList.removeFromList(text));
    this.todos = filter;
  }
}


addTaskBtn.addEventListener("click", () => {
  let task = new MakeTodoList(input.value);
  task.addTodo(input.value);
});
