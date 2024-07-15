import headerBg from "@/assets/hero-texture.png";
import heroBg from "@/assets/heroBg.svg";
import logo from "@/assets/logoBlackNav.svg"
import heroCloudsBg from "@/assets/clouds.svg";
import buildingOne from "@/assets/buildingOne.svg";
import buildingTwo from "@/assets/buildingTwo.svg";
import card from "@/assets/heroCard.svg";
import Image from "next/image";
import { Button } from "../Button/Button";
import { Navbar } from "../Navbar/Navbar";
import cloudMobile from "@/assets/cloudsMobile.svg"
import React, { useState, useEffect } from 'react';
import mobileBuilding from "@/assets/mobileBuildings.svg"
import { IoMenuOutline } from "react-icons/io5";
import BtnShadow from "@/assets/shadow.svg"


const Heading = "First NRI focused  card";

export const Header = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsExpanded(false)
    }, 50)
  }, []);

  return (
    <div style={{
      background: "linear-gradient(130deg, #E5CDA8 9.14%, #BA9E73 72.99%)",
    }} className="relative  w-full h-screen hidden md:block">
      <Navbar />
      <div className="relative w-full h-full">
        <Image
          src={headerBg}
          alt=""
          className=" inset-0 object-cover bg-repeat  transition-all duration-2000ms will-change-transform -z-1"
        />
      </div>

      

      <Image
        src={heroCloudsBg}
        alt=""
        className="absolute w-full object-cover rounded-b-xl transition-all will-change-transform duration-[2000ms]"
        style={{
          opacity: isExpanded ? 0 : 1,
          top: isExpanded ? '6rem' : '7rem'
        }}
      />

      <Image
        src={buildingOne}
        alt=""
        className="absolute left-0 w-[500px] object-cover rounded-b-xl transition-all will-change-transform duration-[2000ms]"
        style={{
          bottom: isExpanded ? '-250px' : '-1px'
        }}
      />
      <Image
        src={buildingTwo}
        alt=""
        className="absolute w-[500px] right-0 object-cover rounded-b-xl transition-all will-change-transform duration-[2000ms]"
        style={{
          bottom: isExpanded ? '-250px' : '-1px'
        }}
      />
      <Image
        src={card}
        alt=""
        className={`absolute rotate-[2deg] h-[530px] w-[300px]  md:left-[53%] left-[41%] object-cover rounded-b-xl transition-all will-change-transform duration-[2000ms] animate-[oscillate_2s_infinite_cubic-bezier(0.42,0,0.58,1)]`}
        style={{
          bottom: isExpanded ? '-400px' : '-175px'
        }}
      />
      <div className="absolute top-0 flex w-full justify-center items-center z-20 flex-col">
        <h1 className="font-sans font-extrabold text-6xl w-[400px] text-center mb-16 mt-20 text-[#2D2D2C]">
          {Heading}
        </h1>
        <div className="relative">
          <Button size={"lg"} className="z-10 relative">Get Early Access</Button>
          <Image className="absolute bottom-[-10px] z-0" src={BtnShadow} alt="" />
        </div>

      </div>

      <div
        className="absolute bg-gradient-to-tr from-[#FFED8C] via-[#D5BC96] to-[#D5BC96] bottom-0  h-10 rounded-b-xl w-full"></div>
    </div>
  );
};

export const HeaderMobile = () => {

  const [isExpanded, setIsExpanded] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isTransition, setIsTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsExpanded(false)
    }, 50);
    setTimeout(() => {
      setIsTransition(false)
    }, 3500);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full relative transition-all duration-[3000ms] md:hidden block"
      style={{ height: isExpanded ? '100vh' : '80vh' }}
    >
      {/* <Navbar/> */}
      <Image
        priority
        src={heroBg}
        alt=""
        className=" h-full w-full object-cover rounded-b-xl transition-all will-change-transform duration-[3000ms]"
        style={{ height: isExpanded ? '100vh' : '80vh' }}
      />

      <Image
        src={cloudMobile}
        alt=""
        className="absolute  bottom-36 w-full objex1ct-cover rounded-b-xl z-20 transition-all will-change-transform duration-[3000ms]"
        style={{
          opacity: isExpanded ? 0 : 1,
          top: isExpanded ? '10rem' : '16rem'
        }}
      />

      <Image
        src={mobileBuilding}
        alt=""
        className={`absolute bottom-[-100px] left-0 w-[500px] object-cover z-30 rounded-b-xl ${isTransition ? 'transition-all' : 'transition-none'} will-change-transform duration-[3000ms]`}
        style={{
          // transition: isTransition ? 'all' : 'none',
          bottom: isExpanded ? '-650px' : `-${Math.min(40, scrollY / 4 + 5)}px`
        }}
      />

      <Image
        src={card}
        alt=""
        className={`absolute left-[52%] transform -translate-x-1/2 w-[310px] z-20 object-cover rounded-b-xl ${isTransition ? 'transition-all' : 'transition-none'} will-change-transform duration-[2000ms] ${scrollY < 256 ? 'animate-[oscillate_2s_infinite_cubic-bezier(0.42,0,0.58,1)]' : ''}`}
        style={{
          bottom: isExpanded ? '-750px' : `-${Math.min(200, scrollY / 2)}px`
        }}
      />
      <div className="absolute top-0 z-[5000000] w-full">

        <div className="relative flex w-full justify-center items-center z-20 flex-col">
          <div className="fixed flex w-full mt-8 transition-all duration-[3000ms]"
            style={{
              top: isExpanded ? '-250px' : '0',
            }}
          >
            <IoMenuOutline className="h-8 w-8 ml-8" /> <Image
              src={logo}
              className="h-8 w-auto mx-auto -translate-x-6"
              alt=""
            />
          </div>
          <h1 className="relative font-extrabold text-5xl w-[310px] text-center mb-16 mt-20 text-[#2D2D2C] transition-all will-change-transform duration-[3000ms]"
            style={{
              top: isExpanded ? '-800px' : '30px'
            }}
          >
            {Heading}
          </h1>
        </div>

      </div>
    </div>
  );
};


export const GetEarlyAccessMobile = () => {
  return (
    <div className="w-full fixed z-[40050]  flex justify-center items-center mt-6 ">
      <Button style={{
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"

      }} size={"lg"} className="relative backdrop-blur z-10 text-lg">Get Early Access</Button>
      {/* <Image className="absolute bottom-[-10px] z-0" src={BtnShadow} alt=""/> */}

    </div>
  )
}