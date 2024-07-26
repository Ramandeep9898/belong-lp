import buildingsLeft from "@/assets/lp/hero/buildingsLeft.png";
import buildingsRight from "@/assets/lp/hero/buildingsRight.png";
import cloudsLeft from "@/assets/lp/hero/cloudsLeft.png";
import cloudsRight from "@/assets/lp/hero/cloudsRight.png";
import cloudsMobile from "@/assets/lp/hero/cloudsMobile.png";
import logo from "@/assets/logoBlackNav.svg";
import Image from "next/image";
import { Button } from "../../Button/Button";
import { Navbar } from "../../Navbar/Navbar";
import React, { useState, useEffect } from "react";
import mobileBuilding from "@/assets/mobileBuildings.svg";
import { IoMenuOutline } from "react-icons/io5";
import BtnShadow from "@/assets/shadow.svg";
import card from "@/assets/lp/hero/card.png";
import bgTexture from "@/assets/bg-texture.png";

const Heading = "First Card Made for NRIs";

export const Header = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isTransition, setIsTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsExpanded(false);
    }, 50);
    setTimeout(() => {
      setIsTransition(false);
    }, 3500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        boxShadow: " 0px -6px 12px 0px #00000040 inset",
        background: "linear-gradient(130deg, #E5CDA8 9.14%, #BA9E73 72.99%)",
      }}
      className="flex justify-center items-center w-full"
    >
      <div
        className="flex justify-center items-center w-full"
        style={{
          background: `url(${bgTexture.src})`,
        }}
      >
        <div className="2xl:w-[1500px]  relative font-[var(--font-garnett)] w-full h-screen hidden md:block">
          <Navbar />

          {/* <Image
          src={heroCloudsBg}
          alt=""
          className="absolute w-full object-cover rounded-b-xl transition-all will-change-transform duration-[2000ms]"
          style={{
            opacity: isExpanded ? 0 : 1,
            top: isExpanded ? '6rem' : '7rem'
          }}
          priority

        /> */}
          <div
            className="relative w-full object-cover rounded-b-xl transition-all will-change-transform duration-[2000ms]"
            style={{
              opacity: isExpanded ? 0 : 1,
              top: isExpanded ? "6rem" : "7rem",
            }}
          >
            <Image src={cloudsLeft} alt="cloud" className="absolute left-0" />
            <Image src={cloudsRight} alt="cloud" className="absolute right-0" />
          </div>
          <Image
            src={buildingsLeft}
            alt=""
            className={`absolute bottom-[-50px] left-0 w-[500px] object-cover z-30 rounded-b-xl ${
              isTransition ? "transition-all" : "transition-none"
            } will-change-transform duration-[3000ms]`}
            style={{
              // transition: isTransition ? 'all' : 'none',
              bottom: isExpanded ? "-250px" : `-${Math.min(40, scrollY / 4)}px`,
            }}
            priority
          />
          <Image
            src={buildingsRight}
            alt=""
            className={`absolute bottom-[-50px] right-0 w-[500px] object-cover z-30 rounded-b-xl ${
              isTransition ? "transition-all" : "transition-none"
            } will-change-transform duration-[3000ms]`}
            style={{
              bottom: isExpanded ? "-250px" : `-${Math.min(40, scrollY / 4)}px`,
            }}
            priority
          />
          <Image
            src={card}
            alt=""
            className={`absolute left-[52%] transform -translate-x-1/2 w-[450px] z-20 object-cover rounded-b-xl ${
              isTransition ? "transition-all" : "transition-none"
            } will-change-transform duration-[2000ms] ${
              scrollY < 256
                ? "animate-[oscillate_2s_infinite_cubic-bezier(0.42,0,0.58,1)]"
                : "rotate-[-17deg] duration-[8000ms] transition-all"
            }`}
            style={{
              bottom: isExpanded
                ? "-750px"
                : `-${Math.min(200, scrollY / 2) + 130}px`,
            }}
            priority
            height={400}
            width={400}
          />
          <div className="absolute top-0 flex w-full justify-center items-center z-20 flex-col">
            <h1 className="text-6xl font-garnett font-black w-[450px] md:w-[500px] text-center mb-16 mt-36 text-[#2D2D2C]">
              {Heading}
            </h1>
            {/* <div className="relative">
              <Button size={"lg"} className="z-10  font-garnett relative ">
                Get Early Access
              </Button>
              <Image
                className="absolute bottom-[-10px] z-0"
                src={BtnShadow}
                alt=""
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const HeaderMobile = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isTransition, setIsTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsExpanded(false);
    }, 50);
    setTimeout(() => {
      setIsTransition(false);
    }, 3500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full relative transition-all duration-[3000ms] md:hidden block"
      style={{
        height: isExpanded ? "100vh" : "80vh",
        background: "linear-gradient(130deg, #E5CDA8 9.14%, #BA9E73 72.99%)",
      }}
    >
      <div
        className="w-full relative transition-all duration-[3000ms] md:hidden block"
        style={{
          height: isExpanded ? "100vh" : "80vh",
          backgroundImage: `url(${bgTexture.src})`,
        }}
      >
        {/* <Navbar/> */}

        <Image
          priority
          src={cloudsMobile}
          alt=""
          className="absolute  bottom-36 w-full objex1ct-cover rounded-b-xl z-20 transition-all will-change-transform duration-[3000ms]"
          style={{
            opacity: isExpanded ? 0 : 1,
            top: isExpanded ? "10rem" : "16rem",
          }}
        />

        <Image
          priority
          src={mobileBuilding}
          alt=""
          className={`absolute bottom-[-100px] left-0 w-[500px] object-cover z-30 rounded-b-xl ${
            isTransition ? "transition-all" : "transition-none"
          } will-change-transform duration-[3000ms]`}
          style={{
            // transition: isTransition ? 'all' : 'none',
            bottom: isExpanded
              ? "-650px"
              : `-${Math.min(40, scrollY / 4 + 5)}px`,
          }}
        />

        <Image
          priority
          src={card}
          alt=""
          className={`absolute left-[52%] transform -translate-x-1/2 w-[310px] z-20 object-cover rounded-b-xl ${
            isTransition ? "transition-all" : "transition-none"
          } will-change-transform duration-[2000ms] ${
            scrollY < 256
              ? "animate-[oscillate_2s_infinite_cubic-bezier(0.42,0,0.58,1)]"
              : ""
          }`}
          style={{
            bottom: isExpanded ? "-750px" : `-${Math.min(200, scrollY / 2)}px`,
          }}
        />
        <div className="absolute top-0 z-[5000000] w-full">
          <div className="relative flex w-full justify-center items-center z-20 flex-col">
            <div
              className="fixed flex w-full mt-8 transition-all duration-[3000ms]"
              style={{
                top: isExpanded ? "-250px" : "0",
              }}
            >
              <IoMenuOutline className="h-8 w-8 ml-8" />{" "}
              <Image
                src={logo}
                className="h-8 w-auto mx-auto -translate-x-6"
                alt=""
              />
            </div>
            <h1
              className="relative  font-garnett font-extrabold text-5xl w-[310px] text-center mb-16 mt-20 text-[#2D2D2C] transition-all will-change-transform duration-[3000ms]"
              style={{
                top: isExpanded ? "-800px" : "30px",
              }}
            >
              {Heading}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export const GetEarlyAccessMobile = () => {
  return (
    <div className="w-full fixed z-[40050]  flex justify-center items-center mt-6 md:hidden">
      <Button
        style={{
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        }}
        size={"lg"}
        className="relative backdrop-blur  font-garnett z-10 text-base "
      >
        Get Early Access
      </Button>
      {/* <Image className="absolute bottom-[-10px] z-0" src={BtnShadow} alt=""/> */}
    </div>
  );
};
