import React from "react";
import { Route, Routes } from "react-router-dom";
import Chatting from "./chatting/ChattingList";
import ChattingRoom from "./chatting/ChattingRoom";
import Homepage from "./homepage/Homepage";
import Login from "./login/LoginSignup";
import MatchingPost from "./matchingPost/MatchingPost";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/matching/post" element={<MatchingPost />}></Route>
        <Route path="/chatting" element={<Chatting />}></Route>
        <Route path="/chatting/room" element={<ChattingRoom />}></Route>
      </Routes>
    </div>
  );
};

export default App;
