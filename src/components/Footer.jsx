import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp,FaYoutube,FaTelegram,FaFacebookF } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="container-fluid mx-auto  pt-14 " style={{ backgroundColor:"#3c3c3c",color:"white",}}>
        <div style={{width:"1400px", margin:"0 auto",display:"flex"}}>
        <div style={{width:"300px"}}>
        <Image src="/logo_platform_ias.png" width={300} height={200}/>
        <span style={{fontWeight:"light"}}>
        Platform IAS is the best online platform for IAS Aspirants integrating cost-effectiveness with excellence to impart quality content, guidance and teaching for IAS Exam
        </span>
        </div>


        <div style={{display:"flex", flexDirection:"column", marginLeft:"60px"}}>
            <h1 className='footer_heading'>Useful Links</h1>
            <br/>
                <Link className='footer_item' href="#">About</Link>
                <Link className='footer_item' href="#">Contacts</Link>
                <Link className='footer_item' href="#">Terms & Condition</Link>
                <Link className='footer_item' href="#">Privacy Policy</Link>
                <Link className='footer_item' href="#">Refund & Cancelllatins</Link>
        </div>


        <div style={{display:"flex" , flexDirection:"column",marginLeft:"60px"}}>
            <h1 className='footer_heading'>Our Service</h1><br/>
                <Link className='footer_item' href="#">Blog</Link>
                <Link className='footer_item' href="#">Daily Article</Link>
                <Link className='footer_item' href="#">Career</Link>
        </div>

        <div style={{display:"flex" , flexDirection:"column", width:"400px" , marginLeft:"90px"}}>
            <h1 className='footer_heading'>Contacts</h1>
            <br/>
            <span>
            Address : A-709, Rohini Heights<br/> Complex, near National Institute for<br/> Disaster Management, Sector-29,<br/> Rohini, Delhi - 110042
            </span>
            <Link className='footer_item' href="#">platform4ias@gamil.com</Link>
            <Link className='footer_item' href="#">9654614282</Link>
        </div>

        <div style={{display:"flex" , flexDirection:"column"}} >
            <h1 className='footer_heading'>Social Links</h1><br/>
           <div style={{display:"flex", alignItems:"center",gap:"3px"}} >
             <FaWhatsapp className='w_icon'/>
             <Link className="header_top_icon_wrapper6" href="#"> WhatsApp</Link>
           </div><br/>


           <div style={{display:"flex", alignItems:"center" , gap:"3px"}}>
            <FaYoutube className='yt_icon'/>
            <Link className="header_top_icon_wrapper7" href="#"> YouTube</Link>
            </div><br/>

            <div style={{display:"flex", alignItems:"center", gap:"3px"}}>
            <FaTelegram className='tl_icon'/>
            <Link className="header_top_icon_wrapper8" href="#"> Telegram</Link>
           </div><br/>

           <div style={{display:"flex", alignItems:"center" , gap:"3px"}}>
           <FaFacebookF className='fb_icon'/>
           <Link className="header_top_icon_wrapper9" href="#"> facebook</Link>
           </div>
            
        </div>
        </div>
    </div>
  )
}

export default Footer