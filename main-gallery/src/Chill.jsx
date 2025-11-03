import React from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Chill = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">chill</h1>
                </div>
                <div className="container2">
                <div className="container">
                <img height='500px' width='425px' src='src/assets/IMG_1247.jpeg' />
                </div>
                <div className="container">
                <img height='500px' width='425px' src='src/assets/IMG_1238.jpeg' />
                </div>
                </div>

                <div className="container3">
                    <Link to="/contained">
                        <h3>continue</h3>
                    </Link>
                </div>
            </div>
  );
};

export default Chill;