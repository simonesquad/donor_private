import React from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Salty = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">SALTY</h1>
                </div>
                <div className="container2">
                <div className="container">
                <img height='450px' width='350px' src='src/assets/IMG_1286.jpeg' />
                </div>
                <div className="container">
                <img height='450px' width='350px' src='src/assets/IMG_1285.jpeg' />
                </div>
                </div>
                <div className="container2">
                <div className="container">
                <img height='450px' width='350px' src='src/assets/IMG_1287.jpeg' />
                </div>
                <div className="container">
                <img height='450px' width='350px' src='src/assets/IMG_1297.jpeg' />
                </div>
                </div>

                <div className="container3">
                  <Link to="/hey">
                      <h3>continue</h3>
                  </Link>
              </div>

            </div>
  );
};

export default Salty;