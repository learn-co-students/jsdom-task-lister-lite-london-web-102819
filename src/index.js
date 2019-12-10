document.addEventListener("DOMContentLoaded", () => {


  let form = document.querySelector('#create-task-form');
  let tasks = document.querySelector('#tasks');
  let buttons = document.querySelector('submit');

  function removeTask(event) {
    let button = event.target
    button.parentElement.remove();
  }

  function addTask(event) {

    event.preventDefault();

    let task = document.createElement('li');
    let text = document.querySelector("#new-task-description").value;
    let priority = document.querySelector("select").value;
    let btn = document.createElement('button');

    
    task.innerText = text;
    btn.innerText = "X";

    task.appendChild(btn);
    btn.addEventListener('click', removeTask);

    if (priority === "low") {
      task.classList.add('low')
    }
    else if (priority === "medium") {
      task.classList.add("medium")
    }
    else {
      task.classList.add("high")
    }

    tasks.appendChild(task);
  }


  form.addEventListener('submit', addTask);
  


});