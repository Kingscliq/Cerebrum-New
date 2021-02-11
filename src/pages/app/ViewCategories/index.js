import React, { useState, useEffect } from "react";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";
import { getAllCategories } from "../../../api";
import { BiMenuAltLeft } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import "../Courses/Courses.css";
import axios from "axios";

function ViewCategories() {
	const [allCategories, setAllCategories] = useState([]);
	const [seeCourses, setSeeCourses] = useState([]);
	const [toggle, setToggle] = useState({ clicked: false });
	const [currentCategory, setCurrentCategory] = useState("");

	useEffect(() => {
		getAllCategories(allCategories, setAllCategories);
		setAllCategories(allCategories);
	}, []);

	const getCoursesInCategory = async (e) => {
		let targetCategory = e.target.innerText;
		axios(`https://cerebrum-v1.herokuapp.com/api/category/course/${targetCategory}`).then((res) => {
			setSeeCourses(res.data.data);
			console.log(seeCourses);
		});
		setCurrentCategory(targetCategory);
	};

	const handleClick = () => {
		setToggle({ clicked: !toggle.clicked });
	};
	// console.log(allCourses);

	return (
		<>
			<DashboardHeader />
			<main className="container my-3 d-flex flex-row justify-content-between vh-100">
				<div className="menu-icon m-2 h1" onClick={handleClick}>
					{toggle.clicked ? <VscChromeClose /> : <BiMenuAltLeft />}
				</div>
				<aside className="col-lg-3 col-md-4">
					<div>
						<div
							className={
								toggle.clicked
									? "all-categories-active bg-white mb-2 p-4 rounded animate__animated animate__slideInLeft"
									: `all-categories bg-white mb-2 p-4 rounded animate__animated animate__slideInLeft`
							}>
							<Link to={`/courses`} className="text-decoration-none">
								<p className="signup-p all-courses-category-list"> All Courses </p>
							</Link>

							<p className="signup-p all-courses-category-list"> Recommended Courses </p>
						</div>
						<div
							className={
								toggle.clicked
									? "all-categories-active bg-white p-4 rounded animate__animated animate__slideInLeft"
									: "all-categories bg-white p-4 rounded animate__animated animate__slideInLeft"
							}>
							<ul className="courses-list">
								<h1 className="signup-p fw-bold"> Categories </h1> <hr />
								{allCategories.map((category) => (
									<li
										onClick={getCoursesInCategory}
										key={category._id}
										className={`signup-p pb-3 all-courses-category-list ${toggle.clicked ? "bg-success" : ""}`}>
										{category.name}
									</li>
								))}
							</ul>
						</div>
					</div>
				</aside>
				<section className="col-lg-8 col-md-7">
					<section>
						<h1 className="h4 fw-700 animate__animated animate__zoomIn">{currentCategory}</h1>

						<article className={toggle.clicked ? `d-none` : "col-12 d-flex flex-row flex-wrap mb-3"}>
							{seeCourses.length === 0 ? (
								<p> This category is empty, check another </p>
							) : (
								seeCourses.map((course) => (
									<div
										key={course._id}
										className="bg-white all-courses-div d-flex flex-column border m-2 position-relative animate__animated animate__zoomIn">
										<img className="courses-img" src={course.image_url} width="100%" height="75%" alt="dispay" />

										<p className="badge position-absolute courses-price-badge p-2">
											{course.price.lifeTime > 0 ? `N ${course.price.lifeTime}` : (course.price.lifeTime = "FREE")}
										</p>
										<div className="w-100">
											<div className="bg-white rounded-circle courses-tutor-image-radius" height="55px" width="55px">
												<img
													className="rounded-circle"
													src={course.tutor_id !== undefined ? course.tutor_id.image_url : ""}
													height="45px"
													width="45px"
													alt="tutor pic"
												/>
											</div>
											<a className="all-courses-link" href={`/buycourse/?id=${course._id}`}>
												<p className="fw-bold signup-p mx-4 my-3">{course.name}</p>
											</a>
										</div>
									</div>
								))
							)}
						</article>
					</section>
				</section>
			</main>
			<Footer />
		</>
	);
}

export { ViewCategories };
