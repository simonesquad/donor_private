import React from "react";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const S = () => {


  return (
        <>
            <div className="content">
                <h1 className="header"></h1>
                
                <div className="container">
                <img height='450px' width='875px' src='src/assets/IMG_1140.jpeg' />
                </div>
                <div className="container">
                <img height='450px' width='875px' src='src/assets/IMG_1139.jpeg' />
                </div>
                
                <div className="container3">
                    <Link to="/blue">
                        <h3>continue</h3>
                    </Link>
                </div>
                </div>

      
                    

            </>
  );
};

export default S; 
// comment here 
//hello