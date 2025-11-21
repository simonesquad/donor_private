import React from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Mirage = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">MIRAGE</h1>
                </div>
                <div className="container">
                <img height='400px' width='350px' src='/assets/IMG_1354.jpeg' />
                </div>
                <div className="container">
                <img height='400px' width='350px' src='/assets/IMG_1356.jpeg' />
                </div>
                <div className="container">
                <img height='400px' width='350px' src='/assets/IMG_1355.jpeg' />
                </div>
                <div className="container">
                <img height='400px' width='350px' src='/assets/IMG_1357.jpeg' />
                </div>
                <div className="container">
                <img height='400px' width='350px' src='/assets/IMG_1358.jpeg' />
                </div>
                <div className="container">
                <img height='400px' width='350px' src='/assets/IMG_1359.jpeg' />
                </div>

                <div className="container3">
                    <Link to="/allnight">
                        <h3>continue</h3>
                    </Link>
                </div>
            </div>
  );
};

export default Mirage;