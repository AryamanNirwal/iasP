"use client"
import React,{useState} from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
const Contact = () => {
    const[formData,setFormData] = useState({
          name:'',
          email:'',
          phone:'',
          courses:'',
          message:'',
        });
        const handleChange = (e) =>{
          const{name,value} = e.target;
          setFormData({
            ...formData,
            [name]: value
          })
        }
        const handleSubmit = (e) =>{
          e.preventDefault();

          console.log(formData);

          setFormData({
            name:'',
            email:'',
            phone:'',
            courses:'',
            message:'',
          });

        };
  return (
    <div>
        <div>
        <h1 style={{fontFamily:"Lucida Grande,Lucida Sans Unicode,Lucida Sans,Geneva,Verdana,sans-erif" , fontWeight:"lighter" , textAlign:"center" , padding:"2rem", fontSize:"22px"}}>
            CONTACT US
        </h1>
        </div>
        <div className='ContactPage_container'>
        <div style={{marginLeft:"150px"}} className='formContactPage'>
        <form className="form_conatiner" onSubmit={handleSubmit}>

        <div style={{display:'flex',marginBottom:"20px",marginRight:"20px",gap:"27px" }}> 
            <div>
            <input type="text" placeholder='Name' name="name" className="Contact_name_form" value={formData.name} onChange={handleChange}required></input>
            </div>

             <div>
            <input type="email" placeholder='Email' name="email" className="email_form" value={formData.email} onChange={handleChange} required></input>
            </div>
        </div>


         <div style={{display:"flex" , marginBottom:"20px"}}>
          <div>
           <input type="phone" placeholder='phone no' name="phone" className="phone_form" value={formData.phone} onChange={handleChange} required></input>
          </div>

         <div style={{marginLeft:"25px" , marginTop:"7px"}}>
            <select name="courses" id="courses" style={{backgroundColor:"#f9f9f8"}} value={formData.courses} onChange={handleChange} required>
            <option value="select courses">Select Courses</option>
            <option value="civil courses">Civil Courses</option>
            </select>
            </div>
         </div>

        <div>
         <textarea type="text" placeholder='Your Message' name="message" className='textAreaa' value={formData.message} onChange={handleChange}></textarea>
          </div>


           <button type="submit" className='submit_button2'>Submit</button>

        </form>
        </div>
        <div className='AddressINContact_container'>
            <div style={{display:"flex" , alignItems:"center"}}>
                <div> 
                    <IoLocationSharp className='Icon'/>
                </div>
                <div className='AddressInfo'>
                    <h1 style={{fontSize:"2rem",fontWeight:"400",}}>
                         Address
                    </h1>
                    <span>A-709, Rohini Heights Complex, near National Institute for Disaster Management, Sector-29, Rohini, Delhi - 110042</span>
                </div>
            </div>
            <br/>

            <div style={{display:"flex" , alignItems:"center"}}>
                <div> 
                    <FaPhone className='Icon'/>
                </div>
                <div className='AddressInfo'>
                    <h1 style={{fontSize:"2rem",fontWeight:"400"}}>
                         Phone
                    </h1>
                    <span>9654614282</span>
                </div>
            </div>
            <br/>
            <div style={{display:"flex" , alignItems:"center"}}>
                <div> 
                    <MdOutlineMail className='Icon'/>
                </div>
                <div className='AddressInfo'>
                    <h1 style={{fontSize:"2rem",fontWeight:"400"}}>
                         Email
                    </h1>
                    <span>platform4@gmail.com</span>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Contact