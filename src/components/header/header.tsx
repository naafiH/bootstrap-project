import React from "react";
import "../header/header.css";

export default function header() {
  return (
    // navigation bar
      <nav id="navig" className="navbar navbar-expand-lg fixed-top">
          <div className="container align-items-stretch">
            <div className="icon">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
            </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li id="get-started" className="nav-item">
                <a className="nav-link" href="#">
                  GetStarted
                </a>
              </li>
            </ul>
          </div>
        
    </div>
      </nav>
  );
}
