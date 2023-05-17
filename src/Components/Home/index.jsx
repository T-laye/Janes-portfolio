import React from 'react';
import Button from '../Button';
import { FiFigma } from 'react-icons/fi';
import { SiRedux, SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs, TbBrandMongodb } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import './home.css';
import '../../Queries.css';

function HomePage() {
  return (
    <div className=" pages homepage">
      <div className="about">
        <h2> Hello! I'm Tubo Layefa, </h2>
        <h1 className="role-text">A Front-end Developer.</h1>
        <p className="homepage-text">
          I specialize in creating interactive websites and applications that
          provide engaging user experiences. I have a passion for crafting
          visually appealing and user-friendly interfaces.
        </p>
      </div>
      <div className="tools">
        <p>
          {' '}
          Throughout my career, I have gained expertise in various <br />{' '}
          front-end technologies and frameworks, including:
        </p>
        <ul className="tools-icons">
          <li title="JavaScript">
            <i className=" large yellow js icon"></i>{' '}
          </li>
          <li title="Html">
            {' '}
            <i className=" large green html5 icon"></i>{' '}
          </li>
          <li title="CSS">
            <i className=" large blue css3 alternate icon"></i>
          </li>
          <li title="React">
            <i className=" large blue react icon"></i>
          </li>
          <li title="Figma">
            <FiFigma size={20} />
          </li>
          <li title="Redux">
            <SiRedux size={20} />
          </li>
          <li title="NextJS">
            <TbBrandNextjs size={22} />
          </li>
          <li title="Tailwind">
            <SiTailwindcss size={20} />
          </li>
          <li title="MongoDb">
            <TbBrandMongodb size={20} />
          </li>
          <li title="Github">
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
