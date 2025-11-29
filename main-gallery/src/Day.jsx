import React from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Day = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">DAY</h1>
                </div>
                <div className="container2">
                <div className="container">
                <img height="500px" width="425px" src="/assets/IMG_1321.jpeg" />
                </div>
                <div className="container">
                <img height="500px" width="425px" src="/assets/IMG_1320.jpeg" />
                </div>
                </div>

                <div className="container3">
                    <Link to="/chill">
                        <h3>continue</h3>
                    </Link>
                </div>
            </div>
  );
};

export default Day;