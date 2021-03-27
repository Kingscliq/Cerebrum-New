/** @format */

import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "../pages/app/LandingPage";
import { ForgotPassWord } from "../pages/auth/ForgotPassword";
import { Login } from "../pages/auth/Login";
import { SignUp } from "../pages/auth/SignUp";
import { VerifyEmail } from "../pages/auth/VerifyEmail";
import { TDashboard } from "../pages/app/TDashboard";
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
import { BuyCourse } from "../pages/app/BuyCourse";
import { ViewCategories } from "../pages/app/ViewCategories";
import { ViewCourse } from "../pages/app/ViewCourse";
import { Search } from "../pages/app/Search";
import { About } from "../pages/app/About";
import { Faq } from "../pages/app/Faq";
import Support from "../pages/app/Support";
import Store from "../Store";
// import { ComingSoon } from "../pages/app/ComingSoon";

function App() {
  return (
    <Store>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/auth/login' component={Login} />
        <Route path='/auth/signup' exact component={SignUp} />
        <Route path='/auth/verifyemail' component={VerifyEmail} />
        <Route path='/auth/verify-email' component={EmailVerify} />
        <Route path='/auth/logout' component={Logout} />
        <Route path='/auth/forgotpassword' component={ForgotPassWord} />
        <Route path='/auth/reset-password' component={ResetPassword} />
        <Route exact path='/dashboard' component={TDashboard} />
        <Route path='/dashboard/tutor/addcourse' exact component={AddCourses} />
        <Route path='/buycourse' component={BuyCourse} />
        <Route path='/courses' component={Courses} />
        <Route path='/reset-password' component={ResetPassword} />
        <Route path='/user/course/paymentoption' component={PaymentOption} />
        <Route
          path='/user/course/payment/success'
          component={PaymentSuccessful}
        />
        <Route path='/user/course/payment/fail' component={PaymentFailed} />
        <Route path='/user/editprofile' component={TutorProfileSettings} />
        <Route path='/logout' component={Logout} />
        <Route path='/learner/viewcourse' component={ViewCourse} />
        <Route path='/tutoraddcourse' component={TutorAddCourse} />
        <Route path='/course/categories' component={ViewCategories} />
        <Route path='/search/:id' component={Search} />
        <Route path='/search' component={Search} />
        <Route path='/about' component={About} />
        <Route path='/faq' component={Faq} />
        <Route path='/support' component={Support} />
        {/* <Route path='/' exact component={ComingSoon} /> */}
      </Switch>
    </Store>
  );
}

export default App;
