const todoform = document.getElementById("todo-form");
const todolist = document.getElementById("todo-list");
const todoinput = document.querySelector("#todo-form input")

const TODO_KEY ="todo"

const TODOSAVE = localStorage.getItem("todo");
let storage = [];

function removeList(event) {
  event.preventDefault();
  const somethingToRemove = event.target.parentElement;
  const somethingToRemoveArray = event.target.parentElement.id;

  somethingToRemove.remove();
  const newstorage = storage.filter(item => item.id != somethingToRemoveArray);
  storage = newstorage
  localStorage.setItem(TODO_KEY, JSON.stringify(newstorage))
  
}

function addList(event)  {
  event.preventDefault();
    
  const addValue = todoinput.value;
  const addValueObject = {
    text:addValue,
    id: Date.now()
  };
  const li = document.createElement("li");
  li.id = addValueObject.id;
    
  const span = document.createElement("span");
  span.innerText = addValueObject.text;
    
  const cancel = document.createElement("button");
  cancel.innerText =  "❌";
    
  li.appendChild(span);
  li.appendChild(cancel);
  todolist.appendChild(li);
    
  todoinput.value= null;

  storage.push(addValueObject);   
  localStorage.setItem(TODO_KEY, JSON.stringify(storage));

  cancel.addEventListener("click",removeList);
  }

todoform.addEventListener("submit",addList);

const savedToDo = localStorage.getItem(TODO_KEY);

if (savedToDo !== null) {
  const parseToDo = JSON.parse(savedToDo)
  parseToDo.forEach(element => { 
    const savedli = document.createElement("li");
    savedli.id = element.id;
    
    const savedspan = document.createElement("span");
    savedspan.innerText = element.text;
    
    const savedcancel = document.createElement("button");
    savedcancel.innerText =  "❌";
    
    savedli.appendChild(savedspan);
    savedli.appendChild(savedcancel);
    todolist.appendChild(savedli);
    
    storage.push(element);

    savedcancel.addEventListener("click",removeList);
  });
}