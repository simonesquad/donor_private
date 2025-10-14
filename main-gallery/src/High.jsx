import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const High = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">HIGH</h1>
                
                <div className="container2">
                <video width="320" height="540" controls>
                    <source src="src/assets/IMG_1239.mp4" type="video/mp4" />
                </video> 
                <video width="320" height="540" controls>
                    <source src="src/assets/IMG_1261.mp4" type="video/mp4" />
                </video>  
                <video width="320" height="540" controls>
                    <source src="src/assets/IMG_1271.mp4" type="video/mp4" />
                </video> 
                </div>            
            </div>
        </div>
  );
};

export default High;