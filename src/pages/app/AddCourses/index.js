import React, { useState, useEffect } from "react";
import { AddCourseInput } from "../../../components/AddCourseInput";
import { IconContext } from "react-icons";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";
import "./AddCourses.css";
import { Button } from "../../../components/Button";
import { getCategories } from "../../../api";

function AddCourses() {
  const [toggle, setToggle] = useState({ one: true, two: false, three: false });

  const [categories, setCategories] = useState([]);

  const [form1, setForm1] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    img: "",
  });

  const [form2, setForm2] = useState({
    module: "",
  });

  const [form3, setForm3] = useState({
    lessonName: "",
    lessonVideo: "",
    lessonDescription: "",
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
      let currentImg = event.target.name;
      setForm1({ ...form3, [currentImg]: event.target.files[0] });
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
                    <form>
                      <label>Name of Course</label>
                      <AddCourseInput
                        placeholder="Enter course name"
                        name="name"
                        onChange={handleChange}
                      />
                      <label>Course Description</label>
                      <textarea
                        className="form-control mb-3"
                        name="description"
                        onChange={handleChange}
                        placeholder="Enter course description..."
                        rows="7"
                      ></textarea>
                      <label>Category</label>
                      <select
                        name="category"
                        onChange={handleChange}
                        className="form-select mb-3"
                        aria-label="Default select example"
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
                      />
                      <label>Price</label>
                      <AddCourseInput
                        type="text"
                        placeholder="Enter course price"
                        name="price"
                        onChange={handleChange}
                      />
                      <Button className="btn btn-primary" text="Save" />
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
                    <form>
                      <label>Module</label>
                      <AddCourseInput
                        name="module"
                        type="text"
                        placeholder="Enter module name"
                        onChange={handleChange2}
                      />
                      <Button className="btn btn-primary" text="Save" />
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
                    <form>
                      <label>Lesson Name</label>
                      <AddCourseInput
                        placeholder="Enter lesson name"
                        type="text"
                        name="lessonName"
                        onChange={handleChange3}
                      />
                      <label>Lesson Video</label>
                      <AddCourseInput
                        placeholder="Upload Video"
                        type="file"
                        name="lessonVideo"
                        onChange={handleChange3}
                      />
                      <label>Lesson Description</label>
                      <textarea
                        className="form-control mb-3"
                        placeholder="Enter lesson description"
                        rows="7"
                        name="lessonDescription"
                        onChange={handleChange3}
                      ></textarea>
                      <Button
                        className="btn btn-primary"
                        text="Publish Course"
                      />
                    </form>
                  )}
                </section>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="mt-4 addcourse-b col-5 d-flex flex-column justify-content-center align-items-center">
                <span>
                  <AiOutlinePlusCircle />
                </span>
                <p>Add Cover Image</p>
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
