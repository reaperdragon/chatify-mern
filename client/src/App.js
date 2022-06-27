import React from "react";
import { Routes, Route } from "react-router-dom";
import { Register, Chat } from "./Pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Chat />} />
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default App;
