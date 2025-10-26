import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SteelHeart = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">STEEL HEART</h1>
                </div>
                <div className="container">
                <video width="320" height="540" controls>
                    <source src="src/assets/IMG_1290.mp4" type="video/mp4" />
                </video>                
                </div>
            </div>
  );
};

export default SteelHeart;