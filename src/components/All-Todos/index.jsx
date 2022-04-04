import React, { useState, useEffect } from "react";
import Input from "../Input";
export function AllTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/todos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodos(data);
      });

    return () => {};
  }, []);
  console.log(todos);

  return (
    <>
      <Input setTodos={setTodos} />
      <ul className="">
        {todos.map(({ id, title, done }) => (
          <li key={id}>
            <label>
              <input
                defaultChecked={done}
                type="checkbox"
                onChange={(event) => {
                  fetch(`http://localhost:4000/todos/${id}`, {
                    method: "PATCH",
                    body: JSON.stringify({ done: event.target.checked }),
                    headers: {
                      "Content-Type": "application/json; charset=UTF-8",
                    },
                  });
                }}
              />
              {title}
              <button
                onClick={() =>
                  fetch(`http://localhost:4000/todos/${id}`, {
                    method: "DELETE",
                  }).then(() =>
                    setTodos((prevState) =>
                      prevState.filter((el) => id !== el.id)
                    )
                  )
                }
              >
                Delete
              </button>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
