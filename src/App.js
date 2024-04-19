import React from "react";
import Welcome from "./views/welcome";
import Card from "./views/card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
        {/* <Route path="/card" element={<Card />} /> */}

        <Route path="*" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
