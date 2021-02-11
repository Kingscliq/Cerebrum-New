/** @format */

import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";

let url_string = window.location.href;
let url = new URL(url_string);

const BuyCourse = () => {
  const history = useHistory();
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({});
  const [tutor, setTutor] = useState({});
  const [courseId, setCourseId] = useState(url.searchParams.get("id"));
  const [buy, setBuy] = useState();

  const handleBuy = () => {
    const data = localStorage.getItem("userDetails");
    if (!data) {
      let url_string = window.location.href;
      let url = new URL(url_string);
      localStorage.setItem("current", url);
      // console.log(url);
      history.push(`/auth/login`);
    } else {
      // window.open(`/buycourse/${courseId}`, "_blank");
      history.push(`/user/course/paymentoption`);
    }
    // console.log("Course Bought");
  };
  const watchCourse = () => {
    const data = localStorage.getItem("userDetails");
    if (!data) {
      localStorage.setItem("current", url);
      console.log(url);
      history.push(`/auth/login`);
    } else {
      history.push(`/learner/viewcourse?id=${courseId}`);
    }
  };

  // const getCourse = () => {};
  useEffect(() => {
    axios
      .get(`https://cerebrum-v1.herokuapp.com/api/course/${courseId}`)
      .then((res) => {
        const courseDetail = res.data.data;

        localStorage.setItem("course", JSON.stringify(courseDetail));
        setCourse(courseDetail);
      })
      .catch((err) => console.log(err.response));
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userDetails"));
    if (!user) {
      history.push("/auth/login");
    } else {
      const user_id = user.data.uid;
      const data = {
        user_id: user_id,
        course_id: courseId,
      };
      axios
        .post(`https://cerebrum-v1.herokuapp.com/api/payment/confirm/`, data)
        .then((res) => {
          setBuy(false);
        })
        .catch((err) => {
          console.log(err.response.data.success);
          setBuy(true);
        });
      console.log(data);
    }
  }, []);

  // console.log(course);
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
                    {course.price.lifeTime > 0
                      ? `N ${course.price.lifeTime}`
                      : (course.price.lifeTime = "FREE")}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            {course.price.lifeTime > 0 && buy ? (
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
