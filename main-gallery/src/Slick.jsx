import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images_1 from "./Images_1";
import Images_2 from "./Images_2";
import Images_3 from "./Images_3";

const Slick = () => {
    const settings = {
        dots: true,
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
                <h1 className="header">WELCOME TO THE BURN!!</h1>
                <img height='390px' width='900px' src='src/assets/IMG_1055.jpeg' />
                <div className="container">
                    <Slider {...settings}>
                    {Images_1.map((item) => (
                        <div key={item.id}>
                        <img src={item.src} alt={item.alt} className="img" />
                        </div>
                    ))}
                    </Slider>
                    <Slider {...settings}>
                    {Images_2.map((item) => (
                        <div key={item.id}>
                        <img src={item.src} alt={item.alt} className="img" />
                        </div>
                    ))}
                    </Slider>
                    <Slider {...settings}>
                    {Images_3.map((item) => (
                        <div key={item.id}>
                        <img src={item.src} alt={item.alt} className="img" />
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
        </div>
  );
};

export default Slick;
