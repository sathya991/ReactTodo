import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
    const [task, setTask] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(task);
        setTask("")
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
                value={task}
                type='text'
                className='todo-input'
                placeholder='What are we gonna do today?'
                onChange={(e) => setTask(e.target.value)}
            />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}
