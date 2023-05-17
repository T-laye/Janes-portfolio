import React from 'react';
import image1 from '../../assets/Bitohomepage.png';
import image2 from '../../assets/Bitodashboard.png';
import image3 from '../../assets/JubileeHotel.png';
import image5 from '../../assets/image_stustle.png';

const projectDataDetails = [
  {
    index: 0,
    title: 'Stustle Landing Page',
    image: image5,
    link: 'https://stustle.com/',
    description: ' A service rendering website',
    tools: ['Nextjs', 'Tailwind CSS'],
  },
  {
    index: 1,
    title: 'Bito-Naturals Homepage',
    image: image1,
    link: 'https://bito-homepage.netlify.app/',
    description: ' A mini e-commerce site for hair care products ',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Gulp'],
  },
  {
    index: 2,
    title: 'Bito-Naturals Dashboard',
    image: image2,
    link: 'https://bito-login.netlify.app',
    description:
      ' The dashboard of Bito natural site when a user signs up and sign in ',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Gulp'],
  },
  {
    index: 3,
    title: 'Jubilee Hotels',
    image: image3,
    link: 'https://jubileehotels.netlify.app/',
    description: ' An hotel website ',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Gulp'],
  },
];

// console.log(projectTools);

const ProjectData = projectDataDetails.map((proj) => {
  const projectTools = projectDataDetails.map((p, i) => {
    const too = p.tools.map((tool) => {
      if (p.index === proj.index) {
        return (
          <div key={tool} className="tool-items">
            {tool}
          </div>
        );
      }
    });

    return too;
  });
  return (
    <div key={proj.title} className="project">
      {' '}
      <div>
        <img src={proj.image} alt={proj.title} />{' '}
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={proj.link}
        className="project-description"
      >
        <div className="project-description-title">{proj.title}</div>
        <div className="project-description-text">{proj.description}</div>
        <div className="project-description-tools">{projectTools}</div>
      </a>
    </div>
  );
});

export default ProjectData;
