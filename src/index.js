

document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.getElementById("create-task-form");
  form.addEventListener('submit', submitTask);

});


function submitTask(e) {
  e.preventDefault();

  const taskUl = document.getElementById("tasks");
  const inputValue = document.getElementById("new-task-description").value
  const button = document.createElement('button')
  const li = document.createElement("li");


  button.innerText = 'X'
  li.innerText = inputValue
  li.append(button)
  button.addEventListener('click', function () { removeLi(li) })
  taskUl.append(li);

}

function removeLi(li) {
  li.remove()
}