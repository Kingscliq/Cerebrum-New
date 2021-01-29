import React from "react";
import { Switch, Route } from "react-router-dom";
import { ForgotPassWord } from "../pages/auth/ForgotPassword";
import { Login } from "../pages/auth/Login";
import { SignUp } from "../pages/auth/SignUp";
import { VerifyEmail } from "../pages/auth/VerifyEmail";
import { WatchCourse } from "../pages/app/WatchCourse";
import { Courses } from "../pages/app/Courses";
import "./App.css";
import { TutorAddCourse } from "../pages/app/TutorAddCourse";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/tutoraddcourse" component={TutorAddCourse} />
				<Route path="/courses" component={Courses} />
				<Route path="/watchcourse" component={WatchCourse} />
				<Route path="/login" component={Login} />
				<Route path="/forgotpassword" component={ForgotPassWord} />
				<Route path="/verifyemail" component={VerifyEmail} />
				<Route path="/" exact component={SignUp} />
			</Switch>
		</div>
	);
}

export default App;
