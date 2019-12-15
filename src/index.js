document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.querySelector('#create-task-form');
  taskForm.addEventListener('submit', submitForm);
})

const listContainer = document.querySelector('#list')
const ul = document.querySelector('#tasks')

const submitForm = (event) => {
  event.preventDefault()
  const TaskInput = document.querySelector('#new-task-description').value
  const deleteButton = document.createElement('button')
  deleteButton.innerText = 'X'

  const li = document.createElement('li')
  li.innerText = TaskInput
  li.appendChild(deleteButton)
  ul.appendChild(li)

  deleteButton.addEventListener('click', function () { removeLi(li) });

}

const removeLi = (li) => {
  li.remove()
}


