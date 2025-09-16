import React, { Component } from "react";
import Slider from "react-slick";
import Images from "./Images";

// import img1 from './assets/cube_pictures/IMG_1047.jpeg';
// import img2 from './assets/cube_pictures/IMG_1048.jpeg';
// import img3 from './assets/cube_pictures/IMG_1049.jpeg';
// import img4 from './assets/cube_pictures/IMG_1052.jpeg';

const Slick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      };

  return (
        <div>
            <div className="content">
                <h1 className="header">WELCOME TO THE BURN</h1>
                <div className="container">
                    <Slider {...settings}>
                    {Images.map((item) => (
                        <div key={item.id}>
                        <img src={item.src} alt={item.alt} className="img" />
                        <h2 className="title">{item.title}</h2>
                        <p className="description">{item.description}</p>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
        </div>
  );
};

export default Slick;
