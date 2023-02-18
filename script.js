const input = document.querySelector('input')

class ToDo{
  constructor(TodoList){
    this.TodoList = TodoList;
    this.TodoTable = [];
  }

  add(text){
      const container = document.querySelector('#myUL');
      const ul = document.createElement('li');
      const textNode = document.createTextNode(text)
      container.appendChild(ul);
      ul.appendChild(textNode);
     this.TodoTable.push(text)
     input.value =""
  }

  delete(listElem){
    const container = document.querySelector('#myUL');
    listElem = update();    

  }

  update(){
    const listElem = document.getElementsByTagName('li');
    console.log(listElem)
    return listElem
  }

}


const addBtn = document.querySelector('.addBtn');

const todo = new ToDo();


addBtn.addEventListener('click', ()=> {
      todo.add(input.value);
      todo.update();
})


