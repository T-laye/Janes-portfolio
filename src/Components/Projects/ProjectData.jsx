import React from "react";
import image1 from "../../assets/Bitohomepage.png";
import image2 from "../../assets/Bitodashboard.png";
import image3 from "../../assets/JubileeHotel.png";
import image4 from "../../assets/Omnifood.png";
import image5 from "../../assets/FoodRecipe.png";
import image6 from "../../assets/Jauit.png";

const projectDataDetails = [
  {
    index: 0,
    title: "Bito-Naturals Homepage",
    image: image1,
    link: "https://bito-homepage.netlify.app/",
    description: " A mini e-commerce site for hair care products ",
    tools: ["HTML5", "CSS3", "JavaScript", "Gulp"],
  },
  {
    index: 1,
    title: "Bito-Naturals Dashboard",
    image: image2,
    link: "https://bito-login.netlify.app",
    description:
      " The dashboard of Bito natural site when a user signs up and sign in ",
    tools: ["HTML5", "CSS3", "JavaScript", "Gulp"],
  },
  {
    index: 2,
    title: "Jubilee Hotels",
    image: image3,
    link: "https://jubileehotels.netlify.app/",
    description: " An hotel website ",
    tools: ["HTML5", "CSS3", "JavaScript", "Gulp"],
  },
  {
    index: 3,
    title: "Omnifood Homepage",
    image: image4,
    link: "https://omnifood.dev/",
    description: " A site for ordering food ",
    tools: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    index: 4,
    title: "Nigeria Recipes",
    image: image5,
    link: "https://nigeriantastydelicacies.netlify.app/",
    description: " A site that displays various Nigerian recipies ",
    tools: ["HTML5", "CSS3"],
  },

  {
    index: 5,
    title: "Jauit Homepage",
    image: image6,
    link: "https://jauitwebsiteclone.netlify.app/",
    description: " A clone of the Jauit website ",
    tools: ["HTML5", "CSS3", "JavaScript"],
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
      {" "}
      <div>
        <img src={proj.image} alt={proj.title} />{" "}
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
