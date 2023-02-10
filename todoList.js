const input = document.querySelector("input");
const addTaskBtn = document.querySelector("#addBtn");
const taskCotnainer = document.querySelector(".taskContainer");

class MakeTodoList {
  constructor(todoList) {
    this.todoList = todoList;
    this.todos = [];
  }
  static addtoList(text) {
    let list = document.querySelector("#toDoContainer");
    var li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
    return li;
  }

  static removeFromList(text) {
    let list = document.querySelector("#toDoContainer");
    let childs = Array.from(list.childNodes);
    let item = childs.find((i) => i.innerText === text);
    return item;
  }

  addTodo(text) {
    this.todos.push(text);
    this.todoList.appendChild(MakeTodoList.addtoList(text));
  }

  removeTodo(text) {
    let filter = this.todos.filter((i) => i !== text);
    this.todoList(MakeTodoList.removeFromList(text));
    this.todos = filter;
  }

  set DummyData(value) {
    this.todos = value;
    this.todos.map((i) => MakeTodoList.addtoList(i));
  }
  get getList() {
    return this.todos;
  }
}

const task = new MakeTodoList();

addTaskBtn.addEventListener("click", () => {
  task.addTodo(input.value);
});
