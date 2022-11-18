import React from "react";
import ReactDOM from "react-dom/client";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createTheme } from "@mui/system";
import { ThemeProvider } from "@mui/styles";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
