import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Quad = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">QUAD</h1>
                
                <div className="container2">
                <video width="320" height="540" controls>
                    <source src="src/assets/IMG_1173.mp4" type="video/mp4" />
                </video> 
                <video width="320" height="540" controls>
                    <source src="src/assets/IMG_1175.mp4" type="video/mp4" />
                </video>  
                <video width="320" height="540" controls>
                    <source src="src/assets/IMG_1174.mp4" type="video/mp4" />
                </video> 
                </div>            
            </div>
        </div>
  );
};

export default Quad;