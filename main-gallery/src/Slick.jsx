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
                <h1 className="header">WELCOME TO MY FIRST BURN!!</h1>
                <img height='390px' width='900px' src='src/assets/IMG_1055.jpeg' />
                <div className="container">
                    <p>Howdy travellers of the universe! Welcome to my commemoration page of Burning Man 2025</p>
                    <p>It was a journey of many miles from San Diego to Las Vegas to Reno and then to Black Rock City, but really it was a journey of infinite soul miles</p>
                    <p>There are no words to describe the first moments on Playa and my first night out in the desert as the art cars emerged from space</p>
                    <p>I camped out with the Earth Guardians and volunteered the entire week - making sure fuel arrangments were safe</p>
                    <p>Likewise, I explored all the fascinating diversions the PLAYA had to offer, from dance parties to Iranian cuisine</p>
                    <p>I am truly grateful to the teams that welcomed me on site and share the outcome of my seasonal crowdfundr with recipient CORE Ukraine</p>
                    <p>I raised awareness and funds from February - August 2025 in California while travelling through Worldpackers.</p>
                    <p>I celebrated my 32nd birthday in LA and continue to backpack through Cali towards peace!!</p>
                    <h3>Hope we cross paths again soon#</h3>
                    <p>Follow me at my website shared in the legacy campaign found here:</p>
                    <a href="https://fnd.us/b2WZGf?ref=sh_2E1mj5">Burning 4 Ukraine Relief</a>
                </div>
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
