import React from "react";
import { AllTodos } from "./components/All-Todos";
import DoneTodos from "./components/Done-Todos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllTodos />} />
        <Route path="done" element={<DoneTodos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
