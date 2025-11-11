import React from "react";
import { Link } from 'react-router-dom';
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

            <div className="container3">
                <Link to="/carnival">
                    <h3>continue</h3>
                </Link>
            </div>
        </div>
  );
};

export default High;