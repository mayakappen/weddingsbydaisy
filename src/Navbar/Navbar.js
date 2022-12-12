import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  // Use the useLocation hook to get the current location
  const location = useLocation();

  // Use the useState hook to keep track of whether the navbar is expanded or not
  const [expanded, setExpanded] = useState(false);

  // This function toggles the expanded state when the navbar is clicked
  const toggleNavbar = () => {
    setExpanded(!expanded);
  }

  return (
    <nav className="navbar">
      {/* Use the NavLink component to create a link back to the homepage */}
      <NavLink to="/" className="navbar-logo" onClick={toggleNavbar}>
        Weddings by Daisy
      </NavLink>
      <button
        className="navbar-toggle"
        onClick={toggleNavbar}
        aria-expanded={expanded ? 'true' : 'false'}
        aria-controls="navbar-menu"
      >
        Menu
      </button>
      {/* Use the expanded state to show/hide the menu items */}
      <ul
        className={`navbar-menu ${expanded ? 'expanded' : ''}`}
        id="navbar-menu"
      >
        {/* Use the NavLink component to create links to the other pages */}
        <li>
          <NavLink to="/about-me" activeclassname="active" onClick={toggleNavbar}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" activeclassname="active" onClick={toggleNavbar}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active" onClick={toggleNavbar}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
