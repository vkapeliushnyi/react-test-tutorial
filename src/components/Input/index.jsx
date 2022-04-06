import { TextField } from "@mui/material";

function Input({ inputValue, addTodos, setInputValue }) {
  return (
    <TextField
      id="outlined-basic"
      label="Write Todo"
      variant="outlined"
      type="text"
      size="small"
      margin="normal"
      autoComplete="off"
      sx={{ display: "grid" }}
      value={inputValue}
      onChange={(ev) => setInputValue(ev.target.value)}
      onKeyDown={addTodos}
    />
  );
}

export default Input;
