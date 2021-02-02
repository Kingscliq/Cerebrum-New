/** @format */
import { Link, Redirect } from "react-router-dom";
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
  const [user, setUser] = useState([]);
  const [role, setRole] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  // const [dashimage, setDashimage] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("userDetails");
    if (!data) {
      window.open("/login", "_self");
    }
    const user = JSON.parse(data);
    const token = user.data.token;
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const userId = user.data.uid;
    axios
      .get(`https://cerebrum-v1.herokuapp.com/api/user/${userId}`, config)
      .then((res) => {
        console.log("res value", res.data);
        // console.log(res.data.status);
        setUser(res.data.data);
        setRole(res.data.data.role);
        // setDashimage(res.data.data.image_url);
        // console.log(dashimage);
      })
      .catch((err) => {
        console.log(err.response.msg);
        window.open("/login", "_self");
      });
  }, []);

  useEffect(() => {
    const res = axios.get("https://cerebrum-v1.herokuapp.com/api/user/");
  });

  return (
    <>
      <DashboardHeader />
      <section className='container tdashboard'>
        <div className='container container-fluid mt-5'>
          <div className='row card p-5 shadow'>
            <div className='col-12 d-flex align-items-center'>
              <div className='col-8 m-5 justify-content-between'>
                <header>
                  <h1 className='font-bold'>Welcome {user.firstName}</h1>
                </header>
                <article>
                  Welcome to your cerebrum Dashboard. Cerebrum provides you with
                  boundless access to courses
                </article>
                <div className='d-flex flex-wrap justify-content-start my-3'>
                  {role === "tutor" ? (
                    <>
                      <button className='btn btn-primary'>
                        <Link
                          to='/dashboard/tutor/addcourse'
                          // style={{ color: "#f4f4f4", textDecoration: "none" }}
                        >
                          Add Course
                        </Link>
                      </button>
                      <button
                        className='btn btn-primary'
                        style={{ marginLeft: "20px" }}
                      >
                        <Link
                          to='/logout'
                          // style={{ color: "#f4f4f4", textDecoration: "none" }}
                        >
                          Logout
                        </Link>
                      </button>
                    </>
                  ) : (
                    <button className='btn btn-primary'>
                      <Link
                        to='/courses'
                        // style={{ color: "#f4f4f4", textDecoration: "none" }}
                      >
                        Buy Course
                      </Link>
                    </button>
                  )}
                </div>
              </div>
              <div className='col-4'>
                <img
                  src={dashImg}
                  className='img-responsive bg-warning rounded-circle shadow img-fluid'
                  alt='cerebrum'
                />
              </div>
            </div>
          </div>
        </div>
        <section className='row my-4 mt-5'>
          {role === "learner" ? (
            <div className='col-md-6 card p-5 shadow'>
              <div className='row align-items-center'>
                <div className='col-md-6'>
                  <img src={dashboardImg} alt='' />
                </div>
                <div className='col-md-6'>
                  <h1 className='font-bold'>Code 101: Codeology</h1>
                  <p>By {user.lastName}</p>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs.
                  </p>
                  <p>
                    <button className='btn btn-primary text-bold'>
                      Continue Course
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className='col-md-6 card py-5 shadow'>
              <div className='row align-items-center'>
                <CourseList
                  courseName='Code 101: Codeology'
                  courseDesc='Course +'
                  courseImg={dashAvater}
                />
                <CourseList
                  courseName=' Code 101: Codeology'
                  courseDesc='Course +'
                  courseImg={dashAvater}
                />
                <CourseList
                  courseName=' Code 101: Codeology'
                  courseDesc='Course +'
                  courseImg={dashAvater}
                />
                <CourseList
                  courseName=' Code 101: Codeology'
                  courseDesc='Course +'
                  courseImg={dashAvater}
                />
                <CourseList
                  courseName=' Code 101: Codeology'
                  courseDesc='Course +'
                  courseImg={dashAvater}
                />
                <CourseList
                  courseName=' Code 101: Codeology'
                  courseDesc='Course +'
                  courseImg={dashAvater}
                />
                <CourseList
                  courseName=' Code 101: Codeology'
                  courseDesc='Course +'
                  courseImg={dashAvater}
                />
              </div>
            </div>
          )}
          <div className='col-md-6 metrics d-flex flex-wrap flex-column'>
            <div className='card py-4 h-60 shadow mb-3'>
              <div className='row mx-auto justify-items-between'>
                <div className='col-md-6'>
                  <div>
                    <h1
                      style={{ fontSize: "50px", fontWeight: "600" }}
                      className='text-primary'
                    >
                      0
                    </h1>
                    <p>Courses Enrolled</p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <img src={ellipsesvg1} alt='ellipse svg images' />
                </div>
              </div>
            </div>
            <div className='card p-4 h-60 shadow'>
              <div className='row mx-auto'>
                <div className='col-md-6'>
                  <div>
                    <h1
                      style={{ fontSize: "50px", fontWeight: "600" }}
                      className='text-primary'
                    >
                      0
                    </h1>
                    <p>Courses Completed</p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <img src={ellipsesvg2} alt='ellipse svg images' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
  // } else {
  // return <Redirect to='/login' />;
  // }
};
export { TDashboard };
