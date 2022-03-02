const todoForm = document.querySelector("#todo-form");
const write = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todoArray = [];

function addStorage(){
  const string = JSON.stringify(todoArray);
  localStorage.setItem("todo", string);
}

function delteItem(event){
  const li = event.target.parentElement;
  todoArray = todoArray.filter((element) => element.id !== parseInt(li.id));
  addStorage();
  li.remove();
}

function makeList(value){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  li.appendChild(span);
  li.appendChild(btn);
  span.innerText = value.text;
  btn.innerText = "❌";
  btn.addEventListener("click", delteItem);
  li.id = value.id;
  todoList.appendChild(li);
}


todoForm.addEventListener("submit", (event)=>{
  event.preventDefault();
  const writtenValue = write.value;
  const valueObj ={
    text : writtenValue,
    id : Date.now(),
  }
  todoArray.push(valueObj);
  console.log(todoArray);
  write.value = "";
  makeList(valueObj);
  addStorage();
});

const savedTodos = localStorage.getItem("todo");

if(savedTodos){
  const parsedTodo = JSON.parse(savedTodos);
  todoArray = parsedTodo;  
  parsedTodo.forEach(makeList);
  quoteContainer.classList.remove("hidden");
  todoForm.classList.remove("hidden");
}