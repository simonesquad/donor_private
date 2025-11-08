import React from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Rider = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">RIDER</h1>
                </div>
                <div className="container2">
                <img height='400px' width='325px' src='src/assets/IMG_1304.jpeg' />
                <img height='400px' width='325px' src='src/assets/IMG_1303.jpeg' />
                <img height='400px' width='325px' src='src/assets/IMG_1306.jpeg' />
                </div>
                <div className="container2">
                <img height='400px' width='325px' src='src/assets/IMG_1307.jpeg' />
                <img height='400px' width='325px' src='src/assets/IMG_1308.jpeg' />
                <img height='400px' width='325px' src='src/assets/IMG_1309.jpeg' />
                </div>

                <div className="container3">
                    <Link to="/rider">
                        <h3>continue</h3>
                    </Link>
                </div>
            </div>
  );
};

export default Rider;