import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Todos } from "./components/Todos/Todos";
import { DoneTodos } from "./components/DoneTodos/DoneTodos";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="todos" element={<Todos />} />
        <Route path="done-todos" element={<DoneTodos />} />
      </Routes>
    </BrowserRouter>
  );
};
