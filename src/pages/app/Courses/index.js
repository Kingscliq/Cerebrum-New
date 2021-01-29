import React from "react";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";
import "./Courses.css";

function Courses() {
	return (
		<>
			<DashboardHeader />
			<main className="container my-3 d-flex flex-row justify-content-between">
				<aside className="col-3">
					<div className="bg-white mb-2 p-4 rounded">
						<p className="signup-p"> All Courses </p>
						<p className="signup-p"> Recommended Courses </p>
					</div>
					<div className="bg-white p-4 rounded">
						<ul className="courses-list">
							<h1 className="signup-p fw-bold"> Build</h1> <hr />
							<li className="signup-p pb-3"> UI/UX Design </li>
							<li className="signup-p pb-3"> Web Development </li>
							<li className="signup-p pb-3"> Fine Art </li>
							<li className="signup-p pb-3"> Graphics Design </li>
							<li className="signup-p pb-3"> Illustration </li>
							<li className="signup-p pb-3"> Music </li>
							<li className="signup-p pb-3"> Creative Writing </li>
							<li className="signup-p pb-3"> Photography </li>
						</ul>
						<ul className="courses-list">
							<h1 className="signup-p fw-bold"> Create </h1> <hr />
							<li className="signup-p pb-3"> Business Analytics </li>
							<li className="signup-p pb-3"> Freelance and Entrepreneurship </li>
							<li className="signup-p pb-3"> Market </li>
							<li className="signup-p pb-3"> Leadership and Managemet </li>
						</ul>
						<ul className="courses-list">
							<h1 className="signup-p fw-bold"> Flourish </h1> <hr />
							<li className="signup-p pb-3"> Lifestyle </li>
							<li className="signup-p pb-3"> Productivity </li>
						</ul>
					</div>
				</aside>
				<section className="col-8">
					<section>
						<article className="d-flex flex-row justify-content-between mb-3">
							<div className="courses-dummy-image col-4 m-2 d-flex border">
								<p className="fw-bold signup-p align-bottom align-self-end px-4"> The Story of Art </p>
							</div>
							<div className="courses-dummy-image col-4 m-2 d-flex border">
								<p className="fw-bold signup-p align-bottom align-self-end px-4"> The Story of Art </p>
							</div>
							<div className="courses-dummy-image col-4 m-2 d-flex border">
								<p className="fw-bold signup-p align-bottom align-self-end px-4"> The Story of Art </p>
							</div>
						</article>
					</section>
				</section>
			</main>
			<Footer />
		</>
	);
}

export { Courses };
