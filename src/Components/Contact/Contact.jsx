import React from "react";
import "./Contact.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import GH from "../../Images/GH.png";

const Contact = () => {
   return (
      <div className="contactWrapper" id="contact">
         <h1>Contact</h1>
         <ScrollAnimation animateIn="flipInX" duration="1.5" animateOnce="true">
            <div
               className="project"
               style={{
                  backgroundImage: `url(${GH})`,
               }}
            >
               <p>
                  GIT-HUB
                  <br />
                  <b>AceViral</b>
               </p>
               <a href="https://github.com/AceViral">
                  <button>learn more</button>
               </a>
            </div>
         </ScrollAnimation>
      </div>
   );
};

export default Contact;
