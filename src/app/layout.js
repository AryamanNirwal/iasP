
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import Navbar from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";


const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  let navMenu = [];
  let mobile = [];
  let email = [];

  let about1 = [];


  let headers = { apihost: 'https://portal.platformias.com' };
  let response = await fetch('https://v3.edkt.net/api/s/website/6523c06ced0d152d23abd9c2/data', { headers: headers });
  response = await response.json();

  if(response?.menus.hasOwnProperty('PRIMARY_MENU')&&response.menus.PRIMARY_MENU?.items.length){
    navMenu = response.menus.PRIMARY_MENU.items
    console.log(navMenu)
  }
  if(response?.website.hasOwnProperty('contactNumber')&&response?.website?.contactNumber?.length){
    mobile = response.website.contactNumber
  }
  if(response?.website.hasOwnProperty('email')&&response?.website?.email?.length){
    email = response.website.email
  }
  
  return (
    <html lang="en">
      <body className={inter.className}>
      <PrimeReactProvider>
        <HeaderTop mobile={mobile} email={email} />
        <Navbar primaryMenu={navMenu}/>
        {children }
        <Footer />
        <FooterBottom />
        </PrimeReactProvider>
      </body>
    </html>
  );
}
