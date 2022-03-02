const loginForm = document.querySelector("#login-box");
const input = loginForm.querySelector("input");
const button = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");


const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";
const item = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `Hello ${username.toUpperCase()}!`;
}

function submitEvent(event){
  const username = input.value;
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  quoteContainer.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(username);
}


if(item === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", submitEvent);
}
else{
  paintGreetings(item);
  quoteContainer.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
}

