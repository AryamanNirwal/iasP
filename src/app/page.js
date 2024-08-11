import Image from "next/image";
import Hero from "@/components/Hero";
import NewBanner from "@/components/NewBanner";
import CoursesSection from "@/components/CoursesSection";
import Slider from "@/components/Slider";
import Slider2 from "@/components/Slider2";
import LearnVideo from "@/components/vd2";
import HaveQueries from "@/components/HaveQueries";
import { sendStatusCode } from "next/dist/server/api-utils";



export default async function Home() {


  let eduStandard = [];

  let headers = { apihost: 'https://portal.platformias.com' };
  let secondResponse = await fetch('https://v3.edkt.net/api/s/frontpage/__home',{headers : headers}); 
  secondResponse = await secondResponse.json();
  console.log(secondResponse.contentBlock) 

  // if ( secondResponse?.contentBlock[0].advanceData.type=='SLIDER'&&secondResponse?.contentBlock[0]?.advanceData?.data?.slides) {
  //   slides = secondResponse?.contentBlock[0]?.advanceData?.data?.slides;
  //   // console.log(secondResponse.contentBlock.advanceData.data.slides)
  // }
  // if(secondResponse?.contentBlock[1].advanceData.type=='LIST' && secondResponse?.contentBlock[1]?.advanceData?.data){
  //   list = secondResponse?.contentBlock[1]?.advanceData?.data;

  // }
  // if(secondResponse?.contentBlock[2].advanceData.type=='LIST' && secondResponse?.contentBlock[2]?.advanceData?.data){
  //   list2 = secondResponse?.contentBlock[2]?.advanceData?.data;

  // }
  // if(secondResponse?.contentBlock[3].advanceData.type=='TESTIMONIAL' && secondResponse?.contentBlock[3]?.advanceData?.data){
  //   list3 = secondResponse?.contentBlock[3]?.advanceData?.data;
  // }
  // if(secondResponse?.contentBlock[4].advanceData.type=='VIDEO' && secondResponse?.contentBlock[4]?.advanceData?.data){
  //   video = secondResponse?.contentBlock[4]?.advanceData?.data;
  // }
  // if(secondResponse?.contentBlock[5].advanceData.type=='LIST' && secondResponse?.contentBlock[5]?.advanceData?.data){
  //   query = secondResponse?.contentBlock[5]?.advanceData?.data;
  // }
  // if(secondResponse?.contentBlock[6].advanceData.type=='COURSE' && secondResponse?.contentBlock[6]?.advanceData?.eduStandard){
  //   course = secondResponse?.contentBlock[6]?.advanceData?.eduStandard;
  // }


  return (
    <main>
      {secondResponse?.contentBlock?.length && secondResponse.contentBlock.map((el, index) => (
        <div key={index}>
          {el?.shortCode=='MAIN_CONTENT'&&el.advanceData.type=='SLIDER'&&el.advanceData.data.slides.length&&<Hero slides={el.advanceData.data.slides}/>}
          {el?.shortCode=='WHY_CHOOSE_US'&&el.advanceData.type=='LIST'&&el.advanceData.data.length&&<NewBanner list={el.advanceData.data}/>}
          {el?.shortCode=='COURSE' && el.advanceData.type == 'COURSE'&& el.advanceData.data.length && <CoursesSection eduStandard = {eduStandard}/>}
          {el?.shortCode=='WHY_CHOOSE_PLATFORM'&&el.advanceData.type=='LIST'&&el.advanceData.data.length&&<Slider list2={el.advanceData.data}/>}
          {el?.shortCode=='TESTIMONIALS' && el.advanceData.type== 'TESTIMONIAL' && el.advanceData.data.length && <Slider2 list3 = {el.advanceData.data}/>}
          {el?.shortCode=='VIDEO_GALLERY' && el.advanceData.type== 'VIDEO' && el.advanceData.data.length && <LearnVideo video = {el.advanceData.data}/>}
          {el?.shortCode=='GET_IN_TOUCH'&&el.advanceData.type=='LIST'&&el.advanceData.data.length&&<HaveQueries query={el.advanceData.data}/>}
          
        </div>

        //  <h1 key={index} className="font-medium text-2xl" style={{fontFamily:"Lucida Grande,Lucida Sans Unicode,Lucida Sans,Geneva,Verdana,sans-erif" , fontweight:"400", textAlign:"center",paddingTop:"2rem" , fontSize:"22px", width:"1200px",margin:"0 auto"}}>
        //  {el.heading&&<span>{el.heading}</span>}
        //  </h1> 
        // (el.advancedDataMAIN_CONTENT)
        // <Hero slides={slides}/>

      ))}
      {/* <Hero slides={slides}/> */}
      {/* <NewBanner list={list}/> */}
      <CoursesSection eduStandard={eduStandard}/>
      {/* <Slider list2 = {list2}/> */}
      {/* <Slider2 list3 = {list3}/> */}
      {/* <LearnVideo video = {video}/> */}
      {/* <HaveQueries query = {query}/> */}
    </main>
  );
}
