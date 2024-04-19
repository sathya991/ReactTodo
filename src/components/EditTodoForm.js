import React from 'react'
import { useState } from 'react'

export const EditTodoForm = ({ editTodo, todo }) => {
    const [task, setTask] = useState(todo.task)
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(task, todo.id);
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
                value={task}
                type='text'
                className='todo-input'
                placeholder='Update Task'
                onChange={(e) => setTask(e.target.value)}
            />
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    )
}
