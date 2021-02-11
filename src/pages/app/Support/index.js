import React from "react";
import { Footer } from "../../../widgets/Footer";
import { Header } from "../../../widgets/Header/Index";
import "./Support.css";

function Support() {
  return (
    <>
      <Header />
      <main className="support-section">
        <section className="bg-primary py-5 mb-5">
          <h1 className="py-5 text-center font-weight-bold">Support</h1>
        </section>
        <section className="container py-5 my-5">
          <h3 className="my-5">Email: support@cerebrum.com</h3>
          <h3 className="my-5">Phone Number: +2347063516620, +2348108423579</h3>
          <h3 className="my-5">
            Address: Genesys Tech Hub, Centenary City, Enugu, Nigeria.{" "}
          </h3>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Support;
