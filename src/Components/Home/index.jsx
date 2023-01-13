import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import "./home.css";
import "../../Queries.css";

function HomePage() {
  return (
    <div className=" pages homepage">
      <div className="about">
        <h2> Hello! I'm Jane Agadia, </h2>
        <h1 className="role-text">A Front-end Developer.</h1>
        <p className="homepage-text">
          I enjoy creating interactive websites and applications.
          <br /> I also enjoy teaching, smart conversations and connecting with
          people.
        </p>
      </div>
      <div className="tools">
        <p> Some of the technologies I've been working with are:</p>
        <ul className="tools-icons">
          <li>
            <i className=" large yellow js icon"></i>{" "}
          </li>
          <li>
            {" "}
            <i className=" large green html5 icon"></i>{" "}
          </li>
          <li>
            <i className=" large blue css3 alternate icon"></i>
          </li>
          <li>
            <i className=" large blue react icon"></i>
          </li>
          <li>
            <i className=" large  github icon"></i>
          </li>
        </ul>
      </div>
      <div className="home-btn">
        <Link to="/projects">
          <Button text="Projects" />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
