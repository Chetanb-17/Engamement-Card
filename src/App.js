import React from "react";
import Login from "./views/login";
import Signup from "./views/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
