/** @format */

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player/lazy";
import { ViewCourseElement } from "../../../components/ViewCourseElement";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";
import "./ViewCourse.css";
import { Comments } from "../../../components/Comments";
import CommentList from "../../../components/CommentList";

const url_string = window.location.href;
const url = new URL(url_string);

function ViewCourse() {
  const history = useHistory();
  const [currentVideo, setCurrentVideo] = useState("");
  const [sectionToggle, setSectionToggle] = useState("About Course");
  const [courseId, setCourseId] = useState(url.searchParams.get("id"));
  const [watchCourse, setWatchCourse] = useState();
  const [course, setCourse] = useState([]);
  const [courseDesc, setCourseDesc] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [tutor, setTutor] = useState("");
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    let url = e.target.getAttribute("data-video-url");
    setCurrentVideo(url);
  };
  // Handle Comment Change
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  // Handle Comment Submit
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // addComment(comment, setComment, course_id, setLoading, loading);
    setComments((comments) => [...comments, comment]);
    console.log(comments);
  };

  // Handle Toggle
  const handleToggle = (e) => {
    e.preventDefault();
    let textValue = e.target.innerText;
    setSectionToggle(textValue);
  };

  useEffect(() => {
    axios(`https://cerebrum-v1.herokuapp.com/api/course/view/${courseId}`)
      .then((res) => {
        console.log(res.data);
        setCourse(res.data.data);
        setCurrentVideo(res.data.data[0].video_url);
        setCourseDesc(res.data.data[0].course_id.description);
        setCourseTitle(res.data.data[0].course_id.name);
        setTutor(
          `${res.data.data[0].course_id.tutor_id.firstName} ${res.data.data[0].course_id.tutor_id.lastName}`
        );
      })
      .catch((err) => console.log(err.response));
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userDetails"));
    const user_id = user.data.uid;
    const data = {
      user_id: user_id,
      course_id: courseId,
    };

    console.log(data);
    axios
      .post(`https://cerebrum-v1.herokuapp.com/api/payment/confirm/`, data)
      .then((res) => {
        if (res.data.success === true) {
          console.log(" you are qualified");
          setWatchCourse(true);
        }
      })
      .catch((err) => {
        console.log(err.response.data.success);
        history.push(`/buycourse?id=${courseId}`);
        setWatchCourse(false);
      });
  }, []);

  return (
    <>
      <DashboardHeader />
      <main className='viewcourse-section container my-5'>
        <h1>{courseTitle}</h1>
        <p>{tutor}</p>
        <section className='row'>
          <section className='col-7'>
            <div>
              <ReactPlayer url={currentVideo} controls />
            </div>
            <div className='toggle-container my-3'>
              <div className='toggle-btns'>
                <button
                  onClick={handleToggle}
                  className={`w-50 py-3 ${
                    sectionToggle === "About Course" ? "toggle-btn-active" : ""
                  }`}
                >
                  About Course
                </button>
                <button
                  onClick={handleToggle}
                  className={`w-50 py-3 ${
                    sectionToggle === "Review" ? "toggle-btn-active" : ""
                  }`}
                >
                  Review
                </button>
              </div>
              <div className='toggle-items p-3'>
                {sectionToggle === "About Course" ? (
                  <>
                    <h2 className='mt-3'>About This Course</h2>
                    <p>{courseDesc}</p>
                  </>
                ) : (
                  <>
                    <textarea
                      className='mt-3 w-100'
                      placeholder='Drop your review here'
                      rows='10'
                      cols='50'
                    ></textarea>

                    <div className='review-btns d-flex justify-content-end my-3'>
                      <button className='btn btn-outline-primary'>
                        Cancel
                      </button>
                      <button className='btn btn-primary'>Send</button>
                    </div>

                    <Comments
                      comments={comments}
                      comment={comment}
                      handleCommentSubmit={handleCommentSubmit}
                      handleCommentChange={handleCommentChange}
                    />
                  </>
                )}
              </div>
            </div>
          </section>

          <aside className='col-5'>
            {course.map((lesson) => {
              return (
                <ViewCourseElement
                  data-video-url={lesson.video_url}
                  courseName={lesson.course_id.name}
                  moduleName={lesson.module_id.name}
                  lessonName={lesson.name}
                  onClick={handleClick}
                />
              );
            })}
          </aside>
        </section>
        <h1>Comments</h1>
        <CommentList comments={comments} />
      </main>

      <Footer />
    </>
  );
}

export { ViewCourse };
