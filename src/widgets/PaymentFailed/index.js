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
				<section className="my-5 shadow mx-auto p-5 success-payment-section bg-white">
					<h1 className="fw-700 h2" style={{ color: "#E31E18", marginTop: "2rem" }}>
						Transaction Failed
					</h1>

					<div className="col-7 mb-4 line-height-26">
						<p className="signup-p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis malesuada aenean tortor ultrices. Lobortis nisl sed ornare sed nibh.
							Sit suscipit id tristique nisi, viverra sed amet est. Netus tristique sed lobortis.
						</p>
					</div>

					<div className="mt-5 mb-1 d-flex justify-content-end">
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
