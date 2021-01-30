import React from "react";
import {
  landingPage1,
  landingPage2,
  landingPage3,
} from "../../../assets/images";
import { Button } from "../../../components/Button";
import { Footer } from "../../../widgets/Footer";
import { Header } from "../../../widgets/Header/Index";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <Header />
      <main className="landing-page pb-5">
        <section className="landing-page-a container-fluid ms-4 row">
          <div className="col-7 my-5 ps-5">
            <h1 className="fw-bold my-3">
              Knowledge <br /> <span>for everyone by everyone</span>
            </h1>
            <p className="my-4">
              Cerebrum offers quality online learning that is flexible and
              inclusive for tutors and learners, which gives them a feeling of
              self-accomplishment.{" "}
            </p>
            <Button
              className="btn btn-primary my-5 border-2"
              text="Earn as a tutor"
            />
            <Button
              className="btn btn-outline-primary my-5 border-2"
              text="Access content as a learner"
            />
          </div>
          <div
            className="col-5"
            style={{
              background: `url(${landingPage1})`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
            }}
          ></div>
        </section>
        <section className="container landing-page-b d-flex justify-content-between my-5">
          <div className="card w-25 p-4 text-center shadow-lg">
            <h1>30k</h1>
            <p>Tutors</p>
          </div>
          <div className="card w-25 p-4 text-center shadow-lg">
            <h1>100k</h1>
            <p>Learners</p>
          </div>
          <div className="card w-25 p-4 text-center shadow-lg">
            <h1>500k</h1>
            <p>Courses</p>
          </div>
        </section>
        <section className="container landing-page-c ">
          <div className="d-flex justify-content-between row">
            <div className="col-6 align-self-center">
              <h1 className="fw-bold my-3">Meet Qualified Tutors</h1>
              <p className="mb-5">
                Our tutors master their subject matter, exhibit first-class
                teaching skills, and possess a proven ability to connect with
                you. We and our tutors are truly passionate about helping our
                students succeed. It is what you can expect from our tutoring
                services.
              </p>
              <Button
                className="btn btn-primary"
                text="Access content as a learner"
              />
            </div>
            <div className="land-img-con-c col-6">
              <img src={landingPage2} alt="landing Image" />
            </div>
          </div>
        </section>
        <section className="container landing-page-d ">
          <div className="d-flex justify-content-between row">
            <div className="land-img-con-d col-6">
              <img src={landingPage3} alt="landing Image" />
            </div>
            <div className="col-6 align-self-center">
              <h1 className="fw-bold my-3">Meet Verified Tutors</h1>
              <p className="mb-5">
                We check the identity of every tutor who registers with Cerebum
                and their content goes through various processes , tutors who
                are listed as verified undergo an extra layer of verification.
                Each verified tutor needs a minimum of 2 references publicly
                available on their profile before they can start and get a blue
                tick.
              </p>
              <Button
                className="btn btn-primary"
                text="Access content as a learner"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export { LandingPage };
