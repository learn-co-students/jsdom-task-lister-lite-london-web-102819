document.addEventListener("DOMContentLoaded", function(){
  // your code here
  const submitTask = document.querySelector("#create-task-form input[type='submit']");
  submitTask.addEventListener("click", handleSubmit);

  
});


function handleSubmit(e){
  e.preventDefault();

  let toDoList=document.querySelector("#tasks"); 
  const taskDescription=document.getElementById("new-task-description").value;
  
  addTaskToTasksList(toDoList, taskDescription)
};


function addTaskToTasksList(toDoList, taskDescription){
  let li=document.createElement("li");
  li.innerText=taskDescription;
  toDoList.appendChild(li);

  const button = document.createElement("button");
  button.innerHTML = 'Delete';
  li.append(button);
  button.addEventListener('click', function() { 
    deleteTask(li);
  });//instead of defining the function, pass in the function with the parameter. Function defined outside of this function scope. 
  toDoList.append(li);
  alert(li.innerText);
}; 

function deleteTask(li) {
  li.remove();
};
