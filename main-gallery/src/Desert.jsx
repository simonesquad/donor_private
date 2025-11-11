import React from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Desert = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">DESERT VISIONS</h1>
                </div>
                <div className="container">
                <img height='400px' width='350px' src='src/assets/IMG_1107.jpeg' />
                </div>
                <div className="container">
                <img height='400px' width='350px' src='src/assets/IMG_1106.jpeg' />
                </div>
                <div className="container">
                <img height='400px' width='350px' src='src/assets/IMG_1105.jpeg' />
                </div>
                <div className="container">
                <img height='400px' width='350px' src='src/assets/IMG_1104.jpeg' />
                </div>

              <div className="container3">
                  <Link to="/sithere">
                      <h3>continue</h3>
                  </Link>
              </div>
                
            </div>
  );
};

export default Desert;
