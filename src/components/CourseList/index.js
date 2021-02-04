/** @format */

import React from "react";
import { dashAvater } from "../../assets/images";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./CourseList.css";
const CourseList = ({ courseName, courseImg, courseDesc }) => {
  return (
    <div>
      <section className='courselist m-2'>
        <article className='card'>
          <div className='container d-flex align-items-center justify-content-between'>
            <div className='col-md-11 d-flex align-item-start'>
              <div className='row'>
                <div className='col-2'>
                  <img src={courseImg} alt='' />
                </div>
                <div className='col-10'>
                  <h5 className='p-0 m-0 font-bold'>{courseName}</h5>
                  {courseDesc}
                  {/* <p>30 courses+</p> */}
                </div>
              </div>
            </div>

            <div className='col-md-1' className='text-primary'>
              <BsThreeDotsVertical />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export { CourseList };
