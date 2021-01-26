/** @format */

import React from "react";
import { dashboardImg, dashImg } from "../../../assets/images";
const Dashboard = () => {
  return (
    <section className='container'>
      <div className='container container-fluid mt-5'>
        <div className='row card p-5 shadow'>
          <div className='col-12 d-flex align-items-center'>
            <div className='col-8 m-5'>
              <header>
                <h1>Welcome Isabella</h1>
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
          <div className='row'>
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
        <div className='col-md-6 metrics d-flex flex-column justify-content-space-between'>
          <div className='card p-4 h-50 shadow mb-3'>
            <h1
              style={{ fontSize: "50px", fontWeight: "900" }}
              className='text-primary'
            >
              300K
            </h1>{" "}
            <p>Courses Completed</p>
          </div>
          <div className='card p-4 h-50 shadow'>
            <h1 style={{ fontSize: "100px", fontWeight: "900" }}>30m</h1>{" "}
            <p>Paid Courses</p>
          </div>
        </div>
      </section>
      <div className='d-flex justify-content-end py-5'>
        <button className='btn btn-outline-primary'>Add Course</button>
      </div>
    </section>
  );
};
export { Dashboard };
