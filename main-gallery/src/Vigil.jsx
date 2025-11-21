import React from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Vigil = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">VIGIL</h1>
                </div>
                <div className="container2">
                <div className="container">
                <img height='450px' width='350px' src='/assets/IMG_1351.jpeg' />
                </div>
                <div className="container">
                <img height='450px' width='350px' src='/assets/IMG_1348.jpeg' />
                </div>
                </div>
                <div className="container2">
                <div className="container">
                <img height='450px' width='350px' src='/assets/IMG_1349.jpeg' />
                </div>
                <div className="container">
                <img height='450px' width='350px' src='/assets/IMG_1350.jpeg' />
                </div>
                </div>

                <div className="container3">
                    <Link to="/thankyou">
                        <h3>continue</h3>
                    </Link>
                </div>
            </div>
  );
};

export default Vigil;