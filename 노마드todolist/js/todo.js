const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

const TODO = "todo"
let toDos = [];

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => 
    todo.id !== parseInt(li.id));
  saveToDos();
}

function saveToDos(){
  localStorage.setItem(TODO,JSON.stringify(toDos));
}

function paintToDo(element){
  const li = document.createElement("li");
  li.id = element.id;
  const span = document.createElement("span");
  span.innerText = element.text;
  const button = document.createElement("button");
  button.innerText = "❌"; 
  button.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}


todoForm.addEventListener("submit", (event)=>{
  event.preventDefault();
  const todo = todoInput.value;
  const newTodoObj = {
    text : todo,
    id : Date.now(),
  };
  toDos.push(newTodoObj);
  todoInput.value = "";
  paintToDo(newTodoObj);
  saveToDos();
})


const savedToDos = localStorage.getItem(TODO);

if(savedToDos !== null)
{
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

