import React from "react";
import { Footer } from "../../../widgets/Footer";
import { Header } from "../../../widgets/Header/Index";
import "./Faq.css";

function Faq() {
  return (
    <>
      <Header />
      <main className="faq-section">
        <section className="py-5 mb-5">
          <h1 className="py-5 text-center font-weight-bold">FAQ</h1>
        </section>
        <section className="container py-5">
          <h1>Frequently asked questions</h1>
          <p>
            This is the type of questions that the user is most likely to ask
            while using our web application.
          </p>
          <dl>
            <dt>1. What is Cerebrum?</dt>
            <dd>
              Cerebrum is an online learning platform that seeks to democratize
              education We offer learning to everyone at his own learning pace.
              Learning content includes text, audio and video according to your
              preference.
            </dd>
            <dt>2. How do I sign up as user?</dt>
            <dd>
              Visit Cerebrum landing page and click the <b>sign up</b> button.
              You will be redirected to the sign up page. Input fields will be
              displayed. Enter your correct email, Fullname, Password and click
              on sign up. A verification token is sent to your email for
              authentication.
            </dd>
            <dt>3. How do I verify my email address?</dt>
            <dd>
              After you have signed up to Cerebrum, a verification token is sent
              to your email. Click on the link to activate your account. You
              will be redirected to your dashboard. If you did not recieve the
              mail, you have the option to edit email and resend your
              verification token.
            </dd>
            <dt>4. How do I reset my password?</dt>
            <dd>
              If you have forgotten your password, you can reset it. Just go to
              the forgot password option in the login page. When you click on
              it, you will receive a reset password link in your email. Click on
              it and input a new password of your choice twice. Click reset
              password and you can change your previous password.
            </dd>
            <dt>5. How do I purchase a course?</dt>
            <dd>
              You can search through the category section or use the search bar
              for your preferred course, a click on the course and on the buy
              course option will redirect youthe payment page. The payment
              options will be displayed select your most preferred payment
              option and you will be redirected to the payment portal and after
              you have made payment you can access your course.
            </dd>

            <dt>6. How do I upload a course?</dt>
            <dd>please refer to our user manual.</dd>
            <dt>7. How do I edit my course after I have uploaded it?</dt>
            <dd>
              On the tutor dashboard, the option to edit a course is available.
            </dd>
            <dt>8. How do I delete a course?</dt>
            <dd>
              On the tutor dashboard, the option to delete a course is
              available.
            </dd>
            <dt>9. Is there a refund after payment?</dt>
            <dd> No we do not refund for payments made. </dd>
            <dt></dt>
            <dd></dd>
            <dt>10. How do I view courses I have subscribed for?</dt>
            <dd>
              After purchasing one or more courses, you can view your courses on
              your dashboard. A list of your courses is displayed.
            </dd>
          </dl>
        </section>
      </main>
      <Footer />
    </>
  );
}

export { Faq };
