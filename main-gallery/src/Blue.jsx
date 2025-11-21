import React from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Blue = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">BLUE</h1>
                </div>
                <div className="container">
                <img height='400px' width='350px' src='/assets/IMG_1150.jpeg' />
                </div>
                <div className="container">
                <img height='400px' width='350px' src='/assets/IMG_1154.jpeg' />
                </div>
                <div className="container">
                <img height='400px' width='350px' src='/assets/IMG_1151.jpeg' />
                </div>
                <div className="container">
                <img height='400px' width='350px' src='/assets/IMG_1152.jpeg' />
                </div>
                <div className="container">
                <img height='400px' width='350px' src='/assets/IMG_1157.jpeg' />
                </div>

                <div className="container3">
                    <Link to="/sunset">
                        <h3>continue</h3>
                    </Link>
                </div>
            </div>
  );
};

export default Blue;