import { useState } from "react";

function DoneTodos() {
  const [doneTodos, setDoneTodos] = useState([]);
  fetch(`http://localhost:4000/todos?done=true`)
    .then((data) => data.json())
    .then((data) => setDoneTodos(data));
  return (
    <ul>
      <li>
        {doneTodos.map(({ id, title, done }) => (
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
                    setDoneTodos((prevState) =>
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
      </li>
    </ul>
  );
}

export default DoneTodos;
