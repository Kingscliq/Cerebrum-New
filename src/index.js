/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
<<<<<<< HEAD
import { AddCourses } from "./pages/app/AddCourses";
import App from "./components/App";
import { Dashboard } from "./pages/app/Dashboard";
import { DashboardHeader } from "./widgets/DashboardHeader";
import { Footer } from "./widgets/Footer";
import { EmailVerify } from "./pages/auth/EmailVerify";
=======
import App from "./components/App";
import { LandingPage } from "./pages/app/LandingPage";
>>>>>>> feature/authentication

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
