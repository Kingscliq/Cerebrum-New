import React from "react";
import { Footer } from "../../../widgets/Footer";
import { Header } from "../../../widgets/Header/Index";
import "./About.css";

function About() {
  return (
    <>
      <Header />
      <main className="faq-section">
        <section className="bg-primary py-5 mb-5">
          <h1 className="py-5 text-center font-weight-bold">
            Knowledge for everyone by everyone
          </h1>
        </section>
        <section className="container">
          <h1>About Us</h1>
          <p>
            Cerebrum offers quality online learning that is flexible and
            inclusive for tutors and learners, which gives them a feeling of
            self-accomplishment.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export { About };
