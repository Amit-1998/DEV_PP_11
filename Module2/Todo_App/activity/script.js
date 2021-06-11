let addTodoButton = document.querySelector(".add-todo");
let todoInput = document.querySelector(".todo-input");
let todosList = document.querySelector(".todos-list-container");

// starting mein delete nhi mil sakta
// No point write here delete.addEventListener

// Easier Way
todoInput.addEventListener("keypress",function(e){
     if(e.key == "Enter"){
         addTodo();
     }
     
});
addTodoButton.addEventListener("click", function(){
     addTodo();
});

function addTodo(e){
    let todoInputValue = todoInput.value;
      //Now No need to write this //if( (e.type == "keypress" && e.key == "Enter") || (e.tyoe == "click") ){
          if(todoInputValue){
              //console.log(todoInputValue);
              appendTodo(todoInputValue);
              //it will empty the todoInput
              todoInput.value = "";
          }
      //}
}

function appendTodo(todo){
      
      // ye append karna hai
      // <div class="todo-item">
      //     <p class="todo-input"></p>
      //     <button class="delete-todo"></button>
      // </div>
    
    let todoItemDiv = document.createElement("div"); // bhar vaala div ban jayega which is empty
    //<div></div>
    todoItemDiv.classList.add("todo-item");
    // <div class="todo-input"></div>

    let pTag = document.createElement("p");
    pTag.classList.add("todo");
    pTag.textContent = todo;
    // <p class="todo-input">Learn CSS</p>

    let deleteTodoButton = document.createElement("button");
    deleteTodoButton.classList.add("delete-todo");
    deleteTodoButton.textContent = "Delete";
    //  <button class="delete-todo">Delete</button>

    deleteTodoButton.addEventListener("click",deleteTodo);

    // To make in form of Tree
    todoItemDiv.append(pTag); //append a DOM Node
    todoItemDiv.append(deleteTodoButton);

    todosList.append(todoItemDiv);
}

function deleteTodo(e){
    //console.log(e);
    e.target.parentNode.remove();

}



/* One-way

//yhi function todoInput.addEventListener() hi call lagayega cb ko baad mein
todoInput.addEventListener("keypress",addTodo);
addTodoButton.addEventListener("click", addTodo);

function addTodo(e){
      //console.log(e);
      //  if(e.key=="Enter"){
      //      // value inside input can be get both ways
      //      // first way => e.target.value;
      //      //second way => todoInput.value;

      //      let todoInputValue = todoInput.value;// can be write e.target.value;
      //      console.log(todoInputValue);
      //      todoInput.value = "";
      //  }

    let todoInputValue = todoInput.value;
    if( (e.type == "keypress" && e.key == "Enter") || (e.tyoe == "click") ){
        if(todoInputValue){
            console.log(todoInputValue);
            todoInput.value = "";
        }
    }
   
}

*/














































// todoInput.addEventListener("keypress", function (e) { // by default DOM cb mein event pass karke deta hai
//   if (e.key == "Enter") {           
//     addTodo();
//   }
// });

// attach click Event on addTodoButton
// addTodoButton.addEventListener("click", function () { // 'click' is an event & sec Param is callback function
//   addTodo();
// });

// attach click event on addTodoButton
// function addTodo(e) {

//   console.log(e)
//   // let todoInputValue = todoInput.value;
//   // if (todoInputValue) {
//   //   appendTodo(todoInputValue);
//   //   // it will empty the todoInput
//   //   todoInput.value = "";
//   // }

// }


// function appendTodo(todo) {
//   let todoItemDiv = document.createElement("div");
//   todoItemDiv.classList.add("todo-item");
//   // <div class="todo-item"> </div>

//   let pTag = document.createElement("p");
//   pTag.classList.add("todo-input");
//   pTag.textContent = todo;
//   // <p class="todo-input">Learn Css</p>

//   let deleteTodoButton = document.createElement("button");
//   deleteTodoButton.classList.add("delete-todo");
//   deleteTodoButton.textContent = "Delete";
//   // <button class="delete-todo">Delete</button>

//   deleteTodoButton.addEventListener("click", deleteTodo);

//   todoItemDiv.append(pTag);
//   todoItemDiv.append(deleteTodoButton);

//   todosList.append(todoItemDiv);
// }

// function deleteTodo(e) {
//   e.target.parentNode.remove();
// }