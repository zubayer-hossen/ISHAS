import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleDropdownToggle = (index) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const closeDropdown = () => {
    setDropdownOpen({});
  };

  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <Link to="/">ISHAS</Link>
        </div>
        <nav>
          <div className="nav-mobile">
            <a
              id="navbar-toggle"
              href="#!"
              onClick={handleToggle}
              className={navbarOpen ? "active" : ""}
            >
              <span></span>
            </a>
          </div>
          <ul className={`nav-list ${navbarOpen ? "open" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="/activities">Activities</Link>
            </li>
            <li>
              <a
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownToggle(1);
                }}
              >
                Members
              </a>
              <ul
                className={`navbar-dropdown ${dropdownOpen[1] ? "open" : ""}`}
              >
                <li>
                  <Link to="/president" onClick={closeDropdown}>
                    President
                  </Link>
                </li>
                <li>
                  <Link to="/vicepresident" onClick={closeDropdown}>
                    Vice President
                  </Link>
                </li>
                <li>
                  <Link to="/organizingsecretary" onClick={closeDropdown}>
                    Organizing Secretary
                  </Link>
                </li>
                <li>
                  <Link to="/publicityeditor" onClick={closeDropdown}>
                    Publicity Editor
                  </Link>
                </li>
                <li>
                  <Link to="/generalmember" onClick={closeDropdown}>
                    General Members
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
