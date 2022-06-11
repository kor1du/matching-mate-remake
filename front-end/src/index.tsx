import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Nav from "./nav/nav";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import AOSInit from "./AOS";
import "animate.css";
import { BrowserRouter } from "react-router-dom";
import "hover.css/css/hover.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

AOSInit();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav></Nav>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
