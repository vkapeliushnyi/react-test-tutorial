// import { React, useState } from "react";
import { Button } from "@mui/material";
import { addTodosRequest } from "../Fetchs";
import { Send } from "@mui/icons-material/";

function AddButton({ setTodos, setInputValue, inputValue }) {
  return (
    <Button
      variant="contained"
      endIcon={<Send />}
      sx={{ display: "flex", margin: "auto" }}
      onClick={() => {
        addTodosRequest().then((data) =>
          setTodos((prevState) => [...prevState, data])
        );
        setInputValue("");
      }}
    >
      New Todo
    </Button>
  );
}

export default AddButton;
