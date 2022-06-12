import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./homepage/homepage";
import Login from "./login/loginSignup";
import MatchingPost from "./matchingPost/matchingPost";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/matching/post" element={<MatchingPost />}></Route>
      </Routes>
    </div>
  );
};

export default App;
