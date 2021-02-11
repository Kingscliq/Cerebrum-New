/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player/lazy";
import { ViewCourseElement } from "../../../components/ViewCourseElement";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";
import "./ViewCourse.css";

const url_string = window.location.href;

function ViewCourse() {
	const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/watch?v=ysz5S6PUM-U");
	const [sectionToggle, setSectionToggle] = useState("About Course");
	const [courseId, setCourseId] = useState(url.searchParams.get("id"));
	const [watchCourse, setWatchCourse] = useState();

	const handleClick = (e) => {
		e.preventDefault();
		let url = e.target.getAttribute("data-video-url");
		setCurrentVideo(url);
	};

	const handleToggle = (e) => {
		e.preventDefault();
		let textValue = e.target.innerText;
		setSectionToggle(textValue);
	};

	useEffect(() => {
		axios(`https://cerebrum-v1.herokuapp.com/api/course/view/${courseId}`)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err.response));
	}, []);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("userDetails"));
		const user_id = user.data.uid;
		const data = {
			user_id: user_id,
			course_id: courseId,
		};

		console.log(data);
		axios
			.post(`https://cerebrum-v1.herokuapp.com/api/payment/confirm/`, data)
			.then((res) => {
				if (res.data.success === true) {
					console.log(" you are qualified");
					setWatchCourse(true);
				}
			})
			.catch((err) => {
				console.log(err.response.data.success);
				history.push(`/buycourse?id=${courseId}`);
				setWatchCourse(false);
			});
	}, []);

	return (
		<>
			<DashboardHeader />
			<main className="viewcourse-section container my-5">
				<h1>The Story of Art</h1>
				<p>Lil Kim</p>
				<section className="row">
					<section className="col-7">
						<div>
							<ReactPlayer url={currentVideo} controls />
						</div>
						<div className="toggle-container my-3">
							<div className="toggle-btns">
								<button onClick={handleToggle} className={`w-50 py-3 ${sectionToggle == "About Course" ? "toggle-btn-active" : ""}`}>
									About Course
								</button>
								<button onClick={handleToggle} className={`w-50 py-3 ${sectionToggle == "Review" ? "toggle-btn-active" : ""}`}>
									Review
								</button>
							</div>
							<div className="toggle-items p-3">
								{sectionToggle == "About Course" ? (
									<>
										<h2 className="mt-3">About This Course</h2>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ipsa perferendis aliquam repellat, vel ex sit cumque reiciendis,
											neque doloribus sint eum voluptatem adipisci nemo dolore harum praesentium laboriosam et.
										</p>
									</>
								) : (
									<>
										<textarea className="mt-3 w-100" placeholder="Drop your review here" rows="10" cols="50"></textarea>
										<div className="review-btns d-flex justify-content-end my-3">
											<button className="btn btn-outline-primary">Cancel</button>
											<button className="btn btn-primary">Send</button>
										</div>
									</>
								)}
							</div>
						</div>
					</section>
					<aside className="col-5">
						<ViewCourseElement
							data-video-url={"https://res.cloudinary.com/codeangelic/video/upload/v1611911011/cerebrum/lessons/iwoo9u5n6hpwf22q9plb.mp4"}
							onClick={handleClick}
						/>
						<ViewCourseElement data-video-url={"https://youtu.be/9WC5baL5CrQ"} onClick={handleClick} />
						<ViewCourseElement
							data-video-url={"https://res.cloudinary.com/codeangelic/video/upload/v1611911011/cerebrum/lessons/iwoo9u5n6hpwf22q9plb.mp4"}
							onClick={handleClick}
						/>
						<ViewCourseElement
							data-video-url={"https://res.cloudinary.com/codeangelic/video/upload/v1611911011/cerebrum/lessons/iwoo9u5n6hpwf22q9plb.mp4"}
							onClick={handleClick}
						/>
						<ViewCourseElement
							data-video-url={"https://res.cloudinary.com/codeangelic/video/upload/v1611911011/cerebrum/lessons/iwoo9u5n6hpwf22q9plb.mp4"}
							onClick={handleClick}
						/>
					</aside>
				</section>
			</main>
			<Footer />
		</>
	);
}

export { ViewCourse };
