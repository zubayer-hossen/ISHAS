import React from "react";
import "./PresidentInfo.css";
// import presidentPic from "/images/president.jpg"; // Update the path if necessary

const VicePresidentInfo = () => {
  return (
    <div className="president-info">
      <div className="pre_pic">
        <img
          src="https://i.ibb.co/q0FcbHC/56786141-2276896145932611-5688002473457876992-n-removebg-preview.png"
          alt=""
          className="president-pic "
        />
      </div>
      <div className="info-content">
        <h2>G M Khayrul Islam</h2>
        <p>Profession: CEO at XYZ Company</p>
        <p>Contact: johndoe@example.com | +1234567890</p>
        <p>Blood Group: O+</p>
        <div className="speech">
          <h3>Message to Members:</h3>
          <p>
            "Dear members, it's an honor to serve as your Vice President.
            Together, let's continue our journey of service and community
            impact. Our dedication and unity are our strengths. Let's work
            together to achieve greater heights and make a lasting difference.
            Thank you for your commitment and passion."
          </p>
        </div>
      </div>
    </div>
  );
};

export default VicePresidentInfo;
