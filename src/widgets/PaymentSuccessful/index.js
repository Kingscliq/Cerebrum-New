/** @format */

import React from "react";

import { Button } from "../../components/Button";
import { DashboardHeader } from "../DashboardHeader";
import { Footer } from "../Footer";
import "./PaymentSuccessful.css";
import axios from "axios";

function PaymentSuccessful() {
	const checkWatchCourse = () => {
		const url_string = window.location.href;
		const url = new URL(url_string);
		const payment_id = url.searchParams.get("id");

		axios
			.get(`https://cerebrum-v1.herokuapp.com/api/payment/check/${payment_id}`)
			.then((res) => {
				console.log(res.data.data[0].course_id);

				window.location.assign(`/learner/viewcourse/?id=${res.data.data[0].course_id}`);
			})
			.catch((err) => {
				console.log(err.response);
				if (err.response.data.success === false) {
					alert("Opps! payment not found, You cannot watch course");
				}
			});
	};

	return (
		<>
			<DashboardHeader />
			<main className="container">
				<section className="shadow mx-auto p-5 success-payment-section bg-white">
					<h1 className="fw-700 h2" style={{ color: "#00C17C", marginTop: "2rem" }}>
						Transaction Successful
					</h1>

					<div className="col-7 mb-4 line-height-26">
						<p className="signup-p">Your transaction is successful. Thank you.</p>
					</div>

					<div className="my-2 d-flex justify-content-end">
						<div className="d-inline-block m-1">
							<Button className="btn payment-watch-btn" text={"Watch Course"} handleClick={checkWatchCourse} />
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export { PaymentSuccessful };
