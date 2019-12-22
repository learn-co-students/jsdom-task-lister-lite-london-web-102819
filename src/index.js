document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.querySelector('#create-task-form');
  taskForm.addEventListener('submit', submitForm);
})

const listContainer = document.querySelector('#list')
const ul = document.querySelector('#tasks')
const priority = document.querySelector('select').value
const submitForm = (event) => {
  event.preventDefault()
  const taskInput = document.querySelector('#new-task-description').value
  const deleteButton = document.createElement('button')
  deleteButton.innerText = 'X'

  const li = document.createElement('li')
  li.innerText = taskInput
  li.appendChild(deleteButton)
  ul.appendChild(li)

  if (priority === 'high') {
    li.classList.add('high')
  }
  else if (priority === 'medium') {
    li.classList.add('medium')
  }
  else {
    li.classList.add('low')
  }

  deleteButton.addEventListener('click', function () { removeLi(li) });
}

const removeLi = (li) => {
  li.remove()
}


