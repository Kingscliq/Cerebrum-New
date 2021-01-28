/** @format */

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

const authUser = () => {
  useEffect(() => {
    authUser();
  }, []);

  const data = localStorage.getItem("userDetails");
  const user = JSON.parse(data);
  const token = user.data.token;
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const userId = user.data.uid;
  axios
    .get(`https://cerebrum-v1.herokuapp.com/api/users/${userId}`, config)
    .then((res) => console.log(res.data))
    .catch((err) => {
      if (err.response.status === "401") {
        window.open("/login", "_self");
      }
    });
};

const TDashboard = () => {
  const [user, setUser] = useState("");

  return (
    <>
      <DashboardHeader />
      <section className='container tdashboard'>
        <div className='container container-fluid mt-5'>
          <div className='row card p-5 shadow'>
            <div className='col-12 d-flex align-items-center'>
              <div className='col-8 m-5 justify-content-between'>
                <header>
                  <h1 className='font-bold'>Welcome Isabella</h1>
                </header>
                <article>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </article>
                <div className='d-flex flex-wrap justify-content-start my-3'>
                  <button className='btn btn-primary'>Add Course</button>
                </div>
              </div>
              <div className='col-4'>
                <img
                  src={dashImg}
                  className='img-responsive bg-warning rounded-circle shadow img-fluid'
                />
              </div>
            </div>
          </div>
        </div>
        <section className='row my-4 mt-5'>
          <div className='col-md-6 card py-5 shadow'>
            <div className='row align-items-center'>
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
              <CourseList
                courseName=' Code 101: Codeology'
                courseDesc='Course +'
                courseImg={dashAvater}
              />
            </div>
          </div>
          <div className='col-md-6 metrics d-flex flex-wrap flex-column'>
            <div className='card py-4 h-60 shadow mb-3'>
              <div className='row mx-auto justify-items-between'>
                <div className='col-md-6'>
                  <div>
                    <h1
                      style={{ fontSize: "50px", fontWeight: "600" }}
                      className='text-primary'
                    >
                      300k
                    </h1>
                    <p>Courses Completed</p>
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
                      30m
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
};
export { TDashboard };
