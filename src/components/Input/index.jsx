import { useState } from "react";
import { addTodosRequest } from "../Fetchs";
import { TextField } from "@mui/material";

function Input({ setTodos }) {
  const [inputValue, setInputValue] = useState("");
  const addTodos = (ev) => {
    if (ev.keyCode === 13) {
      addTodosRequest(inputValue).then((data) =>
        setTodos((prevState) => [...prevState, data])
      );
      setInputValue("");
    }
  };

  return (
    <TextField
      id="outlined-basic"
      label="Write Todo"
      variant="outlined"
      type="text"
      size="small"
      margin="normal"
      sx={{ display: "grid" }}
      value={inputValue}
      onChange={(ev) => setInputValue(ev.target.value)}
      onKeyDown={addTodos}
    />
  );
}

export default Input;
