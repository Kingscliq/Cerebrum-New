/** @format */

import React, { useState, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
import { SDashboard } from "../pages/app/SDashboard";
import { Context } from "../Store";

// import { ComingSoon } from "../pages/app/ComingSoon";

// Protected Route Component
const loggedIn = true;
const ProtectedRoute = ({ Layout, Component, path }, ...rest) => (
  <Route
    {...rest}
    path={path}
    render={(props) =>
      loggedIn === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/auth/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

function App() {
  // import the Global State which is context
  const [state, setState] = useContext(Context);
  return (
    <Switch>
      {/* UNPROTECTED  ROUTES */}

      <Route path='/' exact component={LandingPage} />
      <Route path='/auth/login' component={Login} />
      <Route path='/auth/signup' exact component={SignUp} />
      <Route path='/auth/verifyemail' component={VerifyEmail} />
      <Route path='/auth/verify-email' component={EmailVerify} />
      <Route path='/auth/forgotpassword' component={ForgotPassWord} />
      <Route path='/auth/reset-password' component={ResetPassword} />

      <Route path='/about' component={About} />
      <Route path='/faq' component={Faq} />
      <Route path='/support' component={Support} />

      {/* PROTECTED ROUTES */}
      <ProtectedRoute path='/auth/logout' Component={Logout} />
      <ProtectedRoute exact path='/tutor/dashboard' Component={TDashboard} />
      <ProtectedRoute exact path='/student/dashboard' Component={SDashboard} />
      <ProtectedRoute
        path='/dashboard/tutor/addcourse'
        exact
        Component={AddCourses}
      />
      <ProtectedRoute path='/buycourse' Component={BuyCourse} />
      <ProtectedRoute path='/courses' Component={Courses} />
      <ProtectedRoute
        path='/user/course/paymentoption'
        Component={PaymentOption}
      />
      <ProtectedRoute
        path='/user/course/payment/success'
        Component={PaymentSuccessful}
      />
      <ProtectedRoute
        path='/user/course/payment/fail'
        Component={PaymentFailed}
      />
      <ProtectedRoute
        path='/user/editprofile'
        Component={TutorProfileSettings}
      />
      <ProtectedRoute path='/logout' Component={Logout} />
      <ProtectedRoute path='/learner/viewcourse' Component={ViewCourse} />
      <ProtectedRoute path='/tutoraddcourse' Component={TutorAddCourse} />
      <ProtectedRoute path='/course/categories' Component={ViewCategories} />
      <ProtectedRoute path='/search/:id' Component={Search} />
      <ProtectedRoute path='/search' Component={Search} />
      {/* <Route path='/' exact component={ComingSoon} /> */}
    </Switch>
  );
}

export default App;
