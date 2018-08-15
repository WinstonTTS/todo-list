['wash the dogs'].forEach(addTodoToDOM)

document.getElementById('addTodo').addEventListener('click', addTodo)

function addTodo() {
  const newTodoInput = document.getElementById('newTodo')

  addTodoToDOM(newTodoInput.value)

  newTodoInput.value = ''
}

function addTodoToDOM(todo) {
  const li = document.createElement('li')

  li.addEventListener('click', toggleComplete)
  li.addEventListener('dblclick', removeTodo)
  li.innerHTML = todo

  const todoList = document.getElementById('todoList')

  todoList.append(li)
}

function toggleComplete() {
  this.classList.toggle('completed')
}

function removeTodo() {
  this.remove()
}
