const taskList = document.getElementById('task-list');
const addBtn = document.getElementById('add-btn');
const inputTask = document.getElementById('input-task');

addBtn.addEventListener('click', function() {

    if (inputTask.value === '') {
        alert('Scrivi qualcosa da fare!')
    } else {

  const task = document.createElement('li');
  const checkbox = document.createElement('input');
  const taskText = document.createElement('span');
  const deleteBtn = document.createElement('button');

  checkbox.type = 'checkbox';
  taskText.innerText = inputTask.value;
  deleteBtn.innerText = 'X';
  
  task.appendChild(checkbox);
  task.appendChild(taskText);
  task.appendChild(deleteBtn);
  taskList.appendChild(task);
  
  inputTask.value = '';

  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(task);
  })};
});