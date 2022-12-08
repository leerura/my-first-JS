const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const wel = document.querySelector("#welcome");
const HIDDEN = "hidden"
const USERNAME = "Username"
const ToDoForm = document.getElementById("todo-form")


function takeTheNameSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN)
    let Name = loginInput.value;
    console.log("User's name is " + Name); 
    wel.classList.remove(HIDDEN);
    wel.innerText = "Hello, " + Name;
    localStorage.setItem(USERNAME, Name);
} //"Hello " + username; = `Hello ${username};


if (localStorage.getItem(USERNAME) === null) {
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit",takeTheNameSubmit);
} else {
    loginForm.classList.add(HIDDEN);
    let Un = localStorage.getItem(USERNAME);
    wel.classList.remove(HIDDEN);
    wel.innerText = "Hello, " + Un;
    ToDoForm.classList.remove(HIDDEN)
}