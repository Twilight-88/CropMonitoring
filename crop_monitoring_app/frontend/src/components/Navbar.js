import React from "react";
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/Navbar.css';


const Navbar = () => {

    const location = useLocation();

  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span style={{ color: "#ffd54f", fontWeight: "bold" }}>Agri</span>Vision
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                    to="/"
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >Home</Link>
              </li>
              <li className="nav-item">
                <Link
                    to="/about"
                    className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                >About</Link>
              </li>
              <li className="nav-item">
                <Link
                    to="/how-it-works"
                    className={`nav-link ${location.pathname === '/how-it-works' ? 'active' : ''}`}
                >How It Works</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/detect">Detect</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link
                    to="/resources"
                    className={`nav-link ${location.pathname === '/resources' ? 'active' : ''}`}
                >Resources</Link>
              </li>
              <li className="nav-item">
                <Link
                    to="/contact"
                    className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                >Contact</Link>
              </li>
            </ul>

            <Link to="/login" className="btn btn-outline-light ms-3">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
