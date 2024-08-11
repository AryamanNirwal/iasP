"use client"
import React from 'react'
import Slider from "react-slick";
const Hero = ({slides}) => {
    var settings={
        dots:true,
        infinte: true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay: true,
        pauseOnHover: false,
    };
  return (
    <div>
        <div className="container-fluid pt-6 lg:pt-0" style={{marginTop:"-5px"}}>
            <Slider {...settings}>
                {slides.length > 0 && slides.map((item) => (
                    <div key={item.title}>
                        {item.imgUrl ? (
                            <img src={item.imgUrl} alt={item.title}  />
                        ) : (
                            <span>{item.title}</span> 
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    </div>    
  )
}

export default Hero