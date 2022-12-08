const todoform = document.getElementById("todo-form");
const todolist = document.getElementById("todo-list");
const todobutton = document.getElementById("todo-button");
const todoinput = document.querySelector("#todo-form input")

function removeList(event) {
    event.preventDefault();
    const AddValue = todoinput.value;
    const somethingToRemove =document.getElementById(AddValue);
    somethingToRemove.remove();
    
}


function addList(event)  {
    event.preventDefault();
    
    const addValue = todoinput.value;
    
   
    const li = document.createElement("li");
    
    li.setAttribute('id',addValue);
    
    const textNode = document.createTextNode(addValue);
    li.appendChild(textNode);
    
   
    todolist.appendChild(li);
    
    const list = document.getElementById(addValue)

    const cancel = document.createElement("button");
    cancel.setAttribute('id',addValue+' cancel')
    li.appendChild(cancel)
    
    const cancelButton = document.getElementById(addValue+' cancel');
    cancelButton.addEventListener("click",removeList)
  }
todobutton.addEventListener("click",addList);








