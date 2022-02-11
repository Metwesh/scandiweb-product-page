import React from "react";
import ReactDOM from "react-dom";
import "./scss/styles.scss";
import App from "./App";
import { BrowserRouter, Outlet, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Route path="scandiweb-product-page">
      <App />
      </Route>
      <Outlet />
  </BrowserRouter>,
  document.getElementById("root")
);
