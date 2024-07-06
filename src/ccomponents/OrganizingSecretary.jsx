import React from "react";
import "./PresidentInfo.css";
// import presidentPic from "/images/president.jpg"; // Update the path if necessary

const OrganizingSecretary = () => {
  return (
    <div className="president-info">
      <div className="pre_pic">
        <img
          src="https://i.ibb.co/1rQNypn/Screenshot-2024-07-07-024108.png"
          alt=""
          className="president-pic "
        />
      </div>
      <div className="info-content">
        <h2>Md. Al Mamun</h2>
        <p>Profession: CEO at XYZ Company</p>
        <p>Contact: johndoe@example.com | +1234567890</p>
        <p>Blood Group: O+</p>
        <div className="speech">
          <h3>Message to Members:</h3>
          <p>
            "Dear members, it is an honor to serve as your Organizing Secretary.
            Together, let us strive for excellence in every endeavor we
            undertake. Let's work hand in hand to organize impactful events and
            initiatives that benefit our community. Your dedication and support
            are invaluable in our journey towards a brighter future. Thank you
            for your commitment."
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrganizingSecretary;
