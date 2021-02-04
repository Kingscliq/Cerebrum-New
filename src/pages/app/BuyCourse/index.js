/** @format */

import axios from "axios";
import React, { useState, useEffect } from "react";
import { dummyVideoImage } from "../../../assets/images";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";

const BuyCourse = () => {
  const [course, setCourse] = useState();
  //   const [courseId, setCourseId] = useState();

  useEffect(() => {
    const url_string = window.location.href;
    const url = new URL(url_string);
    const course_id = url.searchParams.get("id");
    axios
      .get(`https://cerebrum-v1.herokuapp.com/api/course/view/${course_id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <div>
      <DashboardHeader />
      <div className='container'>
        <div className='card p-4 m-4 d-flex justify-content-center'>
          <div className='row'>
            <div className='col-md-4'>
              <img
                src={dummyVideoImage}
                alt='cerebrum dummy'
                className='image-fluid w-100'
              />
            </div>
            <div className='col-md-8'>
              <div className='d-flex flex-column justify-content-between'>
                <div className=''>
                  <h1
                    className='text-bold mt-md-3'
                    style={{ fontWeight: "600" }}
                  >
                    The Story of Art
                  </h1>
                  <small>By Lil Kim</small>
                </div>
                <div className='mt-4'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime sapiente distinctio totam culpa, odio quo repellat
                    error dolor! Pariatur, reiciendis!
                  </p>
                </div>
                <div className='mt-5'>
                  <small className='btn btn-warning text-light'>N16,000</small>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <button className='btn btn-primary pull-right'>Buy Course</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { BuyCourse };
