import React from "react";
import ReactDOM from "react-dom/client";

// bootstrap
import "./css/bootstrap.css";

// custom css
import "./css/styles.css";

import App from "./App";

//
const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
