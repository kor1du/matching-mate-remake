import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Nav from "./nav/nav";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Nav></Nav>
    <App />
  </React.StrictMode>
);
