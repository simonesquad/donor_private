import React from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Dual = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">DUAL</h1>
                </div>
                <div className="container">
                <video width="320" height="540" controls>
                    <source src="src/assets/IMG_1089.mp4" type="video/mp4" />
                </video>                
                </div>
                <div className="container">
                <video width="320" height="540" controls>
                    <source src="src/assets/IMG_1109.mp4" type="video/mp4" />
                </video>  
                </div>

                <div className="container3">
                    <Link to="/salty">
                        <h3>continue</h3>
                    </Link>
                </div>
            </div>
  );
};

export default Dual;