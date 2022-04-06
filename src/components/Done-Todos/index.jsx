import { useState, useEffect } from "react";
import { showDoneTodos, checkedTodosRequest, delTodos } from "../Fetchs";

function DoneTodos() {
  const [doneTodos, setDoneTodos] = useState([]);
  useEffect(() => {
    showDoneTodos().then((data) => setDoneTodos(data));
    return () => {};
  }, []);

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
                  checkedTodosRequest(id, done, event);
                }}
              />
              {title}
              <button
                onClick={() =>
                  delTodos(id).then(() =>
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
