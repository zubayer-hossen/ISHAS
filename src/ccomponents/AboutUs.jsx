import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h1 className="title">About Us</h1>
        <p className="description">
          Welcome to ISHAS, our organization dedicated to human welfare. We are
          committed to helping the needy, organizing blood donation drives,
          hosting religious events, and conducting various sports, cultural, and
          developmental activities. Our mission is to create a positive impact
          in our community and beyond.
        </p>
        <div className="cards">
          <div className="card">
            <h2>Our Mission</h2>
            <p>
              To provide support and assistance to those in need, foster
              community spirit, and promote overall well-being through various
              activities and programs.
            </p>
          </div>
          <div className="card">
            <h2>Our Vision</h2>
            <p>
              To build a compassionate and inclusive society where everyone has
              the opportunity to thrive and contribute to the community's
              growth.
            </p>
          </div>
          <div className="card">
            <h2>Our Values</h2>
            <p>
              Compassion, Integrity, Inclusivity, Collaboration, and Dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
