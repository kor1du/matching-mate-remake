import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./homepage/homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
