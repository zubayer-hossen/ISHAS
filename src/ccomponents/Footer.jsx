import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 ISHAS. All rights reserved.</p>

        <div className="social-icons">
          <a href="#!" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
