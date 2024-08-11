"use client"
import React, { useState } from 'react'
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { AutoComplete} from 'primereact/autocomplete';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from 'primereact/button';



const HaveQueries = ({query}) => {
  const[formData,setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    courses:'',
    message:'',
  }) 
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
    })
    
  }
  const courses = [
    {name : 'Civil Service'},

  ]

  const [loading, setLoading] = useState(false);
  const [Rloading, setRLoading] = useState(false);


    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
      }
      const Rload = () => {
        setRLoading(true);

        setTimeout(() => {
            setRLoading(false);
        }, 2000);
      }

  return (
    <div className="container-fluid mx-auto pt-14 justify-center">
        <div>
            <h1 className="font-medium text-2xl pb-4 text-center font-mono">HAVE QUERIES? LET US CALL YOU</h1>
        </div>
        <div style={{marginLeft:"150px" ,display:"flex"}}  >
          <form className="form_conatiner" onSubmit={handleSubmit}>

            <div style={{display:'flex',marginBottom:"20px",marginRight:"20px",gap:"1rem", justifyContent:"space-between"}}> 


              <div className="card flex justify-content-center w-1/2 ">

            <AutoComplete
                value={formData.name} className="Autocomplete_name" onChange={handleChange} name="name" placeholder="Name" required />
              </div>

              <div style={{width:'50%', }}>

            <AutoComplete
              value={formData.email} className='Autocomplete_name' onChange={handleChange} name = 'email' placeholder='Email' required/>
              </div>
            </div>


            <div style={{display:"flex" , marginBottom:"20px", gap:"1rem"}}>
              <div style = {{width:"50%"}}>
            <AutoComplete
             value={formData.phone} type="phone" className='Autocomplete_name' onChange={handleChange} name = "phone" placeholder='Phone No' required/>
              </div>

             <div style={{  marginRight:"20px",width:"50%"}}>
             <Dropdown id = "courses" name="courses"
             value={formData.courses} onChange={handleChange} options={courses} optionLabel="name" 
                placeholder="Select Course" className="Dropdown_courses"></Dropdown>
               </div>
            </div>

            <div  className="card flex justify-content-center w-100%">
               <InputTextarea style={{width:"100%" , marginRight:"1rem"}}
               type="text"
               value={formData.message} 
               name="message"
               placeholder="Your Message"
               onChange={handleChange}
               rows={5} cols={30}
               className='TextArea_Container' />
            </div>


            <div style={{display:"flex",clear:"both",content:" "}}
            className="card flex flex-wrap justify-content-center gap-3">
              {/* <button type="submit" className='submit_button'>Submit</button> */}
              <Button  type="submit" icon="pi pi-check" loading={loading} onClick={handleSubmit} className='submit_button'> Submit </Button>
            </div>


          </form>




          <div style={{marginLeft:"160px"}} className='Ready_container'>
            <div>
              <h1 className='font-medium text-2xl pb-3 font-mono'> Ready To Join..?</h1>
            </div>
            <div>
              <h5 className='pb-4 font-normal' style={{fontSize:"13px", color:"green"}}>Register Now to get access to Free Videos, Study Material, Quizzes and Updates<br/> related to UPSC Civil Services Exam.</h5>
            </div>

            <div>
              <h1 style={{fontSize:"22px",fontFamily:"monospace",}} className='pb-2'>Phone Number</h1>
              <div > 
              <button className="hidden lg:flex gap-1 pb-4" style={{display:"flex" , alignItems:"center"}}>
                <BsFillPhoneVibrateFill/>
                9654614282
                </button>
              </div>
            </div>


            <div>
              <h1 style={{fontSize:"22px" , fontFamily:"monospace"}} className='pb-2'>Email</h1>
              <div>
              <button className='hidden lg:flex gap-1 pb-4' style={{display:"flex" , alignItems:"center"}}>
              <IoIosMail/>
              platform4ias@gmail.com</button>
              </div>
            </div>


            <div>
              <h1 style={{fontSize:"22px" , fontFamily:"monospace"}} className='pb-2'>WhatsApp</h1>
              <div>
              <button className='hidden lg:flex gap-1' style={{display:"flex" , alignItems:"center"}}>
                <IoLogoWhatsapp/>
              9654614282</button>
              </div>
            </div>


            <div style={{display:"flex"}}>
              {/* <button className='register_now_button'>Register Now</button> */}
              <Button label="Register Now" icon="pi pi-check" loading={Rloading} onClick={Rload} className='register_now_button' />

            </div>
            <div style = {{display:"flex" , flexDirection:"row", }}>
              {query.length>0 && query.map((item)=>(
                <div key = {item.title}>
                  {
                    item.icon?(
                      <a href = {item.link}>
                        <img className = "appImage" src = {item.icon} alt = {item.title} />
                      </a>

                    ):(
                      <span>{item.title}</span>
                    )
                  }
                </div>
              ))
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default HaveQueries