/** @format */
import { Link, Redirect, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  dashAvater,
  dashboardImg,
  dashImg,
  ellipsesvg1,
  ellipsesvg2,
} from "../../../assets/images";
import { CourseList } from "../../../components/CourseList";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";
import "./TDashboard.css";
import axios from "axios";

// Api Call to get Authorized User
const TDashboard = () => {
  const history = useHistory();
  const [user, setUser] = useState([]);
  const [role, setRole] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [courses, setCourses] = useState([]);
  const [courseCount, setCourseCount] = useState(0);
  const [data, setData] = useState();
  const [lcourse, setLcourse] = useState({});
  const [lcourseCount, setLcourseCount] = useState();

  // Get login details from Local Storage
  useEffect(() => {
    const data = localStorage.getItem("userDetails");
    if (!data) {
      history.push("/auth/login");
    }
    const userData = JSON.parse(data);
    const token = userData.data.token;
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const userId = userData.data.uid;
    axios
      .get(`https://cerebrum-v1.herokuapp.com/api/user/${userId}`, config)
      .then((res) => {
        console.log("res value", res.data);
        setUser(res.data.data);
        setRole(res.data.data.role);
      })
      .catch((err) => {
        history.push("/auth/login");
      });
  }, []);

  useEffect(async () => {
    if (user.role === "tutor") {
      await axios
        .get(`https://cerebrum-v1.herokuapp.com/api/tutor/course/${user._id}`)
        .then((res) => {
          setCourseCount(res.data.data.length);
          setCourses(res.data.data);
        })
        .catch((err) => console.log(err.response));
    }
  }, []);

  useEffect(async () => {
    const learner = JSON.parse(localStorage.getItem("userDetails"));
    // console.log(user)
    await axios
      .get(`https://cerebrum-v1.herokuapp.com/api/payment/${learner.data.uid}`)
      .then((res) => {
        console.log(res.data.data);
        const stcourses = res.data.data;
        setLcourseCount(stcourses.length);
        setLcourse(stcourses[0]);
        console.log(stcourses[0]);
      })
      .catch((err) => console.log(err.response));
  }, []);

  const sendToCourse = () => {
    window.location.assign(`/learner/viewcourse/?id=${lcourse.course_id._id}`);
  };

  return <></>;
};
export { TDashboard };
