/** @format */

import React, { useState, useEffect } from "react";
import { dashboardImg, dashImg } from "../../../assets/images";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";

const TDashboard = () => {
  // const [authennticated, setAuthneticated];
  return (
    <>
      <DashboardHeader />
      <section className='container'>
        <div className='container container-fluid mt-5'>
          <div className='row card p-5 shadow'>
            <div className='col-12 d-flex align-items-center'>
              <div className='col-8 m-5 justify-content-between'>
                <header>
                  <h1>Welcome Isabella</h1>
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
        <section className='row my-4'>
          <div className='col-md-6 card p-5 shadow'>
            <div className='row align-items-center'>
              <div className='col-md-6'>
                <img src={dashboardImg} alt='' />
              </div>
              <div className='col-md-6'>
                <h1>Code 101: Codeology</h1>
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
            <div className='card p-4 h-60 shadow mb-3'>
              <div className='row mx-auto'>
                <div className='col-md-6'>
                  <div>
                    <h1
                      style={{ fontSize: "50px", fontWeight: "900" }}
                      className='text-primary'
                    >
                      300K
                    </h1>
                    <p>Courses Completed</p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div
                    className='border-primary border rounded-circle'
                    style={{
                      height: "150px",
                      width: "150px",
                      borderWeight: "3px",
                    }}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className='card p-4 h-60 shadow mb-3'>
              <div className='row mx-auto'>
                <div className='col-md-6'>
                  <div>
                    <h1
                      style={{ fontSize: "50px", fontWeight: "900" }}
                      className='text-primary'
                    >
                      300K
                    </h1>
                    <p>Courses Completed</p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div
                    className='border-primary border rounded-circle'
                    style={{
                      height: "150px",
                      width: "150px",
                      // borderWidth: "3px",
                    }}
                  >
                    &nbsp;
                  </div>
                  <div
                    className='border-primary border-left rounded-circle'
                    style={{
                      height: "150px",
                      width: "150px",
                      // borderWidth: "10px",
                      display: "absolute",
                      marginTop: "-150px",
                    }}
                  >
                    &nbsp;
                  </div>
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
