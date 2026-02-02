document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // The news and market data are now statically loaded in index.html, so no dynamic loading needed here.

    // Placeholder for loading todo tasks
    loadTodoTasks();
});

function loadTodoTasks() {
    // This function will be implemented later to load and display todo tasks
    // For now, let's add a couple of dummy tasks
    const tasks = [
        { id: 1, text: 'Define GitHub strategy', status: 'in-progress' },
        { id: 2, text: 'Research news APIs', status: 'done' },
        { id: 3, text: 'Design todo list UI', status: 'in-progress' }
    ];

    const tbody = document.getElementById('todo-table').querySelector('tbody');
    tbody.innerHTML = ''; // Clear existing tasks

    tasks.forEach(task => {
        const row = tbody.insertRow();
        row.dataset.taskId = task.id;

        const taskCell = row.insertCell();
        taskCell.textContent = task.text;

        const statusCell = row.insertCell();
        const statusSpan = document.createElement('span');
        statusSpan.className = `todo-status ${task.status.replace(' ', '-')}`;
        statusSpan.textContent = task.status;
        statusCell.appendChild(statusSpan);

        const actionsCell = row.insertCell();
        actionsCell.className = 'todo-actions';

        const toggleButton = document.createElement('button');
        toggleButton.textContent = task.status === 'done' ? 'Mark In Progress' : 'Mark Done';
        toggleButton.onclick = () => toggleTaskStatus(task.id);
        actionsCell.appendChild(toggleButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.onclick = () => deleteTask(id);
        actionsCell.appendChild(deleteButton);
    });
}

function toggleTaskStatus(id) {
    console.log(`Toggle status for task ${id}`);
    // Logic to update task status will go here
    loadTodoTasks(); // Reload for demonstration
}

function deleteTask(id) {
    console.log(`Delete task ${id}`);
    // Logic to delete task will go here
    loadTodoTasks(); // Reload for demonstration
}
