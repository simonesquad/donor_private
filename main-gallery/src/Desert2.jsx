import React from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Desert2 = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">desert 2</h1>
                </div>
                <div className="container2">
                <div className="container">
                <img height='450px' width='350px' src='src/assets/IMG_1340.jpeg' />
                </div>
                <div className="container">
                <img height='450px' width='350px' src='src/assets/IMG_1342.jpeg' />
                </div>
                </div>
                <div className="container2">
                <div className="container">
                <img height='450px' width='350px' src='src/assets/IMG_1341.jpeg' />
                </div>
                <div className="container">
                <img height='450px' width='350px' src='src/assets/IMG_1343.jpeg' />
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

export default Desert2;