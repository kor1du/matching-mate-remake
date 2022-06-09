import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./homepage/homepage";
import Login from "./login/login";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
