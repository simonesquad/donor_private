import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images_5 from "./Images_5";
import Images_7 from "./Images_7";
import Images_8 from "./Images_8";

const Bazaar = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4
      };

      return (
        <div>
            <div className="content">
                <h1 className="header"></h1>
                </div>
                
                <div className="container">
                    <Slider {...settings}>
                    {Images_5.map((item) => (
                        <div key={item.id}>
                        <img src={item.src} alt={item.alt} className="img" />
                        </div>
                    ))}
                    </Slider>
                    <Slider {...settings}>
                    {Images_7.map((item) => (
                        <div key={item.id}>
                        <img src={item.src} alt={item.alt} className="img" />
                        </div>
                    ))}
                    </Slider>
                <div className="coontainer">
                    <Slider {...settings}>
                    {Images_8.map((item) => (
                        <div key={item.id}>
                        <img src={item.src} alt={item.alt} className="img" />
                        </div>
                    ))}
                    </Slider>
                    <Slider {...settings}>
                    {Images_8.map((item) => (
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

export default Bazaar;