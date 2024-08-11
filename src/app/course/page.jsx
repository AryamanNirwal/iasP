import CoursesMain from "@/components/CoursesMain"
import CoursesNavbar from "@/components/CoursesNavbar"
import CoursesNavbar2 from "@/components/CoursesNavbar2"


export default async function Course  () {
  return (
    <div>
        <div>
            <h1 className="font-medium text-2xl" style={{fontFamily:"Lucida Grande,Lucida Sans Unicode,Lucida Sans,Geneva,Verdana,sans-erif" , fontweight:"400", textAlign:"center",paddingTop:"2rem" , fontSize:"22px", width:"1200px",margin:"0 auto"}}>
            PLATFORM IAS POPULAR COURSES 
             </h1>
        </div><br/><br/>
        <div>
            {/* <CoursesNavbar  /> */}
            {/* <CoursesNavbar2 /> */}
            <CoursesMain  />
            <br/>
        </div>
    </div>
  )
}

