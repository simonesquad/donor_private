import React from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Mask = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">MASK</h1>
                </div>
                <div className="container2">
                <img height='400px' width='350px' src='/assets/IMG_1200.jpeg' />
                <img height='400px' width='350px' src='/assets/IMG_1195.jpeg' />
                <img height='400px' width='350px' src='/assets/IMG_1194.jpeg' />
                </div>

                <div className="container3">
                    <Link to="/vigil">
                        <h3>continue</h3>
                    </Link>
                </div>
            </div>
  );
};

export default Mask;