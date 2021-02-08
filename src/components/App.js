/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "../pages/app/LandingPage";
import { ForgotPassWord } from "../pages/auth/ForgotPassword";
import { Login } from "../pages/auth/Login";
import { SignUp } from "../pages/auth/SignUp";
import { VerifyEmail } from "../pages/auth/VerifyEmail";
// import { Dashboard } from "../pages/app/Dashboard";
import { TDashboard } from "../pages/app/TDashboard";
import { WatchCourse } from "../pages/app/WatchCourse";
import "./App.css";
import { EmailVerify } from "../pages/auth/EmailVerify";
import { AddCourses } from "../pages/app/AddCourses";
import { Courses } from "../pages/app/Courses";
import { TutorAddCourse } from "../pages/app/TutorAddCourse";
import { Logout } from "../pages/app/Logout";
import { ResetPassword } from "../pages/auth/ResetPassword";
import { PaymentSuccessful } from "../widgets/PaymentSuccessful";
import { TutorProfileSettings } from "../pages/app/TutorProfileSettings";
import { PaymentFailed } from "../widgets/PaymentFailed";
import { PaymentOption } from "../widgets/PaymentOption";
import { ViewCourse } from "../pages/app/ViewCourse";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/signup" exact component={SignUp} />
        <Route path="/auth/verifyemail" component={VerifyEmail} />
        <Route path="/auth/verify-email" component={EmailVerify} />
        <Route path="/auth/logout" component={Logout} />
        <Route path="/auth/forgotpassword" component={ForgotPassWord} />
        <Route exact path="/dashboard" component={TDashboard} />
        <Route path="/dashboard/tutor/addcourse" exact component={AddCourses} />
        <Route path="/courses" component={Courses} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/watchcourse" component={WatchCourse} />
        <Route path="/user/course/paymentoption" component={PaymentOption} />
        <Route path="/logout" component={Logout} />
        <Route path="/learner/viewcourse" component={ViewCourse} />
      </Switch>
    </div>
  );
}

export default App;
