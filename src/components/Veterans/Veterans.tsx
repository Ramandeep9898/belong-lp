import React from "react";
import bgImage from "@/assets/particalsEffect.svg";
import Image from "next/image";
import { VETERANS_CONFIG } from "@/config/Veterans.config";
import vetHeader from "@/assets/vetHeader.svg"
import vetHeaderMobile from "@/assets/vetMobile.svg"

export const Veterans = () => {
  const { title, images, description } = VETERANS_CONFIG;

  return (
    <div className="flex  flex-col justify-center items-center bg-[#C9C2B8] pb-12 relative">
      <Image src={bgImage} alt="" className="absolute top-0 w-full h-full object-cover z-0" />
      <Image src={vetHeader} alt="" className="w-full hidden md:block " />
      <Image src={vetHeaderMobile} alt="" className="w-full md:hidden object-cover" />
      <div className="p-7 z-10 flex flex-col justify-center items-center">
        <h1 className="text-[28px] md:text-3xl font-extrabold text-[#232222] z-10 mb-14 max-w-[400px] text-center">
          {title}
        </h1>
        <div className=" flex flex-wrap relative mb-14 !w-[285px] h-[350px] md:static md:!w-auto md:h-auto">
          {images.map((image, index) => (
            <img key={index} src={image.image.src} alt={image.alt} className={image.style} />
          ))}
        </div>
        <p className="text-[#162520] text-lg font-normal md:text-xl z-10 text-center max-w-[820px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Veterans;
