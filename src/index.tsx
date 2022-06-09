import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Nav from "./nav/nav";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import AOSInit from "./AOS";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

AOSInit();

root.render(
  <React.StrictMode>
    <Nav></Nav>
    <App />
  </React.StrictMode>
);
