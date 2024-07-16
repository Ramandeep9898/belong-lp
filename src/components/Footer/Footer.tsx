import Image from "next/image";
import logo from "@/assets/belongYellowLogo.svg";
import Link from "next/link";
import footerBorder from "@/assets/lp/footer/footerBorder.png"

const FOOTER_CONFIG = {
  logo: logo,

  title: "Seamless payments, wherever life takes you.",
  links: [
    {
      name: "Privacy Policy",
      link: "https://www.betafront.tech/resources/privacy-statement",
    },
    {
      name: "Terms & Conditions",
      link: "https://www.betafront.tech/resources/tnc",
    },
  ],
  copyright:"© Copyright 2024"
};
export const Footer = () => {
  const { logo, title, links, copyright } = FOOTER_CONFIG;
  return (
    <div className="bg-[#34335A] pt-[75px] relative pb-11 px-9 flex flex-col justify-center items-center">
      <Image src={footerBorder} alt="" className="absolute top-[-15px] w-full"/>
      <Image src={logo} alt="" className="mb-12"/>
      <h1 className="text-3xl font-extrabold max-w-[450px] text-center text-[#fff] mb-[28px]">{title}</h1>

      <div className="flex mb-12">
      {links.map((link, index)=>(
        <div key={index} className={index !== links.length - 1 ? "border-r-[1.5px] pr-6 border-solid border-[#AEADBD] leading-[1]": "pl-6 leading-[1]"}>
            <Link href={link.link}>
              <p className="text-[#AEADBD] font-normal">{link.name}</p>
            </Link>
        </div>
      ))}
      </div>
      <div className="border-t-[1.3px] border-solid border-[#AEADBD] mb-5 opacity-20 w-full"></div>
      <p className="text-[#AEADBD] font-light">{copyright}</p>
      
    </div>
  );
};
