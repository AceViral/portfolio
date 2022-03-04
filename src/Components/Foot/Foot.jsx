import React from "react";
import "./Foot.scss";
import "boxicons";

const Foot = () => {
   return (
      <div className="footWrapper">
         <a href="#home">
            <box-icon name="chevrons-up" color="#fff"></box-icon>
         </a>
         <div className="contacts">
            <a href="https://vk.com/yonko_0">
               <box-icon type="logo" name="vk" color="#fff"></box-icon>
            </a>
            <a href="https://github.com/AceViral">
               <box-icon type="logo" name="github" color="#fff"></box-icon>
            </a>
            <a href="https://t.me/yonko_0">
               <box-icon name="telegram" type="logo" color="#fff"></box-icon>
            </a>
         </div>
         <p>
            IBRAGIMOV BULAT
            <box-icon name="copyright" color="#306b7a"></box-icon> <b>2022</b>
         </p>
      </div>
   );
};

export default Foot;
