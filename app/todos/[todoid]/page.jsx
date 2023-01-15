import React from 'react';
import { notFound } from 'next/navigation'

export const dynamicParams = true;

const fetchTodo = async (todoid) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoid}`, { next : {revalidate: 60}});
    const todo = res.json();
    return todo;
}

const TodoPage = async ({params: { todoid }}) => {
    const todo = await fetchTodo(todoid);
    
    if(!todo.id) return notFound();

    return (
        <div className='todo-card'>
            <p>
                #{todo.id}: {todo.title}
            </p>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>

            <p className='todo-card-bottom'>
                By User: {todo.userId}
            </p>
        </div>
    );
};

export default TodoPage;

export async function generateStaticParams() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const todos = await res.json();

    const trimmedTodos = todos.splice(0, 10);

    return trimmedTodos.map((todo) => ({
        todoid: todo.id.toString()
    }))
}