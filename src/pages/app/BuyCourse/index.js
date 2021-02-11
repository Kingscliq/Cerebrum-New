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
  const user = JSON.parse(localStorage.getItem("userDetails"));
  
  console.log(user);
  if (!user) {
	  let currentUrl = localStorage.setItem('current', url)
    history.push("/auth/login");
  }
  // const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({});
  const [tutorId, setTutorId] = useState({});
  const [courseId, setCourseId] = useState(`${url.searchParams.get("id")}`);
  const [buy, setBuy] = useState();
  const [priceId, setPriceId] = useState({});

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

  const getCourse = () => {};

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userDetails"));
    console.log(user);
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
        console.log(err.response);
        setBuy(true);
      });
    // console.log(data);
  }, []);

  useEffect(() => {
    axios
      .get(`https://cerebrum-v1.herokuapp.com/api/course/${courseId}`)
      .then((res) => {
        const courseDetail = res.data.data;
        courseDetail.map((lesson) => {
          console.log(lesson);
          localStorage.setItem("courses", JSON.stringify(courseDetail));
          setCourse(lesson);
          setTutorId(lesson.tutor_id);
          setPriceId(lesson.price);
        });

        const courseStore = JSON.parse(localStorage.getItem("course"));
      })

      .catch((err) => console.log(err.response));
  }, []);
  console.log(course);
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
                  <small>By {`${tutorId.firstName} ${tutorId.lastName}`}</small>
                </div>
                <div className='mt-4'>
                  <p>{course.description}</p>
                </div>
                <div className='mt-5'>
                  <small className='btn btn-warning text-light'>
                    {priceId.lifeTime > 0
                      ? `N ${priceId.lifeTime}`
                      : (priceId.lifeTime = "FREE")}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            {priceId.lifeTime > 0 && buy ? (
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
