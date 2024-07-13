import React from "react";
import bgImage from "@/assets/particalsEffect.svg";
import Image from "next/image";
import headerPicture from "@/assets/header.svg";
import { VETERANS_CONFIG } from "@/config/Veterans.config";

export const Veterans = () => {
  const { title, images, description } = VETERANS_CONFIG;

  return (
    <div className="flex flex-col justify-center items-center bg-[#C9C2B8] pb-12 relative">
      <Image src={bgImage} alt="" className="absolute top-0 h-full object-none z-0" />
      <Image src={headerPicture} alt="" className="w-full object-none" />
      <h1 className="text-3xl font-extrabold text-[#232222] z-10 mb-14 max-w-[400px] text-center">
        {title}
      </h1>
      {/* Render images if needed */}
      <div className="flex-wrap mb-14 z-10 flex ">
        {images.map((image, index) => (
          <Image key={index} src={image.image.src} alt={image.alt} />
        ))}
      </div>
      {/* Render description */}
      <p className="text-[#162520] font-normal text-xl z-10 text-center max-w-[820px]">
        {description}
      </p>
    </div>
  );
};

export default Veterans;
