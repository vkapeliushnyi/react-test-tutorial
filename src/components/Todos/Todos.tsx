import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

export const Todos = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  useEffect(() => {
    fetch("http://localhost:4000/todos")
      .then((res) => res.json())
      .then((result) => setTodos(result));
  }, []);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id + todo.title}>{todo.title}</li>
      ))}
    </ul>
  );
};
