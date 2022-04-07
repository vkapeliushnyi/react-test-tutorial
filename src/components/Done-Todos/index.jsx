import { useState, useEffect } from "react";
import { showDoneTodos, checkedTodosRequest, delTodos } from "../Fetchs";
import { IconButton, ListItem, Checkbox } from "@mui/material";
import { Delete } from "@mui/icons-material/";

function DoneTodos() {
  const [doneTodos, setDoneTodos] = useState([]);
  useEffect(() => {
    showDoneTodos().then((data) => setDoneTodos(data));
  }, []);

  return (
    <>
      {doneTodos.map(({ id, title, done }) => (
        <ListItem
          key={id}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="comments"
              //TODO: make onClick callback a separate function
              onClick={() =>
                delTodos(id).then(() =>
                  setDoneTodos((prevState) =>
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
    </>
  );
}

export default DoneTodos;
