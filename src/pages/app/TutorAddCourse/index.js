import React from "react";
import { Button } from "../../../components/Button";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";
import "./TutorAddCourse.css";

function TutorAddCourse() {
	return (
		<>
			<DashboardHeader />
			<main className="container my-5 d-flex flex-column">
				<section className="col-12">
					<article className="d-flex justify-content-between mb-3">
						<div className="courses-dummy-image col-4 m-2 d-flex border">
							<p className="fw-bold signup-p align-bottom align-self-end px-4"> The Story of Art </p>
						</div>
					</article>
				</section>

				<div className="align-self-end mt-5">
					<Button className={"btn btn-primary"} text={"Add Course"} />
				</div>
			</main>
			<Footer />
		</>
	);
}

export { TutorAddCourse };
