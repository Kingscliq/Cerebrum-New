import React from "react";
import { Footer } from "../../../widgets/Footer";
import { Header } from "../../../widgets/Header/Index";
import "./About.css";

function About() {
  return (
    <>
      <Header />
      <main className="about-section">
        <section className="py-5 mb-5">
          <h1 className="py-5 text-center font-weight-bold">
            Knowledge for everyone by everyone
          </h1>
        </section>
        <section className="container my-5">
          <h1>About Us</h1>
          <p>
            Cerebrum is where you go to learn. Cerebrum is the trusted platform
            for education and learning. Cerebrum intends to be a home to more
            than 20 million learners, the majority of top-ranked universities in
            the world and industry-leading companies. As a global nonprofit,
            Cerebrum is transforming traditional education, removing the
            barriers of cost, location and access. Fulfilling the demand for
            people to learn on their own terms, Cerebrum is reimagining the
            possibilities of education, providing the highest-quality, stackable
            learning experiences. Supporting learners at every stage, whether
            entering the job market, changing fields, seeking a promotion or
            exploring new interests, Cerebrum delivers courses for curious
            minds.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export { About };
