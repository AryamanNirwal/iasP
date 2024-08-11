import React from 'react'
import CoursesNavbar from './CoursesNavbar'
import CoursesNavbar2 from './CoursesNavbar2'
import CoursesMain from './CoursesMain'

const CoursesSection = () => {
  return (
    <div className="container-fluid mx-auto  pt-14  justify-center bg-ecedeb " 
    style={{backgroundColor:"#ecedeb" , marginTop:"20px"}}>
        <h3 className="font-medium text-2xl pb-4 text-center font-mono">OUR COURSES</h3>
        <br/>
        <div>
            {/* <CoursesNavbar/> */}
            <CoursesNavbar2/>
            <CoursesMain/>
        </div>

    </div>
  )
}

export default CoursesSection 