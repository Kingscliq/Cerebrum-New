/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import { AddCourses } from "./pages/app/AddCourses";
import App from "./components/App";
import { Dashboard } from "./pages/app/Dashboard";
import { DashboardHeader } from "./widgets/DashboardHeader";
import { Footer } from "./widgets/Footer";
import { EmailVerify } from "./pages/auth/EmailVerify";

ReactDOM.render(
<<<<<<< HEAD
	<React.StrictMode>
		<BrowserRouter>
			<App />
			{/* <AddCourses /> */}
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
=======
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <AddCourses /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
>>>>>>> 4dd6ce1c2d8bd94e8b6be2e57a403d860ccdf7fa
);
