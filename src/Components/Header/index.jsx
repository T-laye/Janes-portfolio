import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import resume from "../../assets/JANE'S RESUME.pdf";
import "./Header.css";
import "../../Queries.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [open, setOpen] = useState(false);

  const onClickIcon = () => {
    setOpen(true);
  };
  const onClickClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <div className="header-container" data-aos="flip-up">
        <div className="logo-container">
          <Link to="/">Jane Agadia</Link>
        </div>
        <div className="navbar">
          <ul className={`nav-items ${open ? "active" : null}`}>
            <li onClick={onClickClose}>
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>
            <li onClick={onClickClose}>
              {" "}
              <Link className="nav-links" to="/projects">
                Projects
              </Link>
            </li>
            <li onClick={onClickClose}>
              {" "}
              <a className="nav-links" href={resume}>
                Resume
              </a>
            </li>
            <li onClick={onClickClose}>
              <Link className="nav-links" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`open-nav-icon hidden ${!open ? "show-icon" : null}`}
        onClick={onClickIcon}
      >
        <i className="bars icon large"></i>
      </div>
      <div
        className={`close-nav-icon hidden ${open ? "show-icon" : null}`}
        onClick={onClickClose}
      >
        <i className="x icon large"></i>
      </div>
      {props.children}
    </React.Fragment>
  );
};

export default Header;
