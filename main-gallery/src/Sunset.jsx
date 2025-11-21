import React from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Sunset = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">SUNSET</h1>
                </div>
                <div className="container2">
                <img height='400px' width='325px' src='/assets/IMG_1181.jpeg' />
                <img height='400px' width='325px' src='/assets/IMG_1176.jpeg' />
                <img height='400px' width='325px' src='/assets/IMG_1178.jpeg' />
                </div>
                <div className="container2">
                <img height='400px' width='325px' src='/assets/IMG_1179.jpeg' />
                <img height='400px' width='325px' src='/assets/IMG_1180.jpeg' />
                <img height='400px' width='325px' src='/assets/IMG_1182.jpeg' />
                </div>

                <div className="container3">
                    <Link to="/quad">
                        <h3>continue</h3>
                    </Link>
                </div>
            </div>
  );
};

export default Sunset;