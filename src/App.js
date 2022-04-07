import React from "react";
import { AllTodos } from "./components/All-Todos";
import DoneTodos from "./components/Done-Todos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Box } from "@mui/material";

//TODO: Make a seperate router file
//TODO: Make a seperate pages folder
//TODO: Rename files to actual components or pages name
//TODO: Use camelCase to name files, folders and variables

const App = () => {
  return (
    <Box component="div" sx={{ margin: "auto", display: "table" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllTodos />} />
          <Route path="done" element={<DoneTodos />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
