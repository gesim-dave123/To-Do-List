document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('todo-input');
    const addTaskBtn = document.getElementById('add-todo-btn');
    const taskList = document.getElementById('task-list');
    const emptyImage = document.querySelector('.empty-image'); // Corrected selector

    const toggleEmptyState = () => {
        emptyImage.style.display = taskList.children.length === 0 ? 'block' : 'none';
    };

    const addTask = (event) => {
        event.preventDefault(); // Prevent form submission
        const taskText = taskInput.value.trim();
        if (!taskText) {
            return;
        }
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
        toggleEmptyState();
    };

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask(e); 
        }
    });

    toggleEmptyState(); // Initialize empty state on load
});