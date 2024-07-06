import React from "react";
import "./MemberCard.css";
import memberPic from "/images/president.jpg"; // Update the path if necessary

const MemberCard = () => {
  return (
    <div className="member-card">
      <img src={memberPic} alt="Member" className="member-pic" />
      <div className="member-info">
        <h2>John Doe</h2>
        <p>Phone: +1234567890</p>
        <p>Blood Group: O+</p>
        <div className="member-actions">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook-btn"
          >
            Facebook
          </a>
          <a href="sms:+1234567890" className="message-btn">
            Message
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
