/** @format */

import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaWindows } from "react-icons/fa";
import { dummyVideoImage } from "../../../assets/images";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";

const BuyCourse = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({});
  const [tutor, setTutor] = useState({});
  const [courseId, setCourseId] = useState("");

  const handleBuy = () => {
    const data = localStorage.getItem("userDetails");
    if (data === null) {
      let url_string = window.location.href;
      let url = new URL(url_string);
      localStorage.setItem("current", url);
      console.log(url);
      window.open(`/auth/login`);
    } else {
      // window.open(`/buycourse/${courseId}`, "_blank");
      window.open(`/user/course/paymentoption`);
    }
    // console.log("Course Bought");
  };
  const watchCourse = () => {
    const data = localStorage.getItem("userDetails");
    if (data === null) {
      let url_string = window.location.href;
      let url = new URL(url_string);
      localStorage.setItem("current", url);
      console.log(url);
      window.open(`/auth/login`);
    } else {
      window.open(`/watchcourse/${courseId}`, "_blank");
    }
  };

  // const getCourse = () => {};
  useEffect(() => {
    const url_string = window.location.href;
    const url = new URL(url_string);
    const course_id = url.searchParams.get("id");
    setCourseId(course_id);
    axios
      .get(`https://cerebrum-v1.herokuapp.com/api/course/${course_id}`)
      .then((res) => {
        const data = res.data.data;
        data.map((course) => {
          setCourse(course);
          localStorage.setItem("courses", JSON.stringify(course));
          //   console.log(course.tutor_id);
          setTutor(course.tutor_id);
        });
      })
      .catch((err) => console.log(err.response));
  }, []);
  //
  return (
    <div>
      <DashboardHeader />
      <div className='container'>
        <div className='card p-4 m-4 d-flex justify-content-center'>
          <div className='row'>
            <div className='col-md-4'>
              <img
                src={course.image_url}
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
                    {course.name}
                  </h1>
                  <small>By {`${tutor.firstName} ${tutor.lastName}`}</small>
                </div>
                <div className='mt-4'>
                  <p>{course.description}</p>
                </div>
                <div className='mt-5'>
                  <small className='btn btn-warning text-light'>
                    {course.price > 0
                      ? `N ${course.price}`
                      : (course.price = "FREE")}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            {course.price > 0 ? (
              <button
                className='btn btn-primary pull-right'
                onClick={handleBuy}
              >
                Buy Course
              </button>
            ) : (
              <button
                className='btn btn-primary pull-right'
                onClick={watchCourse}
              >
                Watch Course
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { BuyCourse };
