import React from "react";
import "./PresidentInfo.css";
// import presidentPic from "/images/president.jpg"; // Update the path if necessary

const PresidentInfo = () => {
  return (
    <div className="president-info">
      <div className="pre_pic">
        <img
          src="https://i.ibb.co/hLDf0bS/378719501-824372939341277-437632052074849597-n.jpg"
          alt=""
          className="president-pic "
        />
      </div>
      <div className="info-content">
        <h2>Ismail Tarek</h2>
        <p>Profession: CEO at XYZ Company</p>
        <p>Contact: johndoe@example.com | +1234567890</p>
        <p>Blood Group: O+</p>
        <div className="speech">
          <h3>Message to Members:</h3>
          <p>
            "Together, we can achieve great things. Our organization is built on
            the foundation of service, and I am honored to lead such a dedicated
            and passionate team. Let's continue to work hard and make a positive
            impact in our community."
          </p>
        </div>
      </div>
    </div>
  );
};

export default PresidentInfo;
