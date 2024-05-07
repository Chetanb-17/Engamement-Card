import React from "react";
import Login from "./views/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="*" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
