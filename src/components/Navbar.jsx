import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/mjk-logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="MJK Logo" />
        <span className="logo-text">MJK</span>
      </div>

      <div className="navbar-links">
        {/* Public Website Links */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-item active-link" : "nav-item"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-item active-link" : "nav-item"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "nav-item active-link" : "nav-item"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "nav-item active-link" : "nav-item"
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-item active-link" : "nav-item"
          }
        >
          Contact
        </NavLink>

        {/* ADMIN PANEL DROPDOWN */}
        <div
          className="admin-dropdown"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <span className="nav-item admin-label">
            Admin Panel ▼
          </span>

          {open && (
            <div className="admin-menu">
              <NavLink to="/users" className="dropdown-item">
                Users Admin
              </NavLink>
              <NavLink to="/projects-list" className="dropdown-item">
                Projects Admin
              </NavLink>
              <NavLink to="/services-list" className="dropdown-item">
                Services Admin
              </NavLink>
              <NavLink to="/contacts-list" className="dropdown-item">
                Contacts Admin
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;