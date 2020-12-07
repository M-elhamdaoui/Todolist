// Selectors
const input = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption= document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteChick);
filterOption.addEventListener("click",filterTodo);

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

 function deleteChick(e){
   const item = e.target;
   //delete todo
   if(item.classList[0]==="trash-btn"){
      const todo =item.parentElement;
      todo.classList.add("fall");
      todo.addEventListener("transitionend",()=>{
         todo.remove();
      })
      
   }

   // check Mark
   if(item.classList[0]==="complete-btn"){
      const todo = item.parentElement;
      todo.classList.toggle("completed");
   }
 }

 function filterTodo(e){
   const todos= todoList.childNodes;
   todos.forEach(function(todo){
      switch(e.target.value){
         case "all":
            todo.style.display="flex"
            break;
         case "completed":
            if(todo.classList.contains("completed")){
               todo.style.display="flex";
            }else{
               todo.style.display="none";
            }
         break; 
         case "uncompleted":
            if(!todo.classList.contains("completed")){
               todo.style.display="flex";
               
            }else{
               todo.style.display="none";
            }
            break;
      }
   })
 }