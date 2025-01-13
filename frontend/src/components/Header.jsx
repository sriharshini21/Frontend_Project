// Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="app-header" >
      <h1>Property Booking System</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/bookings">Bookings</Link>
          </li> */}
          <li>
            <Link to="/properties">Properties</Link>
          </li>
          {/* <li>
            <Link to="/users">Users</Link>
          </li> */}

          <li>
            <Link to="/flights">Flights</Link>
          </li>

          <li>
            <Link to="/trains">Trains</Link>
          </li>

          <li>
            <Link to="/Buses">Buses</Link>
          </li>

          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
