/** @format */

import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import {
  dashboardImg,
  dashImg,
  ellipsesvg1,
  ellipsesvg2,
} from "../../../assets/images";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";
import axios from "axios";
import { signIn } from "../../../api";

const Dashboard = () => {
  const data = localStorage.getItem("userDetails");
  const user = JSON.parse(data);
  const config = {
    headers: {
      Authorization: "Bearer " + user.token,
    },
  };

  // const [user, setUser] = useState([]);

  const handleLogin = () => {
    const userId = localStorage.getItem("userDetails").uid;
    axios
      .get(`https://new-cerebrum.herokuapp.com/api/user/${userId}`, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data));
  };

  // signIn(user);

  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <>
      <DashboardHeader />
      <section className='container'>
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
        <section className='row my-4'>
          <div className='col-md-6 card p-5 shadow'>
            <div className='row align-items-center'>
              <div className='col-md-6'>
                <img src={dashboardImg} alt='' />
              </div>
              <div className='col-md-6'>
                <h1 className='font-bold'>Code 101: Codeology</h1>
                <p>By Kingsley</p>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </p>
                <p>
                  <button className='btn btn-warning text-light text-bold'>
                    Continue Course
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-6 metrics d-flex flex-wrap flex-column'>
            <div className='card p-4 h-60 shadow mb-3 col-offset-6'>
              <div className='row'>
                <div className='col-md-6'>
                  <div>
                    <h1
                      style={{ fontSize: "60px", fontWeight: "600" }}
                      className='text-primary'
                    >
                      300k
                    </h1>
                    <p>Courses Completed</p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <img src={ellipsesvg2} alt='ellipse svg images' />
                </div>
              </div>
            </div>
            <div className='card p-4 h-60 shadow col-offset-6'>
              <div className='row'>
                <div className='col-md-6'>
                  <div>
                    <h1
                      style={{ fontSize: "60px", fontWeight: "600" }}
                      className='text-primary'
                    >
                      30m
                    </h1>
                    <p>Courses Completed</p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <img src={ellipsesvg1} alt='ellipse svg images' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='d-flex flex-wrap justify-content-end py-5'>
          <button className='btn btn-outline-primary'>Add Course</button>
        </div>
      </section>
      <Footer />
    </>
  );
};
export { Dashboard };
