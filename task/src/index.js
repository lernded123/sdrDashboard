import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; //might remove for boostrap
import App from "./App";
import "boostrap/dist/css/boostrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
