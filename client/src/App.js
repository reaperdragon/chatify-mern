import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard, SharedLayout } from "./pages/Main";
import { Register, Landing, Error, ProtectedLayout } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedLayout>
              <SharedLayout />
            </ProtectedLayout>
          }
        >
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
