import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { AddCourses } from "./pages/app/AddCourses";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <AddCourses />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
