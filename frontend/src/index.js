import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import "./index.scss";
import Provider from "./context/context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
);