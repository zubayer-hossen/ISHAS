import React from "react";
import "./Activities.css"; // Import the CSS file for styling

const Activities = () => {
  return (
    <div className="activities-container">
      <h2>Our Activities</h2>
      <div className="activity-card">
        <div className="activity-img">
          <img
            src="https://i.ibb.co/hmmcxcC/12062417-4881929.jpg"
            alt="Activity 1"
          />
        </div>
        <div className="activity-details">
          <h3>Community Service Campaign</h3>
          <p>
            Our organization is dedicated to improving the lives of those in
            need through our Community Service Campaign. We mobilize volunteers
            to engage in a variety of impactful activities, such as organizing
            blood donation drives, providing support to the underprivileged, and
            hosting educational and cultural events. By working together, we aim
            to foster a sense of community, promote civic responsibility, and
            create a lasting positive impact. Join us in making a difference and
            building a better future for all.
          </p>
        </div>
      </div>

      <div className="activity-card">
        <div className="activity-img">
          <img
            src="https://i.ibb.co/PhRQqqZ/15272783-5581651.jpg"
            alt="Activity 2"
          />
        </div>
        <div className="activity-details">
          <h3>Sports Tournament</h3>
          <p>
            Our organization proudly hosts a Sports Tournament to promote
            physical fitness, teamwork, and community spirit. This event brings
            together participants of all ages for friendly competition in
            various sports, fostering camaraderie and healthy living. Through
            our tournament, we aim to unite the community, encourage active
            lifestyles, and provide a platform for local talent to shine. Join
            us for an exciting and energizing experience that celebrates
            sportsmanship and unity.
          </p>
        </div>
      </div>

      <div className="activity-card">
        <div className="activity-img">
          <img
            src="https://i.ibb.co/r6RwXTw/30118682-7664295.jpg"
            alt="Activity 3"
          />
        </div>
        <div className="activity-details">
          <h3>Cultural Festival</h3>
          <p>
            Our organization is excited to host a Cultural Festival, celebrating
            the rich and diverse heritage of our community. This vibrant event
            features performances, art exhibitions, and traditional activities,
            offering a platform for local talent to showcase their skills. By
            bringing people together, we aim to promote cultural awareness,
            strengthen community bonds, and preserve our unique traditions. Join
            us for a joyful celebration of culture, unity, and creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
