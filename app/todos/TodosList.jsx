import React from 'react';
import Link from 'next/link';

const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos = res.json();
    return todos;
}

const TodosList = async () => {
    const todos = await fetchTodos();

    return (
        <>
            {todos.map((todo) => (
                <p key={todo.id}>
                    <Link style={{color: "#000"}} href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
                </p>
            ))}
        </>
    );
};

export default TodosList;