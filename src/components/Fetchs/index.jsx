export function addTodosRequest(inputValue) {
  return fetch(`http://localhost:4000/todos/`, {
    method: "POST",
    body: JSON.stringify({ title: inputValue, done: false }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  }).then((data) => data.json());
}

export function showAllTodos() {
  return fetch(`http://localhost:4000/todos`).then((data) => data.json());
}
export function showDoneTodos() {
  return fetch(`http://localhost:4000/todos?done=true`).then((data) =>
    data.json()
  );
}

export function checkedTodosRequest(id, event) {
  return fetch(`http://localhost:4000/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ done: event.target.checked }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
}

export function delTodos(id) {
  return fetch(`http://localhost:4000/todos/${id}`, {
    method: "DELETE",
  });
}
