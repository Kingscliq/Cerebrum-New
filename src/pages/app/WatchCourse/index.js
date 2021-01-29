import React from "react";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { ActiveCircle } from "../../../assets/images";
import { Button } from "../../../components/Button";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";
import { getCourses } from "../../../api";
import "./WatchCourse.css";

function WatchCourse() {
	const [numToggle, setNumToggle] = useState(1);
	const [courses, setCourses] = useState([]);
	const [currentlyPlaying, setcurrentlyPlaying] = useState("");

	const handleClick = (e) => {
		e.preventDefault();
		let targetText = e.target.innerText;
		targetText === "Review" ? setNumToggle(1) : setNumToggle(0);
		console.log(targetText);
	};

	useEffect(() => {
		getCourses(courses, setCourses);
		// setCourses(courses);
	}, []);

	// console.log(courses);

	const handleCurrentlyPlaying = (e) => {
		const key = e.target.key;
		key === courses._id ? (
			console.log(courses)
		) : (
			<div className="main-view-img d-flex justify-content-center align-items-center">
				<ReactPlayer
					className="react-player"
					url={`https://res.cloudinary.com/codeangelic/video/upload/v1611738487/cerebrum/lessons/ce7tmefwhlbaxc0udku0.mp4`}
					playing={true}
					controls={true}
					width="100%"
					height="100%"
				/>
			</div>
		);
	};

	return (
		<>
			<DashboardHeader />
			<main className="container pb-5">
				<h1 className="fw-bold"> The Story of Art </h1>
				<p> by Lil Kim </p>
				<section className="d-lg-flex flex-lg-row flex-md-column flex-sm-column justify-content-between">
					<section className="col-lg-7 col-md-12 col-sm-12">
						<div className="main-view-img d-flex justify-content-center align-items-center">
							<ReactPlayer
								className="react-player"
								url={`https://res.cloudinary.com/codeangelic/video/upload/v1611738487/cerebrum/lessons/ce7tmefwhlbaxc0udku0.mp4`}
								playing={true}
								controls={true}
								width="100%"
								height="100%"
							/>
						</div>

						<div className="w-100 shadow-lg">
							<div className="shadow bg-white rounded d-flex flex-row w-100 mt-2 mb-1">
								<Button
									className={`btn w-50 text-center p-3 ${numToggle === 0 ? "add-border-bottom" : ""}`}
									text="About Course"
									handleClick={handleClick}
								/>

								<Button
									className={`btn w-50 text-center p-3 ${numToggle === 1 ? "add-border-bottom" : ""}`}
									text="Review"
									handleClick={handleClick}
								/>
							</div>

							<div>
								{numToggle === 1 ? (
									<form className="d-flex flex-column watchcourse-form">
										<textarea className="mt-3 mb-3 rounded watchcourse-textarea p-2" placeholder="Type here" rows="10" />
										<div className="mb-5 d-flex justify-content-end">
											<div className="d-inline-block m-1">
												<button className="btn watchcourse-cancel-btn">Cancel</button>
											</div>

											<div className="d-inline-block m-1">
												<button className="btn watchcourse-send-btn">Send</button>
											</div>
										</div>
									</form>
								) : (
									<div className="p-4">
										<h1 className="h5 pb-2 fw-bold">About This Course</h1>

										<p className="signup-p">
											Looking to Learn Product Design, but dont know where to start? Get to know the basic principles of Design in this fun and
											comprehensive course. <br />
											<br />
											Join Osita Ikeme, an illustrator and a Product Design known for his iconic design style and analog approach to design thinking,
											for an introduction to Product design that goes beyond creating beautiful designs and walk cycles to inspire the design in you.
											<br />
											<br />
											Osita’s holistic approach to design will help you understand the foundational principles of effective design in addition to the
											technical skills every designer needs to know. From understanding contrast and emphasis to an organized design process, you’ll
											follow along with every step of Osita’s tried and true process, creating a dancing character as you go. <br />
											<br />
										</p>
									</div>
								)}
							</div>
						</div>
					</section>

					<section className="m-sm-0 col-lg-4 col-md-12 col-sm-12 p-1 shadow-lg watchcourse-aside overflow-auto">
						<aside className="my-3">
							{courses.map((lesson) => (
								<div
									onClick={handleCurrentlyPlaying}
									key={lesson._id}
									className="lessons-hover d-flex justify-content-between align-items-center px-3 py-4">
									<div className="mini-view-img">
										<ReactPlayer className="react-player mini-view-img" url={lesson.video_url} width="100%" height="100%" />
									</div>

									<p className="signup-p col-4">
										<strong> {lesson.name} </strong>
										<br /> {lesson.description}
									</p>
									<img src={ActiveCircle} className="circle" alt="circle" />
								</div>
							))}
						</aside>
					</section>
				</section>
			</main>
			<Footer />
		</>
	);
}

export { WatchCourse };
