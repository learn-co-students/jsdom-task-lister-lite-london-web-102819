document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', submitForm);
});

function submitForm(event) {
  event.preventDefault();
  const taskList = document.querySelector('#tasks');
  const taskInput = document.querySelector('#new-task-description').value
  const button = document.createElement('button')
  const li = document.createElement('li');
  button.innerText = 'X'
  li.innerText = taskInput
  li.append(button)
  button.addEventListener('click', function () { removeLi(li) })
  taskList.appendChild(li);
}

function removeLi(li) {
  li.remove()
}