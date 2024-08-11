"use client"
import React , {useState , useEffect} from 'react'
import Image from "next/image";
import Link from 'next/link'

export default function Career () {
  const [careerResponse , setCareerResponse] = useState(null);
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    const fetchCareerData = async () =>{
      try{
        let headers = { apihost: 'https://portal.platformias.com' };
        let careerResponse = await fetch ("https://v3.edkt.net/api/s/frontpage/career" , {headers: headers});
         let data = await careerResponse.json();
         setCareerResponse(data);
      } catch(error){
        console.error("error ", error);
      } finally{
        setLoading(false);
      }
    };
    fetchCareerData();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', margin: 'auto ',display:"flex" , alignItems:"center", width:"50%", position:"relative"}}>
        <div style={{position:"absolute" , top:'0' , bottom:"0" , left:"50%" , animation:"fading 500ms infinite "  ,backgroundColor:"#ff000036" , zIndex:'1' , transform:"translateX(-50%)"}} ></div>


        <Image src="/logo_platform_ias.png" alt="Loading..." width={900} height={50}  className="LoaderImg_cont"/>
      </div>
    );
  }
 
  
  return (
    <div>
          {careerResponse?.contentBlock?.length && careerResponse.contentBlock.map((el,index)=>(
                  <div style={{width:"1200px",margin:"0 auto" , marginBottom:"1rem"}} key = {index}>
                    {el.heading && <h1 style={{fontFamily:"Lucida Grande,Lucida Sans Unicode,Lucida Sans,Geneva,Verdana,sans-erif" , fontWeight:"lighter" , textAlign:"center" , padding:"2rem", fontSize:"22px"}}>
                      {el.heading}
                      </h1>
                    }
                    <div>
                      {el.content && <span 
                        style={{fontFamily:"Lucida Grande,Lucida Sans Unicode,Lucida Sans,Geneva,Verdana,sans-erif" , fontSize:"14px",fontWeight:"10px", letterSpacing:"0px",wordSpacing:"2px"}}
                        dangerouslySetInnerHTML={{ __html: el.content }}/>}
                    </div>
                  </div>
             ))
            }
    </div>
  )
}

