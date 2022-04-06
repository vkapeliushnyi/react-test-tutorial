import { IconButton, ListItem, Checkbox } from "@mui/material";
import { Delete } from "@mui/icons-material/";
import { useState, useEffect } from "react";
import {
  showAllTodos,
  delTodos,
  checkedTodosRequest,
  addTodosRequest,
} from "../Fetchs";
import AddButton from "../Footer";
import Input from "../Input";
export function AllTodos() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    showAllTodos().then(setTodos);
    return () => {};
  }, []);

  const addTodos = (ev) => {
    if ((ev.keyCode === 13 || Number.isInteger(ev.button)) && inputValue) {
      addTodosRequest(inputValue).then((data) =>
        setTodos((prevState) => [...prevState, data])
      );

      setInputValue("");
    }
  };

  return (
    <>
      <Input
        addTodos={addTodos}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />

      {todos.map(({ id, title, done }) => (
        <ListItem
          key={id}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="comments"
              onClick={() =>
                delTodos(id).then(() =>
                  setTodos((prevState) =>
                    prevState.filter((el) => id !== el.id)
                  )
                )
              }
            >
              <Delete />
            </IconButton>
          }
          disablePadding
        >
          <Checkbox
            edge="start"
            tabIndex={-1}
            disableRipple
            defaultChecked={done}
            type="checkbox"
            onChange={(event) => {
              checkedTodosRequest(id, event);
            }}
          />
          {title}
        </ListItem>
      ))}

      <AddButton addTodos={addTodos} />
    </>
  );
}
