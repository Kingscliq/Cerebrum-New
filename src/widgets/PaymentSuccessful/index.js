/** @format */

import React, { useEffect, useState } from "react";

import { Button } from "../../components/Button";
import { DashboardHeader } from "../DashboardHeader";
import { Footer } from "../Footer";
import "./PaymentSuccessful.css";
import axios from "axios";

function PaymentSuccessful() {
  const [paymentStatus, setPaymentStatus] = useState("");
  const checkWatchCourse = () => {
    const url_string = window.location.href;
    const url = new URL(url_string);
    const payment_id = url.searchParams.get("id");

    axios
      .get(`https://cerebrum-v1.herokuapp.com/api/payment/check/${payment_id}`)
      .then((res) => {
        console.log(res.data.data[0].course_id);

        window.location.assign(
          `/learner/viewcourse/?id=${res.data.data[0].course_id}`
        );
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
      <main className='container'>
        <section className='my-5 shadow mx-auto p-5 success-payment-section bg-white'>
          <h1
            className='fw-700 h2'
            style={{ color: "#00C17C", marginTop: "2rem" }}
          >
            Transaction Successful
          </h1>

          <div className='col-7 mb-4 line-height-26'>
            <p className='signup-p'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              malesuada aenean tortor ultrices. Lobortis nisl sed ornare sed
              nibh. Sit suscipit id tristique nisi, viverra sed amet est. Netus
              tristique sed lobortis.
            </p>
          </div>

          <div className='mt-5 mb-1 d-flex justify-content-end'>
            <div className='d-inline-block m-1'>
              <Button
                className='btn payment-watch-btn'
                text={"Watch Course"}
                handleClick={checkWatchCourse}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export { PaymentSuccessful };
