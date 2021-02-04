import React from "react";

import { Button } from "../../components/Button";
import { DashboardHeader } from "../DashboardHeader";
import { Footer } from "../Footer";
import "./PaymentSuccessful.css";

function PaymentSuccessful() {
	return (
		<>
			<DashboardHeader />
			<main className="container">
				<section className="my-5 shadow mx-auto p-5 success-payment-section bg-white">
					<h1 className="fw-700 h2" style={{ color: "#00C17C", marginTop: "2rem" }}>
						Transaction Successful
					</h1>

					<div className="col-7 mb-4 line-height-26">
						<p className="signup-p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis malesuada aenean tortor ultrices. Lobortis nisl sed ornare sed nibh.
							Sit suscipit id tristique nisi, viverra sed amet est. Netus tristique sed lobortis.
						</p>
					</div>

					<div className="mt-5 d-flex justify-content-end">
						<div className="d-inline-block m-1">
							<Button className="btn payment-add-btn" text={"Add Course"} />
						</div>

						<div className="d-inline-block m-1">
							<Button className="btn payment-watch-btn" text={"Watch Course"} />
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export { PaymentSuccessful };
