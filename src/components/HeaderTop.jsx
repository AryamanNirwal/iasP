"use client"
import React,{useState,useEffect} from 'react'

import { FaFacebook,FaWhatsappSquare,FaYoutubeSquare } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import Link from 'next/link';



const HeaderTop = ({mobile,email}) => {
  return (
    <div className = " container111 " style={{backgroundColor:"red",}}>
            <div className="container11101" >

                <div className="hidden lg:flex gap-1"  style={{color:"white",display:"flex", alignItems:"center"}}>
                    <IoCall/>
                    <p>{mobile[0]}</p>
                 <div className="header_top_icon_wrapper5">
                    <HiOutlineMail />
                 </div>
                 <p>{email[0]}</p>
                </div>


                <div className="container11102">
                    <div className="header_top_icon_wrapper1">
                        <FaFacebook/>
                    </div>
                    <div className="header_top_icon_wrapper2">
                        <FaWhatsappSquare/>
                    </div>
                    <div className="header_top_icon_wrapper3">
                        <FaYoutubeSquare/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default HeaderTop