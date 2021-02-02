import React from "react";
import { useState, useEffect } from "react";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";
import { getAllCourses, getAllCategories } from "../../../api";
import "./Courses.css";

function Courses() {
	const [allCourses, setAllCourses] = useState([]);
	const [allCategories, setAllCategories] = useState([]);

	useEffect(() => {
		getAllCourses(allCourses, setAllCourses);
		setAllCourses(allCourses);

		getAllCategories(allCategories, setAllCategories);
		setAllCategories(allCategories);
	}, []);

	const handleClick = () => {
		alert(`you cicke`);
	};

	console.log(allCourses);

	return (
		<>
			<DashboardHeader />
			<main className="container my-3 d-flex flex-row justify-content-between">
				<aside className="col-3">
					<div className="bg-white mb-2 p-4 rounded">
						<p className="signup-p all-courses-category-list"> All Courses </p>
						<p className="signup-p all-courses-category-list"> Recommended Courses </p>
					</div>
					<div className="bg-white p-4 rounded">
						<ul className="courses-list">
							<h1 className="signup-p fw-bold"> Categories </h1> <hr />
							{allCategories.map((category) => (
								<li key={category._id} className="signup-p pb-3 all-courses-category-list">
									{category.name}
								</li>
							))}
						</ul>
					</div>
				</aside>
				<section className="col-8">
					<section>
						<article className="col-12 d-flex flex-row flex-wrap mb-3">
							{allCourses.map((course) => (
								<div key={course._id} className="bg-white all-courses-div d-flex flex-column border m-2">
									<img className="courses-img" src={course.image_url} width="100%" height="70%" alt="dispay" />

									<p className="badge position-absolute courses-price-badge">{`N${course.price}`}</p>
									<div className="w-100">
										<a className="all-courses-link" href={`/watchcourse/?id=${course._id}`}>
											<p className="fw-bold signup-p m-4">{course.name}</p>
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
