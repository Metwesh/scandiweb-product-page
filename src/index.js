import React from "react";
import ReactDOM from "react-dom";
import "./scss/styles.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/scandiweb-product-page">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
