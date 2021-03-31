/** @format */

import React, { useState, useEffect, useContext } from "react";
import { getAllCourses } from "../../../api";
import { Context } from "../../../Store";
import {
  landingPage1,
  landingPage2,
  landingPage3,
} from "../../../assets/images";
import { Button } from "../../../components/Button";
import { Footer } from "../../../widgets/Footer";
import { Header } from "../../../widgets/Header/Index";
import "./LandingPage.css";
import Aos from "aos";
import "aos/dist/aos.css";

function LandingPage() {
  const [allCourse, setAllCourse] = useState([]);
  const [state, setState] = useContext(Context);

  useEffect(() => {
    getAllCourses().then((res) => {
      setAllCourse(res.slice(0, 4));
      console.log(allCourse);
    });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Header />
      <main className='landing-page container pb-5'>
        <section className='landing-page-a row'>
          <div className='col-6 my-5'>
            <h1
              className='fw-bold my-3'
              data-aos='fade-zoom-in'
              data-aos-delay='300'
            >
              Knowledge <br /> <span>{state.description}</span>
            </h1>
            <p className='my-4'>
              Cerebrum offers quality online learning that is flexible and
              inclusive for tutors and learners, which gives them a feeling of
              self-accomplishment.{" "}
            </p>
            <Button
              className='btn btn-primary my-5 py-3 border-2'
              text='Earn as a tutor'
            />
            <Button
              className='btn btn-outline-primary my-5 py-3 border-2'
              text='Access content as a learner'
            />
          </div>
          <div className='col-6' data-aos='fade-left'>
            <img src={landingPage1} alt='landing Image' />
          </div>
        </section>
        <section className='landing-page-b d-flex justify-content-between my-5'>
          <div
            className='card w-25 p-4 text-center shadow-lg'
            data-aos='slide-right'
          >
            <h1>30k</h1>
            <p>Tutors</p>
          </div>
          <div
            className='card w-25 p-4 text-center shadow-lg'
            data-aos='slide-right'
          >
            <h1>100k</h1>
            <p>Learners</p>
          </div>
          <div
            className='card w-25 p-4 text-center shadow-lg'
            data-aos='slide-right'
          >
            <h1>500k</h1>
            <p>Courses</p>
          </div>
        </section>
        <section className='landing-page-c '>
          <div className='d-flex justify-content-between row'>
            <div className='col-6 align-self-center'>
              <h1 className='fw-bold my-3'>Meet Qualified Tutors</h1>
              <p className='mb-5'>
                Our tutors master their subject matter, exhibit first-class
                teaching skills, and possess a proven ability to connect with
                you. We and our tutors are truly passionate about helping our
                students succeed. It is what you can expect from our tutoring
                services.
              </p>
              <Button
                className='btn btn-primary py-3'
                text='Access content as a learner'
              />
            </div>
            <div className='col-6'>
              <div className='land-img-co-c' data-aos='fade-left'>
                <img src={landingPage2} alt='landing Image' />
              </div>
            </div>
          </div>
        </section>
        <section className='landing-page-d my-5'>
          <div className='d-flex justify-content-between row'>
            <div className='land-img-co-d col-6' data-aos='fade-right'>
              <img src={landingPage3} alt='landing Image' />
            </div>
            <div className='col-5 align-self-center mx-2'>
              <h1 className='fw-bold my-3'>Flexible Payment</h1>
              <p className='mb-5'>
                We check the identity of every tutor who registers with Cerebum
                and their content goes through various processes , tutors who
                are listed as verified undergo an extra layer of verification.
              </p>
              <Button className='btn btn-primary py-3' text='Earn as a tutor' />
            </div>
          </div>
        </section>
        <section className='landing-page-e my-4'>
          <h3>Trending Courses</h3>
          <div className='d-flex'>
            {allCourse.map((course) => (
              <div
                key={course._id}
                className='bg-white all-courses-div d-flex flex-column border m-2 position-relative'
              >
                <img
                  className='courses-img'
                  src={course.image_url}
                  width='100%'
                  height='75%'
                  alt='dispay'
                />

                <p className='badge position-absolute courses-price-badge p-2'>
                  {course.price.lifeTime > 0
                    ? `N ${course.price.lifeTime}`
                    : (course.price.lifeTime = "FREE")}
                </p>
                <div className='w-100'>
                  <div
                    className='bg-white rounded-circle courses-tutor-image-radius'
                    height='55px'
                    width='55px'
                  >
                    <img
                      className='rounded-circle'
                      src={
                        course.tutor_id !== undefined
                          ? course.tutor_id.image_url
                          : ""
                      }
                      height='45px'
                      width='45px'
                      alt='tutor pic'
                    />
                  </div>
                  <a
                    className='all-courses-link'
                    href={`/buycourse/?id=${course._id}`}
                  >
                    <p className='fw-bold signup-p mx-4 mt-3'>{course.name}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export { LandingPage };
