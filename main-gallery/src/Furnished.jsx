import React from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Furnished = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">SIT HERE</h1>
                </div>
                <div className="container">
                <video width="320" height="540" controls>
                    <source src="/assets/IMG_1131.mp4" type="video/mp4" />
                </video>                
                </div>

                <div className="container3">
                    <Link to="/jewel">
                        <h3>continue</h3>
                    </Link>
                </div>
            </div>
  );
};

export default Furnished;