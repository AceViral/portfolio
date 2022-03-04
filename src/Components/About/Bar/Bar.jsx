import React from "react";
import "../About.scss";
const Bar = ({ theme, percents }) => {
   return (
      <div className="bar">
         <span className="theme">
            <p>{theme}</p>
         </span>
         <div className="fillBar">
            <div className="color" style={{ width: `${percents}%` }}></div>
            <span className="percents">
               <p>{percents}%</p>
            </span>
         </div>
      </div>
   );
};

export default Bar;
