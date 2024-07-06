import React, { useState } from "react";
import "./MemberGallery.css";

const MemberGallery = () => {
  const Users = [
    {
      id: 1,
      name: "Zubayer Hossen",
      phone: "+8801580856397",
      fb: "https://facebook.com/zubayer",
      bg: "A+",
    },
    {
      id: 2,
      name: "Alamin Hossain",
      phone: "+8801580856398",
      fb: "https://facebook.com/alamin",
      bg: "O+",
    },
  ];

  const [mem, setMem] = useState(Users);
  const [nameFilter, setNameFilter] = useState("");
  const [bgFilter, setBgFilter] = useState("");

  const filteredMembers = mem.filter((user) => {
    return (
      user.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      user.bg.toLowerCase().includes(bgFilter.toLowerCase())
    );
  });

  return (
    <div>
      <div className="filter-container">
        <div className="filtering">
          <input
            type="text"
            placeholder="Filter by name"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by blood group"
            value={bgFilter}
            onChange={(e) => setBgFilter(e.target.value)}
          />
        </div>
      </div>
      <div className="content_container">
        {filteredMembers.map((user) => (
          <div key={user.id} className="member-card">
            <div className="userid">
              <span>{user.id}</span>
            </div>
            <img
              src={`https://via.placeholder.com/150?text=${
                user.name.split(" ")[0]
              }`}
              alt={user.name}
              className="member-pic"
            />
            <div className="member-info">
              <h2>{user.name}</h2>
              <p>Phone: {user.phone}</p>
              <p>Blood Group: {user.bg}</p>
              <div className="member-actions">
                <a
                  href={user.fb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facebook-btn"
                >
                  Facebook
                </a>
                <a href={`sms:${user.phone}`} className="message-btn">
                  Message
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberGallery;
