import React, { useState } from 'react'

const TodoList = () => {

    const [taskInput, setTaskInput] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        const newTask = {
            id: Date.now(),
            text: taskInput.trim(),
        };

        setTasks([...tasks, newTask]);
        setTaskInput('');
    };

    const handleDeleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>To do List</h1>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={handleAddTask}>Add</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
