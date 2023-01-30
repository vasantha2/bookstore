import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="book"
            className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
          >
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
