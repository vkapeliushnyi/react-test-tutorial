import { useState } from "react";

function Input({ setTodos }) {
  const [inputValue, setInputValue] = useState("");
  const addTodos = (ev) => {
    if (ev.keyCode === 13) {
      fetch(`http://localhost:4000/todos/`, {
        method: "POST",
        body: JSON.stringify({ title: inputValue, done: false }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => setTodos((prevState) => [...prevState, data]));

      console.log("Enter press");
      setInputValue("");
    }
  };
  return (
    <input
      type="text"
      value={inputValue}
      onChange={(ev) => setInputValue(ev.target.value)}
      onKeyDown={addTodos}
    ></input>
  );
}

export default Input;
