// Get the task list element
const taskList = document.getElementById('task-list');

// Get the new task input element
const newTaskInput = document.getElementById('new-task');

// Get the add task button element
const addTaskButton = document.getElementById('add-task');

// Add event listener to the add task button
addTaskButton.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
  const newTask = newTaskInput.value.trim();
  if (newTask !== '') {
    const taskListItem = document.createElement('li');
    taskListItem.innerHTML = `
      <span class="task-text">${newTask}</span>
      <span class="task-delete">&times;</span>
    `;
    taskList.appendChild(taskListItem);
    newTaskInput.value = '';
  }
}

// Add event listener to the task list element
taskList.addEventListener('click', toggleTask);

// Function to toggle the task status
function toggleTask(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  } else if (event.target.classList.contains('task-delete')) {
    event.target.parentNode.remove();
  }
}