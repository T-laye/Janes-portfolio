import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import ProjectData from "./ProjectData";
import "./project.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="ui container project-page">
      <h1 className="project-heading">My Projects</h1>

      <div className="project-container" data-aos="fade-right">
        {ProjectData}
      </div>
      <div className="project-btn ">
        <Link to="/contact">
          <Button text="Contact" data-aos="fade-up" />
        </Link>
      </div>
    </div>
  );
};

export default Project;
