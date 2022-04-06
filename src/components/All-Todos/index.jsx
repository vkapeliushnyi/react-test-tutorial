import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { Delete } from "@mui/icons-material/";
import { useState, useEffect } from "react";
import { showAllTodos, delTodos, checkedTodosRequest } from "../Fetchs";
import AddButton from "../Footer";
import Input from "../Input";

export function AllTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    showAllTodos().then((data) => setTodos(data));
    return () => {};
  }, []);

  return (
    <>
      <Input setTodos={setTodos} />

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

      <AddButton setTodos={setTodos} />
    </>
  );
}
