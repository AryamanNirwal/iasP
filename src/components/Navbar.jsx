"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "./Modal";

const Navbar = ({ primaryMenu }) => {
  let mainMenu = [];
  let loginMenu = [];
  if (primaryMenu.length > 3) {
    primaryMenu.forEach((el, i) => {
      if (primaryMenu.length > i + 3) {
        mainMenu.push(el);
      } else {
        loginMenu.push(el);
      }
    });
  }

const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
      setModalType(type);
  };

  const closeModal = () => {
      setModalType(null);
  };

  return (
    <div className="Navbar_container">
      <div className="container">
        <div className="flex w-100 gap-5 max-auto font-medium py-5 text-blackish">
          <div style={{ marginRight: "15rem", marginLeft: "auto" }}>
            <Image src="/logo_platform_ias.png" width={150} height={150} alt="/" />
          </div>
          {mainMenu.length > 0 && mainMenu.map((el) => (
            <span key={el.title}>
              {el.url ? (
                <Link className="navbar_link relative" href={el.url}>
                  {el.title}
                </Link>
              ) : (
                <span>{el.title}</span>
              )}
            </span>
          ))}
          <div>
            <button className="loginMenu" onClick={() => openModal('login')}>
              Login
            </button>
           
            <button className="loginMenu" onClick={() => openModal('register')}>
              Sign Up
            </button>
           
            <button className="loginMenu">
              Student Portal Login
            </button>
            {modalType && <Modal modalType={modalType} setOpenModal={closeModal} setModalType={setModalType} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
