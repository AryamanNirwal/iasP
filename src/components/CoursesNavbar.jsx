"use client"
import Link from "next/link";
import React, {useState} from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { FaPencilRuler } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import CoursesMain from "./CoursesMain";


  
  const CoursesNavbar = ({ eduStandard , fetchCourses , setRowsPerPage }) => {
       const handleButtonClick = () =>{
        setRowsPerPage(2);
        fetchCourses(2);
       }
  return (
    <div>
      <div
        style={{
          backgroundColor: "#3d3d3d",
          display: "flex",
          width: "1200px",
          margin: "0 auto",
        }}
      >

        <div className="coursesNavbar_container">
          <button
            className="GS_ESSAY_MENTORSHIP_button"
            onClick={handleButtonClick}
            style={{ color: "white", marginLeft: "10px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                letterSpacing: "2px",
                gap: "10px",
              }}
            >
              <FaGraduationCap color="white" />
              GS+ESSAY MENTORSHIP
              
            </div>
          </button>

          <button
            className="OPTIMAL_button"
            onClick={fetchCourses}
            style={{ color: "white", marginLeft: "10px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                letterSpacing: "2px",
                gap: "10px",
              }}
            >
              <FaAward color="white" />
              OPTIMAL EVALUATION
            </div>
          </button>

          <button
            className="COMBO_button"
            href="#"
            style={{ color: "white", marginLeft: "10px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                letterSpacing: "2px",
                gap: "10px",
              }}
            >
              <FaPencilRuler color="white" />
              COMBO EVALUATION
            </div>
          </button>

          <button
            className="TAKE_A_DEMO_button"
            href="#"
            style={{ color: "white", marginLeft: "10px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                letterSpacing: "2px",
              }}
            >
              <FaRegNewspaper color="white" />
              TAKE A DEMO
            </div>
          </button>
          {/* {eduStandard.length > 0 && eduStandard.map((item)=>(
          <button className='courseContainer_button' style={{ color:'white',marginLeft: '10px' }} key = {item.id}>
            { item.name?(
              <span href = {item.name}> {item.name} </span>
            ):(
              <span>{item.name}</span>
            )
            }
          </button>
        ))
        } */}
        </div>
      </div>
    </div>
  );
};

export default CoursesNavbar;
