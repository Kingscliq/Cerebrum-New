import React from "react";
import { Footer } from "../../../widgets/Footer";
import { Header } from "../../../widgets/Header/Index";
import "./About.css";

function About() {
	return (
		<>
			<Header />
			<main className="faq-section">
				<section className="bg-primary">
					<div className="bg-danger">
						<h1 className="container py-2 h3"> About Cerebrum </h1>
					</div>
					<h1 className="py-5 font-weight-bold text-white container">Knowledge for everyone by everyone</h1>
				</section>
				<section className="py-5 bg-success">
					<div className="row container mx-auto">
						<h1 className="h2 col"> OUR MISSION </h1>
						<p className="col">Cerebrum is on a mission to democratize education.</p>
					</div>
				</section>
				<section>
					<p>
						Cerebrum offers quality online learning that is flexible and inclusive for tutors and learners, which gives them a feeling of
						self-accomplishment.
					</p>
				</section>
			</main>
			<Footer />
		</>
	);
}

export { About };
