import React from "react";
import "./PresidentInfo.css";
// import presidentPic from "/images/president.jpg"; // Update the path if necessary

const PublicityEditor = () => {
  return (
    <div className="president-info">
      <div className="pre_pic">
        <img
          src="https://i.ibb.co/r0m3cCh/274514532-1390772474685942-2679935927612332077-n.jpg"
          alt=""
          className="president-pic "
        />
      </div>
      <div className="info-content">
        <h2>ZUBAYER HOSSEN</h2>
        <p>Profession: CEO at XYZ Company</p>
        <p>Contact: zubayerhossen914@gmail.com| +8801580856397</p>
        <p>Blood Group: O+</p>
        <div className="speech">
          <h3>Message to Members:</h3>
          <p>
            "Dear friends and fellow members, it is with immense pride and
            enthusiasm that I serve as your Publicity Editor. My role is not
            just about spreading information; it's about amplifying our
            collective voice and showcasing our impact. Together, let's harness
            the power of communication to inspire action and unity within our
            community. Your support and involvement are key to our success.
            Thank you for trusting me with this responsibility. Let's make our
            organization shine brighter than ever!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublicityEditor;
