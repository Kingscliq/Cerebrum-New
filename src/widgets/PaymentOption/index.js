import React from "react";
import { dummyVideoImage } from "../../assets/images";
import { Button } from "../../components/Button";
import { DashboardHeader } from "../DashboardHeader";
import { Footer } from "../Footer";
import "./PaymentOption.css";

function PaymentOption() {
  return (
    <>
      <DashboardHeader />
      <main className="container">
        <h1 className="h2 fw-700 my-4"> Payment Options </h1>
        <section className="d-flex justify-content-between mb-5">
          <div className="shadow payment-option-section-div border-radius-12 bg-white">
            <div className="col-12 position-relative payment-option-price-div d-flex justify-content-center">
              <img src={dummyVideoImage} alt="dummy" width="100%" />
              <div className="payment-option-overlay position-absolute"></div>
              <h2 className="position-absolute payment-option-price text-white fw-700">
                {" "}
                N16,000{" "}
              </h2>
            </div>

            <div className="p-5">
              <h1 className="h4 fw-700"> One time payment </h1>
              <p className="signup-p my-4 line-height-26">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Convallis malesuada aenean tortor ultrices. Lobortis nisl sed
                ornare sed nibh. Sit suscipit id tristique nisi, viverra sed
                amet est. Netus tristique sed lobortis.
              </p>
              <div className="text-center my-2">
                <Button
                  className="btn payment-option-btn"
                  text={"Buy Course"}
                />
              </div>
            </div>
          </div>
          <div className="shadow payment-option-section-div border-radius-12 bg-white">
            <div className="position-relative payment-option-price-div d-flex justify-content-center">
              <img src={dummyVideoImage} alt="dummy" width="100%" />
              <div className="payment-option-overlay position-absolute"></div>
              <h2 className="position-absolute payment-option-price text-white fw-700">
                N16,000/<span className="h3 fw-700">Month</span>
              </h2>
            </div>
            <div className="p-5">
              <h1 className="h4 fw-700"> Monthly Payment </h1>
              <p className="signup-p my-4 line-height-26">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Convallis malesuada aenean tortor ultrices. Lobortis nisl sed
                ornare sed nibh. Sit suscipit id tristique nisi, viverra sed
                amet est. Netus tristique sed lobortis.
              </p>
              <div className="text-center my-2">
                <Button
                  className="btn payment-option-btn"
                  text={"Buy Course"}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export { PaymentOption };
