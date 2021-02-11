import React, { useState, useEffect } from "react";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";
import { getAllCourses, getAllCategories } from "../../../api";
import { BiMenuAltLeft } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import "./Courses.css";
import { Loader } from "../../../components/Loader";

function Courses() {
	const [allCourses, setAllCourses] = useState([]);
	const [allCategories, setAllCategories] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getAllCourses().then((dataGotten) => {
			setAllCourses(dataGotten);
			console.log(dataGotten[0].tutor_id);
		});

		getAllCategories(allCategories, setAllCategories);
		setAllCategories(allCategories);
		setTimeout(() => setLoading(false), 5000);
	}, []);

	const [toggle, setToggle] = useState({ clicked: false });

	const handleClick = () => {
		setToggle({ clicked: !toggle.clicked });
	};
	console.log(allCourses);

	if (loading) {
		return (
			<>
				<DashboardHeader />
				<div className="special-loader">
					<Loader />
				</div>
			</>
		);
	}
	return (
		<>
			<DashboardHeader />
			<main className="container my-3 d-flex flex-row justify-content-between">
				<div className="menu-icon m-2 h1" onClick={handleClick}>
					{toggle.clicked ? <VscChromeClose /> : <BiMenuAltLeft />}
				</div>
				<aside className="col-lg-3 col-md-4">
					<div
						className={
							toggle.clicked
								? "all-categories-active bg-white mb-2 p-4 rounded animate__animated animate__slideInLeft"
								: `all-categories bg-white mb-2 p-4 rounded animate__animated animate__slideInLeft`
						}>
						<p className="signup-p all-courses-category-list"> All Courses </p>
						<p className="signup-p all-courses-category-list"> Recommended Courses </p>
					</div>
					<div
						className={
							toggle.clicked
								? "all-categories-active bg-white p-4 rounded animate__animated animate__slideInLeft"
								: "all-categories bg-white p-4 rounded animate__animated animate__slideInLeft"
						}>
						<ul className="courses-list">
							<h1 className="signup-p fw-bold animate__animated animate__slideInLeft"> Categories </h1> <hr />
							{allCategories.map((category) => (
								<li key={category._id} className="signup-p pb-3">
									<Link to={`/course/categories`} className="text-decoration-none all-courses-category-list">
										{category.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</aside>
				<section className="col-lg-8 col-md-7">
					<section>
						<h1 className="h4 fw-700 animate__animated animate__zoomIn"> All Courses</h1>
						<article className={toggle.clicked ? `d-none` : "col-12 d-flex flex-row flex-wrap mb-3"}>
							{allCourses.map((course) => (
								<div
									key={course._id}
									className="bg-white all-courses-div d-flex flex-column border m-2 position-relative animate__animated animate__zoomIn">
									<img className="courses-img" src={course.image_url} width="100%" height="75%" alt="dispay" />

									<p className="badge position-absolute courses-price-badge p-2">
										{course.price.lifeTime  > 0 ? `N ${course.price.lifeTime }` : (course.price.lifeTime  = "FREE")}
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
											<p className="fw-bold signup-p mx-4 mt-3">{course.name}</p>
										</a>
									</div>
								</div>
							))}
						</article>
					</section>
				</section>
			</main>
			<Footer />
		</>
	);
}

export { Courses };
