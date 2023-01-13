import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import ProjectData from "./ProjectData";
import "./project.css";

const Project = () => {
  return (
    <div className="ui container project-page">
      <h1 className="project-heading">My Projects</h1>

      <div className="project-container">{ProjectData}</div>
      <div className="project-btn ">
        <Link to="/contact">
          <Button text="Contact" />
        </Link>
      </div>
    </div>
  );
};

export default Project;
