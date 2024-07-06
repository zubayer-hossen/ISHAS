import React, { useState } from "react";
import Modal from "react-modal";
import "./Portfolio.css";

Modal.setAppElement("#root"); // Set the app element for accessibility

const Portfolio = () => {
  const items = [
    {
      id: 1,
      type: "image",
      url: "https://via.placeholder.com/300",
      category: "nature",
    },
    {
      id: 2,
      type: "image",
      url: "https://via.placeholder.com/300",
      category: "city",
    },
    {
      id: 3,
      type: "video",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      category: "nature",
    },
    {
      id: 4,
      type: "image",
      url: "https://via.placeholder.com/300",
      category: "people",
    },
    {
      id: 5,
      type: "video",
      url: "https://www.w3schools.com/html/movie.mp4",
      category: "city",
    },
    {
      id: 6,
      type: "image",
      url: "https://via.placeholder.com/300",
      category: "nature",
    },
    // Add more items as needed
  ];

  const [filter, setFilter] = useState("all");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.category === filter);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="portfolio-container">
      <div className="filter-container">
        <label>Filter by Category: </label>
        <select onChange={handleFilterChange} value={filter}>
          <option value="all">All</option>
          <option value="nature">Nature</option>
          <option value="city">City</option>
          <option value="people">People</option>
        </select>
      </div>
      <div className="gallery">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => openModal(item)}
          >
            {item.type === "image" ? (
              <img src={item.url} alt={item.category} />
            ) : (
              <video controls>
                <source src={item.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>

      {selectedItem && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Lightbox"
          className="modal"
          overlayClassName="overlay"
        >
          <button onClick={closeModal} className="close-button">
            &times;
          </button>
          {selectedItem.type === "image" ? (
            <img
              src={selectedItem.url}
              alt={selectedItem.category}
              className="modal-content"
            />
          ) : (
            <video controls className="modal-content">
              <source src={selectedItem.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Portfolio;
