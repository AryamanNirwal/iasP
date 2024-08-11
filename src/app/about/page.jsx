// import { Span } from "next/dist/trace";
// import Image from "next/image"
// import { Button } from 'primereact/button';
// import DOMPurify from "dompurify";


// export default async function About () {
//   let headers = { apihost: 'https://portal.platformias.com' };

//   let aboutResponse = await fetch ("https://v3.edkt.net/api/s/frontpage/about" , {headers: headers});
//   aboutResponse = await aboutResponse.json();
//   console.log(aboutResponse)

//   // if(aboutResponse?.contentBlock.hasOwnProperty('heading')&& aboutResponse.contentBlock?.heading.length){
//   //   about = aboutResponse.contentBlock.heading
//   // }
//   // if(aboutResponse?.contentBlock.hasOwnProperty('content') && aboutResponse.contentBlock?.content.length){
//   //   content = aboutResponse.contentBlock.content
//   // }
//   // if(aboutResponse?.contentBlock.hasOwnProperty('media')&& aboutResponse.contentBlock?.media.length){
//   //   media = aboutResponse.contentBlock.media
//   // }

//   return (
//     <div className="About_MAIN_Cont">
//       {aboutResponse?.contentBlock?.length && aboutResponse.contentBlock.map((el, index) => (
//       <div key = {index} >
//          <h1 className="About_headingContainer">
//             {el.heading&&<span>{el.heading}</span>}
//         </h1>
//         <div className="About_container">

//           <div className="About_imageContainer">
//             {el.media && <img src = {el.media} width={570} height={400}/>}
//           </div>


//           <div className="journey_text_container">
//             {el.content &&  <span className="span_journey_container" dangerouslySetInnerHTML={{ __html: el.content }} />}
//           </div>

//         </div>
//       </div>
//       ))}
//     </div>
//   )
// }



"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from 'primereact/button';

export default function About() {
  const [aboutResponse, setAboutResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        let headers = { apihost: 'https://portal.platformias.com' };
        let response = await fetch("https://v3.edkt.net/api/s/frontpage/about", { headers: headers });
        let data = await response.json();
        setAboutResponse(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
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
      {aboutResponse?.contentBlock?.length && aboutResponse.contentBlock.map((el, index) => (
        <div key={index}>
          <h1 className="About_headingContainer">
            {el.heading && <span>{el.heading}</span>}
          </h1>
          <div className="About_container">
            <div className="About_imageContainer">
              {el.media && <img src={el.media} width={570} height={400} />}
            </div>
            <div className="journey_text_container">
              {el.content && <span className="span_journey_container" dangerouslySetInnerHTML={{ __html: el.content }} />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}



