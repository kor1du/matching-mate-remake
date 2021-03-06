import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Nav from "./nav/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import AOSInit from "./AOS";
import "animate.css";
import { BrowserRouter } from "react-router-dom";
import "hover.css/css/hover.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/index";

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

AOSInit();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Nav></Nav>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
