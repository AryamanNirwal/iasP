
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { IoPerson } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

function Modal({ setOpenModal, modalType, setModalType }) {
    const [date, setDate] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    const gender = [
        { name: 'Male' },
        { name: 'Female' },
        { name: 'Transgender' },
    ];

    const handleClose = () => {
        setOpenModal(false); 
    };

    const handleOpenRegister = () => {
        setModalType('register'); 
    };

    const handleOpenForgetPassword = () => {
        setModalType('forget'); 
    };

    return (
        <div>
            {modalType === 'login' && (
                <div className="popup_Cont">
                    <div className="modalBackground">
                        <button className="CloseBtn" onClick={handleClose}>
                            X
                        </button>
                        <div style={{ marginTop: "-82px" }}>
                            <form className="Form_Container">
                                <div className="Reg_container">
                                    <label>Reg. Mobile no.</label>
                                    <input className="Reg_input" type="phone" placeholder="Your Registration Mobile no." required />
                                </div>
                                <div className="Pass_container">
                                    <label>Password</label>
                                    <input className="Reg_input" type="password" placeholder="Your Password" required />
                                </div>
                                <button className="loginBtn_container" type="submit">Login</button>
                                <div className="Login_2btn">
                                    <button className="Register_btn" type="button" onClick={handleOpenRegister}>
                                        Register
                                    </button>
                                    <button className="Forget_btn" type="button" onClick={handleOpenForgetPassword}>
                                        Forget Password
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {modalType === 'register' && (
                <div className="popup_Cont">
                    <div className="modal_2_Background">
                        <div>
                            <div style={{ display: "flex", justifyContent: "end" }}>
                                <button style={{ justifyContent: "end", fontSize: "14px" }} onClick={handleClose}>
                                    X
                                </button>
                            </div>

                            <div style={{ display: "flex", justifyContent: "center", marginTop: '-6px', marginBottom: "1.5rem" }}>
                                <h1 style={{ fontSize: "23px" }}>Registration Form</h1>
                            </div>
                            <div>

                                <form >
                                    <div className='FoamBorder_div' style={{ justifyContent: "center", fontWeight: "200" }}>

                                        <h1 style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                            <IoPerson size={20} />
                                            Personal Details
                                        </h1>
                                        <div style={{ display: "flex", gap: "20px" }}>
                                            <div style={{ display: "grid", marginTop: "1rem" }}>


                                                <label style={{ fontWeight: "600" }}>First Name
                                                    <span style={{ color: '#ff0000' }}>*</span>
                                                </label>

                                                <input className='formInput_cont' type="text" placeholder='First Name' required></input>

                                            </div>
                                            <div style={{ display: "grid", marginTop: "1rem" }}>
                                                <label style={{ fontWeight: "600" }}>Last Name
                                                    <span style={{ color: '#ff0000' }}>*</span>
                                                </label>

                                                <input className='formInput_cont' type='text' placeholder='Last Name' required></input>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", gap: "20px" }}>
                                            <div style={{ display: "grid", marginTop: "1rem" }}>
                                                <label style={{ fontWeight: "600" }}>Mobile No
                                                    <span style={{ color: '#ff0000' }}>*</span>
                                                </label>

                                                <input className='formInput_cont' type='text' placeholder='Mobile Number' required></input>
                                            </div>
                                            <div style={{ display: "grid", marginTop: "1rem" }}>
                                                <label style={{ fontWeight: "600" }}>Email Address
                                                    <span style={{ color: '#ff0000' }}>*</span>
                                                </label>

                                                <input className='formInput_cont' type='text' placeholder='Enter Email' required></input>
                                            </div>
                                        </div>


                                        <div style={{ display: "flex", gap: "20px", marginBottom: "1rem" }}>
                                            <div style={{ display: "grid", marginTop: "1rem", marginBottom:"inherit" }} className="card flex justify-content-center">
                                                <label style={{ fontWeight: "600" }}>Date of Birth
                                                    <span style={{ color: '#ff0000' }}>*</span>
                                                </label>

                                                {/* <input className='formInput_cont' type = 'text' placeholder=' '></input> */}
                                                <Calendar 
                                                value= {date}
                                               appendTo={document.body}className='formInputDate_Calender'
                                                onChange={(e) => setDate(e.value)}
                                                dateFormat="dd/mm/yy"
                                                placeholder='D O B ' required />

                                            </div>
                                            <div style={{ display: "grid", marginTop: "1rem" }} className="card flex justify-content-center">
                                                <label style={{ fontWeight: "600" }}>Gender
                                                    <span style={{ color: '#ff0000' }}>*</span>
                                                </label>

                                                {/* <input className='formInput_cont' type = 'text' placeholder=''></input> */}
                                                <Dropdown className='formInputDate_Dropdown' value={selectedGender} onChange={(e) => setSelectedGender(e.value)} options={gender} optionLabel="name"
                                                    placeholder="Gender" required />

                                            </div>
                                        </div>

                                    </div>

                                    <button className='SubmitBtn_signUp'>Submit</button>

                                </form>


                                <div style={{ display: "flex", justifyContent: "end", marginTop: "-30px" }}>
                                    <span> Already Registered?
                                        <button className='SubmitBtn_signUp' onClick={() => setModalType('login')}>Login</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {modalType === 'forget' && (
                <div className="popup_Cont">
                    <div className="modal_3_Background">
                        <div style={{ display: "grid", justifyContent: "end" }}>
                            <div style={{ justifyContent: "end", display: "flex" }}>

                                <button style={{ fontSize: "14px" }} onClick={handleClose}>
                                    X
                                </button>
                            </div>
                            <div>
                                <form>
                                    <div style={{ display: "grid", marginTop: "1rem" }}>
                                        <label>Reg. Mobil No.</label>
                                        <input className="Reg_input" type="phone" placeholder="Type Mobil Number" required />
                                    </div>
                                    <div style={{ marginTop: "20px" }}>
                                        <button className="Register_btn" type="button">
                                            Send OTP
                                        </button>
                                    </div>
                                </form>
                                <div style={{ display: "grid", justifyContent: "end", marginTop: "-30px", gap: "20px" }}>
                                    <button className="Forget_btn" type="button" onClick={() => setModalType('login')}>
                                        Back
                                    </button>
                                    <button className="Register_btn" type="button" onClick={() => setModalType('register')}>Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
