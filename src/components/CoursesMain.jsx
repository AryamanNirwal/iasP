"use client";
import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { Paginator } from "primereact/paginator";
import CoursesNavbar from "./CoursesNavbar";

export default function CoursesMain() {
  const [courseResponse, setCourseResponse] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(0);
  const [rowPerPage , setRowPerPage] = useState(0);

  // const [GScourseData, setGScourseData] = useState(null);



  const rowsPerPage = 6;



  const fetchCourses = async () => {
      try {
        let headers = { apihost: "https://portal.platformias.com" };
        let response = await fetch(
          `https://v3.edkt.net/api/s/courseprogram?page=${page + 1}&totalCount=true&limit=${rowsPerPage}`,{ headers });
        response = await response.json();
        setCourseResponse(response.data);
        setTotalRecords(response.totalCount);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

 useEffect(()=>{
  fetchCourses(rowPerPage);
 }, [page , rowPerPage]);

  // useEffect(() =>{
  //   const fetchGScourse = async () => {
  //     try {
  //       let headers = { apihost: 'https://portal.platformias.com' };
  //       let response = await fetch('https://v3.edkt.net/api/s/courseprogram?page=${2}totalCount=true', { headers });
  //       response= await response.json();
  //       setGScourseData(response.data);

  //     } catch (error) {
  //       console.error('Error fetching course data:', error);
  //     }
  //   };
  //   fetchGScourse();
        
  
  //   // const handleButtonClick = async () => {
  //   //   await fetchGScourse();
  //   // };
  // },[]);


  const itemTemplate = (course) => {
    return (
      <div
        key={course.id}
        style={{ width: "23%", margin: "1%", height: "300px", width: "300px", }}
      >
        <div style={{border:"1px solid black"}}>
          <img
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            style={{ width: "100%" }}
            src={course.thumb}
            alt={course.name}
          />
          <div
            className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"
            style={{
              backgroundColor: "#f3898a",
              width: "auto",
              height: "116px",
              display: "flex",
            }}
          >
            <div className="text-1xl font-bold text-900">{course.name}</div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">{course.MRP}</span>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "#f3898a",
                  width: "53px",
                  height: "fit-content",
                  display: "flex",
                  marginTop: "auto",
                  marginBottom: "10px",
                  padding: "2px",
                }}
              >
                Details
              </Button>
            </div>
          </div>
        </div>
      </div> 
    );
  };

  const onPageChange = (event) => {
    setPage(event.page);

  };
  const listTemplate = () => {
    return <div className="grid grid-nogutter" style={{display:"flex" , flexWrap:"wrap"}}>{courseResponse.map((course, index) => itemTemplate(course, index))}</div>;
};

  return (
    <div style={{ width: "1200px", margin: "0 auto", padding: "20px" }}>
     <CoursesNavbar fetchCourses={() => fetchCourses(2)} setRowPerPage = {setRowPerPage} />
      <DataView
        value={courseResponse}
        listTemplate={listTemplate} 
        layout="flex" 
        style={{ flexWrap: "wrap" }} 
        rows={rowsPerPage}
        paginator={false}
      />
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Paginator
          style={{ display: "flex", flexWrap: "wrap" }}
          first={page * rowsPerPage}
          rows={rowsPerPage}
          onPageChange={onPageChange}
          template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
          totalRecords={totalRecords}
        />
      </div>
    </div>
  );
}
