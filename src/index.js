import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import { AddCourses } from "./pages/app/AddCourses";
import App from "./components/App";
import { Header } from "./widgets/Header/Index";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      {/* <App /> */}
      {/* <AddCourses /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
