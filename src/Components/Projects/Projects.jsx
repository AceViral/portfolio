import React from "react";
import "./Projects.scss";
import qwery from "../../Images/Projects/QWERy.png";
import sneakers from "../../Images/Projects/React-Sneakers.png";
import web from "../../Images/Projects/Social-Network.png";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
const Projects = () => {
   return (
      <div className="projectsWrapper" id="portfolio">
         <ScrollAnimation
            animateIn="fadeInRight"
            duration="1.5"
            animateOnce="true"
         >
            <h3>Projects</h3>
         </ScrollAnimation>

         <div className="projects">
            <ScrollAnimation
               animateIn="flipInX"
               duration="1.5"
               animateOnce="true"
            >
               <div
                  className="project"
                  style={{
                     backgroundImage: `url(${qwery})`,
                  }}
               >
                  <p>
                     Indonesia - landing page <br />
                     <b>HTML/SCSS</b>
                  </p>
                  <a href="https://aceviral.github.io/qwery/">
                     <button>learn more</button>
                  </a>
               </div>
            </ScrollAnimation>
            <ScrollAnimation
               animateIn="flipInX"
               duration="1.5"
               animateOnce="true"
            >
               <div
                  className="project"
                  style={{
                     backgroundImage: `url(${web})`,
                  }}
               >
                  <p>
                     Social-Network <br />
                     <b>React.js</b>
                  </p>
                  <a href="https://aceviral.github.io/web/">
                     <button>learn more</button>
                  </a>
               </div>
            </ScrollAnimation>
            <ScrollAnimation
               animateIn="flipInX"
               duration="1.5"
               animateOnce="true"
            >
               <div
                  className="project"
                  style={{
                     backgroundImage: `url(${sneakers})`,
                  }}
               >
                  <p>
                     React-Sneakers <br />
                     <b>React.js</b>
                  </p>
                  <a href="https://aceviral.github.io/react-sneakers/">
                     <button>learn more</button>
                  </a>
               </div>
            </ScrollAnimation>
         </div>
      </div>
   );
};

export default Projects;
