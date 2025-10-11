import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images_11 from "./Images_11";
import Images_12 from "./Images_12";
import Images_13 from "./Images_13";
import Images_14 from "./Images_14";

const StarShine = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: false,
        autoplaySpeed: 2000,
      };

      return (
        <div>
            <div className="content">
                <h1 className="header">STARSHINE</h1>
                </div>
                
                <div className="container">
                    <Slider {...settings}>
                    {Images_11.map((item) => (
                        <div key={item.id}>
                        <img src={item.src} alt={item.alt} className="img" />
                        </div>
                    ))}
                    </Slider>
                    <Slider {...settings}>
                    {Images_12.map((item) => (
                        <div key={item.id}>
                        <img src={item.src} alt={item.alt} className="img" />
                        </div>
                    ))}
                    </Slider>
                    <Slider {...settings}>
                    {Images_13.map((item) => (
                        <div key={item.id}>
                        <img src={item.src} alt={item.alt} className="img" />
                        </div>
                    ))}
                    </Slider>
                    <Slider {...settings}>
                    {Images_14.map((item) => (
                        <div key={item.id}>
                        <img src={item.src} alt={item.alt} className="img" />
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
  );
};

export default StarShine;