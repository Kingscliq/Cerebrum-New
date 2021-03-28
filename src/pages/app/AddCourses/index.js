/** @format */

import React, { useState, useEffect } from "react";
import { AddCourseInput } from "../../../components/AddCourseInput";
import axios from "axios";
import { IconContext } from "react-icons";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";
import "./AddCourses.css";
import { Button } from "../../../components/Button";
import { getCategories } from "../../../api";
import { dashboardImage } from "../../../assets/images";
import { Loader } from "../../../components/Loader";

function AddCourses() {
  const [toggle, setToggle] = useState({ one: true, two: false, three: false });

  const [categories, setCategories] = useState([]);

  const [courseImage, setCourseImage] = useState("");

  const [moduleMessage, setModuleMessage] = useState(false);

  const [lessonMessage, setLessonMessage] = useState(false);

  const [loading, setLoading] = useState(false);

  const [loadingBtn, setLoadingBtn] = useState(false);

  const [form1, setForm1] = useState({
    tutor_id: JSON.parse(localStorage.getItem("userDetails")).data.uid,
    name: "",
    description: "",
    price: "",
    category: "",
    img: "",
  });

  const [form2, setForm2] = useState({
    course_id: "",
    name: "",
  });

  const [form3, setForm3] = useState({
    course_id: "",
    module_id: "",
    name: "",
    img: "",
    description: "",
  });

  const handleClick = (event) => {
    event.preventDefault();
    const name = event.target.className.baseVal || event.target.name;
    setToggle({ ...toggle, [name]: !toggle[name] });
  };

  const handleChange = (event) => {
    if (event.target.files) {
      let currentImg = event.target.name;
      setForm1({ ...form1, [currentImg]: event.target.files[0] });
    } else {
      let currentInput = event.target.name;
      setForm1({ ...form1, [currentInput]: event.target.value });
    }
  };

  const handleChange2 = (event) => {
    let currentInput = event.target.name;
    setForm2({ ...form2, [currentInput]: event.target.value });
  };

  const handleChange3 = (event) => {
    if (event.target.files) {
      let currentVideo = event.target.name;
      setForm3({ ...form3, [currentVideo]: event.target.files[0] });
    } else {
      let currentInput = event.target.name;
      setForm3({ ...form3, [currentInput]: event.target.value });
    }
  };
  useEffect(() => getCategories(setCategories), []);

  return (
    <>
      <DashboardHeader />
      <main className="addcourse-page container">
        <h1>Add Course</h1>
        <section className="card shadow py-5 px-4 mb-5">
          <div className="row col-12">
            <div className="col-sm-12 col-md-6">
              <div className="addcourse-a">
                <section>
                  <div className="courses-form-header">
                    <h2 className="py-4">Course Details</h2>
                    <button name="one" onClick={handleClick}>
                      <IconContext.Provider
                        value={{
                          className: "one",
                        }}
                      >
                        {toggle.one ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </IconContext.Provider>
                    </button>
                  </div>
                  {toggle["one"] && (
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setLoading(true);
                        setLoadingBtn(true);
                        let formData = new FormData();
                        formData.append("img", form1.img);
                        formData.append("description", form1.description);
                        formData.append("price", form1.price);
                        formData.append("category", form1.category);
                        formData.append("name", form1.name);
                        formData.append("tutor_id", form1.tutor_id);
                        console.log(formData);
                        axios
                          .post(
                            "https://cerebrum-v1.herokuapp.com/api/tutor/course/create",
                            formData,
                            {
                              headers: {
                                "Content-Type": "multipart/form-data",
                              },
                            }
                          )
                          .then((res) => {
                            console.log(res.data.data);
                            setCourseImage(res.data.data.image_url);
                            setForm2({
                              ...form2,
                              course_id: res.data.data._id,
                            });
                            setLoadingBtn(false);
                            setLoading(true);
                          })
                          .catch((err) => console.log(err.response));
                      }}
                      encType="multipart/form-data"
                    >
                      <label>Name of Course</label>
                      <AddCourseInput
                        placeholder="Enter course name"
                        name="name"
                        onChange={handleChange}
                        disabled={loading}
                      />
                      <label>Course Description</label>
                      <textarea
                        className="form-control mb-3"
                        name="description"
                        onChange={handleChange}
                        placeholder="Enter course description..."
                        rows="7"
                        disabled={loading}
                      ></textarea>
                      <label>Category</label>
                      <select
                        name="category"
                        onChange={handleChange}
                        className="form-select mb-3"
                        aria-label="Default select example"
                        disabled={loading}
                      >
                        <option>Select course category</option>
                        {categories.map((item) => (
                          <option key={item._id} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <label>Cover Image</label>
                      <AddCourseInput
                        placeholder="Upload Image"
                        type="file"
                        name="img"
                        onChange={handleChange}
                        disabled={loading}
                      />
                      <label>Price</label>
                      <AddCourseInput
                        type="text"
                        placeholder="Enter course price"
                        name="price"
                        onChange={handleChange}
                        disabled={loading}
                      />
                      {courseImage && (
                        <div className="alert-message my-2 py-3 alert alert-success">
                          {`Your course "${form1.name}" has been successfully created.
                           Kindly create modules and lessons for this course.`}
                        </div>
                      )}
                      <Button
                        className="btn btn-primary"
                        text="Save"
                        loadingIcon={loadingBtn && <Loader />}
                        onClick={(e) => {
                          e.preventDefault();
                          const userId = localStorage.getItem("userDetails")
                            .data.uid;
                          console.log(userId);
                        }}
                      />
                    </form>
                  )}
                </section>
                <section>
                  <div className="courses-form-header">
                    <h2 className="py-4">Module</h2>
                    <button name="two" onClick={handleClick}>
                      <IconContext.Provider
                        value={{
                          className: "two",
                        }}
                      >
                        {toggle.two ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </IconContext.Provider>
                    </button>
                  </div>
                  {toggle["two"] && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setLoadingBtn(true);
                        setLoading(true);
                        console.log(form2);
                        axios
                          .post(
                            "https://cerebrum-v1.herokuapp.com/api/tutor/module/create",
                            form2
                          )
                          .then((res) => {
                            setForm3({
                              ...form3,
                              course_id: form2.course_id,
                              module_id: res.data.data._id,
                            });

                            setLoadingBtn(false);
                            setLoading(true);
                            setModuleMessage(true);
                          })
                          .catch((err) => console.log(form2));
                      }}
                    >
                      <label>Module</label>
                      <AddCourseInput
                        name="name"
                        type="text"
                        placeholder="Enter module name"
                        onChange={handleChange2}
                        disabled={loadingBtn}
                      />
                      {moduleMessage && (
                        <div className="alert-message my-2 py-3 alert alert-success">
                          {`This module "${form2.name}" has been successfully created.
                           Kindly create lessons for this module.`}
                        </div>
                      )}
                      <Button
                        className="btn btn-primary"
                        loadingIcon={loadingBtn && <Loader />}
                        text="Save"
                      />
                    </form>
                  )}
                </section>
                <section>
                  <div className="courses-form-header">
                    <h2 className="py-4">Lesson</h2>
                    <button name="three" onClick={handleClick}>
                      <IconContext.Provider
                        value={{
                          className: "three",
                        }}
                      >
                        {toggle.three ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </IconContext.Provider>
                    </button>
                  </div>
                  {toggle["three"] && (
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setLoading(true);
                        setLoadingBtn(true);
                        let formData = new FormData();
                        formData.append("img", form3.img);
                        formData.append("description", form3.description);
                        formData.append("name", form3.name);
                        formData.append("course_id", form3.course_id);
                        formData.append("module_id", form3.module_id);
                        console.log(formData);
                        axios
                          .post(
                            "https://cerebrum-v1.herokuapp.com/api/tutor/lesson/create",
                            formData,
                            {
                              headers: {
                                "Content-Type": "multipart/form-data",
                              },
                            }
                          )
                          .then((res) => {
                            console.log(res);
                            setLoadingBtn(false);
                            setLoading(true);
                            setLessonMessage(true);
                          })
                          .catch((err) => console.log(form1, form2, form3));
                      }}
                      encType="multipart/form-data"
                    >
                      <label>Lesson Name</label>
                      <AddCourseInput
                        placeholder="Enter lesson name"
                        type="text"
                        name="name"
                        disabled={loadingBtn}
                        value={form3.name}
                        onChange={handleChange3}
                      />
                      <label>Lesson Video</label>
                      <AddCourseInput
                        placeholder="Upload Video"
                        type="file"
                        name="img"
                        disabled={loadingBtn}
                        onChange={handleChange3}
                      />
                      <label>Lesson Description</label>
                      <textarea
                        className="form-control mb-3"
                        placeholder="Enter lesson description"
                        rows="7"
                        name="description"
                        loading={loadingBtn}
                        value={form3.description}
                        onChange={handleChange3}
                      ></textarea>
                      {lessonMessage && (
                        <div className="alert-message my-2 py-3 alert alert-success">
                          {`This lesson "${form3.name}" has been successfully added to this course.
                           You can add more lessons before publishing course.`}
                        </div>
                      )}
                      <Button
                        className="btn btn-primary"
                        text="Publish Course"
                        loadingIcon={loadingBtn && <Loader />}
                      />
                    </form>
                  )}
                </section>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="mt-4 addcourse-b col-5">
                <img src={courseImage || dashboardImage} alt="Empty" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export { AddCourses };
