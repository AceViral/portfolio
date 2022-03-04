import React from "react";
import "./About.scss";
import "boxicons";
import Me from "../../Images/Me.jpg";
import Bar from "./Bar/Bar.jsx";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Knowledges = [
   { theme: "CSS", percents: 70, id: 1 },
   { theme: "HTML", percents: 70, id: 2 },
   { theme: "React", percents: 40, id: 3 },
   { theme: "Redux", percents: 30, id: 4 },
   { theme: "JS", percents: 30, id: 5 },
   { theme: "Node.js", percents: 20, id: 6 },
   { theme: "Figma", percents: 50, id: 7 },
   { theme: "English", percents: 50, id: 8 },
];

const About = () => {
   return (
      <div className="about" id="about">
         <ScrollAnimation
            animateIn="fadeInLeft"
            duration="1.5"
            animateOnce="true"
         >
            <h3>About</h3>
         </ScrollAnimation>

         <div className="dignities">
            <div className="dignite">
               <ScrollAnimation
                  animateIn="flip"
                  duration="1.5"
                  animateOnce="true"
               >
                  <box-icon name="tachometer" color="white"></box-icon>{" "}
               </ScrollAnimation>
               <ScrollAnimation
                  animateIn="fadeIn"
                  duration="1.5"
                  animateOnce="true"
               >
                  <h4>Fast</h4>
                  <p>
                     Fast load times and lag free interaction, my highest
                     priority.
                  </p>
               </ScrollAnimation>
            </div>
            <div className="dignite">
               <ScrollAnimation
                  animateIn="flip"
                  duration="1.5"
                  animateOnce="true"
               >
                  <box-icon name="laptop" color="white"></box-icon>
               </ScrollAnimation>
               <ScrollAnimation
                  animateIn="fadeIn"
                  duration="1.5"
                  animateOnce="true"
               >
                  <h4>Responsive</h4>
                  <p>My layouts will work on any device, big or small.</p>
               </ScrollAnimation>
            </div>
            <div className="dignite">
               <ScrollAnimation
                  animateIn="flip"
                  duration="1.5"
                  animateOnce="true"
               >
                  <box-icon name="bulb" color="white"></box-icon>
               </ScrollAnimation>
               <ScrollAnimation
                  animateIn="fadeIn"
                  duration="1.5"
                  animateOnce="true"
               >
                  <h4>Intuitive</h4>
                  <p>Strong preference for easy to use, intuitive UX/UI.</p>
               </ScrollAnimation>
            </div>
            <div className="dignite">
               <ScrollAnimation
                  animateIn="flip"
                  duration="1.5"
                  animateOnce="true"
               >
                  <box-icon name="rocket" color="white"></box-icon>
               </ScrollAnimation>
               <ScrollAnimation
                  animateIn="fadeIn"
                  duration="1.5"
                  animateOnce="true"
               >
                  <h4>Dynamic</h4>
                  <p>
                     Websites don't have to be static, I love making pages come
                     to life.
                  </p>
               </ScrollAnimation>
            </div>
         </div>
         <ScrollAnimation
            animateIn="fadeInUp"
            duration="1.5"
            animateOnce="true"
         >
            <div className="whoAmIWrapper">
               <div className="whoAmI">
                  <img src={Me} alt="" />
                  <h4>Who's this guy?</h4>
                  <p>
                     I am a novice frontend developer currently not working
                     anywhere. Open to suggestions
                  </p>
               </div>
               <div className="myKnowledges">
                  {Knowledges.map((el, i = el.id) => {
                     return <Bar theme={el.theme} percents={el.percents} />;
                  })}
               </div>
            </div>
         </ScrollAnimation>
      </div>
   );
};

export default About;
