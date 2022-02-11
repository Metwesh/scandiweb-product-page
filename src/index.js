import React from "react";
import ReactDOM from "react-dom";
import "./scss/styles.scss";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Route path="scandiweb-product-page" component={<App />} />
  </BrowserRouter>,
  document.getElementById("root")
);
