// Selectors
const input = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click",addTodo);

//Fucntions
 function addTodo(event){
    // Prevent form from submitting
    event.preventDefault(); 
    // Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create li
    const todoLi=document.createElement("li");
    todoLi.innerText=input.value;
    
    todoLi.classList.add("todo-item");
    todoDiv.appendChild(todoLi);
   //check mark Button
   const completedButton =document.createElement("button");
   completedButton.innerHTML ='<i class="fas fa-check"></i>';
   completedButton.classList.add("complete-btn");
   todoDiv.appendChild(completedButton);
   //Trash Button
   const trashButton =document.createElement("button");
   trashButton.innerHTML ='<i class="fas fa-trash"></i>';
   trashButton.classList.add("trash-btn");
   todoDiv.appendChild(trashButton);
   //append to List
   todoList.appendChild(todoDiv);
   // clear todo input value
   input.value=""
 }