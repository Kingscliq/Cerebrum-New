import React, { useState } from "react";
import { Input } from "../../../components/Input";
import { IconContext } from "react-icons";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";
import "./AddCourses.css";
import { Button } from "../../../components/Button";
function AddCourses() {
  const [toggle, setToggle] = useState({ one: true, two: false, three: false });

  const handleClick = (event) => {
    event.preventDefault();
    const name = event.target.className.baseVal || event.target.name;
    setToggle({ ...toggle, [name]: !toggle[name] });
  };
  return (
    <>
      <DashboardHeader />
      <main className="addcourse-page container">
        <h1>Add Course</h1>
        <section className="card shadow py-5 px-4 mb-5">
          <div className="row col-12">
            <div className="col-6">
              <div className="addcourse-a">
                <form>
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
                    <div>
                      <label>Name of Course</label>
                      <Input placeholder="Type here" />
                      <label>Course Description</label>
                      <Input placeholder="Type here" />
                      <label>Category</label>
                      <Input placeholder="Type here" />
                      <label>Price</label>
                      <Input placeholder="Type here" />
                      <Button className="btn btn-primary" text="Save" />
                    </div>
                  )}
                </form>
                <form>
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
                    <div>
                      <label>Module 1</label>
                      <Input placeholder="Type here" />
                      <Button className="btn btn-primary" text="Save" />
                    </div>
                  )}
                </form>
                <form>
                  <div className="courses-form-header">
                    <h2 className="py-4">Lessons</h2>
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
                    <div>
                      <label>Lesson Name</label>
                      <Input />
                      <label>Lesson Video</label>
                      <Input />
                      <label>Lesson Description</label>
                      <Input placeholder="Type here" />
                      <Button className="btn btn-primary" text="Publish" />
                    </div>
                  )}
                </form>
              </div>
            </div>
            <div className="col-6">
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
