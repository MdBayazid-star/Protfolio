import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import About from "../../AboutMe/About";
const Header = () => {
  let activeStyle = {
    color: "#03b97c",
  };
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <span className="text-red fw-bold">A</span>bu{" "}
              <span className="text-red fw-bold">B</span>akker
              <span className="text-red fw-bold"> ...</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    to="/home"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    to="/blog"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <HashLink
                    className="nav-link active"
                    to="/home#about"
                    // style={({ isActive }) =>
                    //   isActive ? activeStyle : undefined
                    // }
                  >
                    about
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink
                    className="nav-link active"
                    to="/home#project"
                    // style={({ isActive }) =>
                    //   isActive ? activeStyle : undefined
                    // }
                  >
                    Project
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink
                    className="nav-link active"
                    to="/home#contact"
                    // style={({ isActive }) =>
                    //   isActive ? activeStyle : undefined
                    // }
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
