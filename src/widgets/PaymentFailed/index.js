import React from "react";

import { Button } from "../../components/Button";
import { DashboardHeader } from "../DashboardHeader";
import { Footer } from "../Footer";
import "./PaymentFailed.css";

function PaymentFailed() {
	return (
		<>
			<DashboardHeader />
			<main className="container">
				<section className="shadow mx-auto p-5 failed-payment-section bg-white">
					<h1 className="fw-700 h2" style={{ color: "#E31E18", marginTop: "2rem" }}>
						Transaction Failed
					</h1>

					<div className="col-7 mb-4 line-height-26">
						<p className="signup-p">
							There was an error while trying to process the payment, transaction has failed. Please try again or contact support.
						</p>
					</div>

					<div className="d-flex justify-content-end">
						<div className="d-inline-block m-1">
							<Button className="btn payment-add-btn" text={"Add Course"} />
						</div>

						<div className="d-inline-block m-1">
							<Button className="btn payment-watch-btn" text={"Try Again"} />
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export { PaymentFailed };
