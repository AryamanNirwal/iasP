"use client"
import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { LiaStarHalfAltSolid } from "react-icons/lia";

const Home = ({list3}) => {

  return (
    <div className="swiper-container">
          <div className="container-fluid mx-auto  pt-14  justify-center bg-ecedeb "
            style={{justifyContent:"center" , width:"1200px" , margin:"0 auto"}}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h1 className="font-medium text-2xl pb-4 text-center font-mono">PLATFORMIAS SUCCESS STORIES</h1>
        <span>
            <p style={{color:"green" , }}>Congratulations to our UPSC Toppers! Year after year,<br/>our students consistently secure top positions</p>
        </span><br/>
        </div>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 1500 }}
        loop={true}
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        Pagination={{clickable:true}}
        Autoplay={{delay:2000 , disableOnInteraction:true}}
        modules={[FreeMode,Pagination,Autoplay]}
      >
        {list3.length > 0 && list3.map((item) => (
          <SwiperSlide key={item.title}>
            {
              item.image?(
                <div className="content-wrapper">
              <div className="image-container">
                <img src={item.image} alt={item.studentName} />
              </div>
              <div className="text-container">
                <h2 style={{color:"green"}}>{item.title}</h2>
                <p>{item.message}</p>
                <p><strong>{item.studentName}</strong></p>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
              ):(
                <span>{item.title}</span>
              )
            }
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
        }

        .swiper-container {
          width: 100%;
          height: 100%;
        }

        .swiper-wrapper {
          display: flex;
        }

        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 400px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .content-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 80%;
          max-width: 1200px;
        }

        .image-container {
          flex: 1;
          padding: 20px;
        }

        .image-container img {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }

        .text-container {
          flex: 2;
          padding: 20px;
        }

        .text-container h2 {
          margin-top: 0;
        }

        .text-container p {
          margin-bottom: 10px;
        }
        .text-container title{
        color : green
        }
      `}</style>
    </div>
    </div>
  );
};

export default Home;
