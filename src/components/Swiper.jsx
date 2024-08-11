"use client"
import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';


const Sliding = ({list2}) =>{

  return (
    <div className="container-fluid mx-auto  pt-14  justify-center bg-ecedeb " >
        <h3 className="font-medium text-2xl pb-4 text-center font-mono"> OUR PROMISE</h3>
        <div >
          <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{clickable:true}}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          modules={[FreeMode,Pagination,Autoplay]}  > 

              { list2.length > 0 && list2.map((item)=>(
                <SwiperSlide key = {item.title} style={{marginBottom:"3000px"}} >
                  {
                    item.thumb ?(
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom:"40px", marginTop:"40px"}}>
                        <img  style={{ width: 'auto', height: '70px', maxWidth: '100px', maxHeight: '100px' }}
                            src = {item.thumb} 
                            alt = {item.title}/>
                        <span style={{fontWeight: '550', fontFamily: 'Roboto, sans-serif', fontSize:"19px"}}>
                          {item.title}
                        </span>
                        <p>{item.desci}</p>
                      </div>
                    ):(
                      <span>{item.title}</span>
                    )
                  }
                </SwiperSlide>
              ))
              }
          </Swiper>
        </div>
    </div>
  )
}

export default Sliding