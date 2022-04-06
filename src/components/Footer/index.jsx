// import { React, useState } from "react";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material/";

function AddButton({ addTodos }) {
  return (
    <Button
      variant="contained"
      endIcon={<Send />}
      sx={{ display: "flex", margin: "auto" }}
      onClick={addTodos}
    >
      New Todo
    </Button>
  );
}

export default AddButton;
