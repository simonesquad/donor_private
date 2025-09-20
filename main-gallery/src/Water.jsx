import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images_4 from "./Images_4";
import Images_6 from "./Images_6";

const Water = () => {
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
                <h1 className="header"></h1>
                </div>
                
                <div className="container">
                    <Slider {...settings}>
                    {Images_4.map((item) => (
                        <div key={item.id}>
                        <img src={item.src} alt={item.alt} className="img" />
                        </div>
                    ))}
                    </Slider>
                    <Slider {...settings}>
                    {Images_6.map((item) => (
                        <div key={item.id}>
                        <img src={item.src} alt={item.alt} className="img" />
                        </div>
                    ))}
                    </Slider>
                </div>
                
            </div>
  );
};

export default Water;