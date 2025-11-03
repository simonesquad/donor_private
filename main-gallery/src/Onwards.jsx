import React from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Onwards = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">Onwards...</h1>
                </div>
                <div className="container2">
                <div className="container">
                <img height='480px' width='300px' src='src/assets/IMG_1411.jpeg' />
                </div>
                <div className="container">
                <img height='480px' width='300px' src='src/assets/IMG_1413.jpeg' />
                </div>
                </div>

                <div className="container2">
                <div className="container">
                <img height='480px' width='300px' src='src/assets/IMG_1424.jpeg' />
                </div>
                <div className="container">
                <img height='480px' width='300px' src='src/assets/IMG_1425.jpeg' />
                </div>
                </div>

                <div className="container3">
                    <Link to="/thankyou">
                        <h3>continue</h3>
                    </Link>
                </div>

                <div className="container3">
                    <Link to="/choose">
                        <h3>continue2</h3>
                    </Link>
                </div>
            </div>
  );
};

export default Onwards;