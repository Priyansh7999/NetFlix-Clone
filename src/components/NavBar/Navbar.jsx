import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search_icon.svg";
import profile from "../../assets/profile_img.png";

export default function Navbar() {
  const navigate = useNavigate(); // For navigation
  const [activeLink, setActiveLink] = useState("home"); // Track active link
  const [dropdownVisible, setDropdownVisible] = useState(false); // Profile dropdown
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false); // Mobile menu
  const [prevScrollY, setPrevScrollY] = useState(0); // Track previous scroll position

  // Handle active link change and navigation
  const handleLinkClick = (link, path) => {
    setActiveLink(link); // Set the clicked link as active
    navigate(path); // Navigate to the corresponding route
    setMobileMenuVisible(false); // Close mobile menu on navigation
  };

  // Handle profile dropdown visibility
  const handleProfileClick = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  // Handle search navigation
  const handleSearch = () => {
    navigate("/search");
  };

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > prevScrollY) {
        navbar.style.backgroundColor = "black"; // Scrolling down
      } else if (window.scrollY === 0) {
        navbar.style.backgroundColor = "transparent"; // At the top
      }
      setPrevScrollY(window.scrollY); // Update previous scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" onClick={()=>{navigate("/")}} />
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
        >
          ☰
        </button>
      </div>
      <div
        className={`nav-links ${mobileMenuVisible ? "mobile-visible" : ""}`}
      >
        <ul>
          <li>
            <button
              className={activeLink === "home" ? "active" : ""}
              onClick={() => handleLinkClick("home", "/")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={activeLink === "tvshow" ? "active" : ""}
              onClick={() => handleLinkClick("tvshow", "/tvshows")}
            >
              TV Shows
            </button>
          </li>
          <li>
            <button
              className={activeLink === "movies" ? "active" : ""}
              onClick={() => handleLinkClick("movies", "/movies")}
            >
              Movies
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <img
          className="icon"
          src={SearchIcon}
          alt="Search"
          onClick={handleSearch}
        />
        <div className="profile" onClick={handleProfileClick}>
          <img src={profile} alt="profile" />
          {dropdownVisible && (
            <div className="profile-dropdown">
              <p>Sign Out</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
