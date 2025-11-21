import React from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carnival = () => {


  return (
        <div>
            <div className="content">
                <h1 className="header">Carnival</h1>
                </div>
                <div className="container2">
                <div className="container">
                <img height='480px' width='300px' src='/assets/IMG_1326.jpeg' />
                </div>
                <div className="container">
                <img height='480px' width='300px' src='/assets/IMG_1328.jpeg' />
                </div>
                <div className="container">
                <img height='480px' width='300px' src='/assets/IMG_1383.jpeg' />
                </div>
                </div>

                <div className="container2">
                <div className="container">
                <img height='480px' width='250px' src='/assets/IMG_1375.jpeg' />
                </div>
                <div className="container">
                <img height='480px' width='250px' src='/assets/IMG_1377.jpeg' />
                </div>
                <div className="container">
                <img height='480px' width='250px' src='/assets/IMG_1373.jpeg' />
                </div>
                <div className="container">
                <img height='480px' width='250px' src='/assets/IMG_1376.jpeg' />
                </div>
                </div>

                <div className="container3">
                    <Link to="/pink">
                        <h3>continue</h3>
                    </Link>
                </div>
            </div>
  );
};

export default Carnival;