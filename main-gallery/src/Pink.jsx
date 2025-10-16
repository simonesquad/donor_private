import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images_15 from "./Images_15";

const Pink = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

      return (
        <div>
            <div className="content">
                <h1 className="header">PINK ####3333</h1>
                </div>
                
                <div className="container">
                    <Slider {...settings}>
                    {Images_15.map((item) => (
                        <div key={item.id}>
                        <img src={item.src} alt={item.alt} className="img" />
                        </div>
                    ))}
                    </Slider>
                </div>
                
            </div>
  );
};

export default Pink;