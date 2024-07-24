import Image from "next/image";
import { VETERANS_CONFIG } from "@/config/Veterans.config";
import vetHeader from "@/assets/vetHeader.svg";
import vetHeaderMobile from "@/assets/vetMobile.svg";
import ankur from "@/assets/lp/veterans/ankur.png";
import ayush from "@/assets/lp/veterans/ayush.png";
import savitri from "@/assets/lp/veterans/savitri.png";
import sai from "@/assets/lp/veterans/sai.png";
import bgTexture from "@/assets/bg-texture.png";

export const Veterans = () => {
  const { title, images, description } = VETERANS_CONFIG;

  return (
    <div
      style={{
        backgroundImage: `url(${bgTexture.src})`,
      }}
      className="flex w-full flex-col justify-center items-center bg-[#C9C2B8] pb-12 relative"
    >
      <Image src={vetHeader} alt="" className="w-full hidden md:block " />
      <Image
        src={vetHeaderMobile}
        alt=""
        className="w-full md:hidden object-cover"
      />
      <div className="p-7 pt-0 z-10 flex flex-col justify-center items-center">
        <h1 className="text-[28px] md:text-3xl font-garnett font-bold text-[#232222] z-10 mb-14 max-w-[400px] text-center">
          {title}
        </h1>
        {/* <div className=" flex flex-wrap relative mb-14 !w-[285px] h-[350px] md:static md:!w-auto md:h-auto">
          {images.map((image, index) => (
            <img key={index} src={image.image.src} alt={image.alt} className={image.style} />
          ))}
        </div> */}
        <div className=" flex flex-wrap relative mb-14 !w-[285px] h-[350px] md:static md:!w-auto md:h-auto">
          <img
            src={sai.src}
            alt={"sai"}
            className="absolute w-[160px] md:w-[180px] top-0 left-0 md:static"
          />
          <img
            src={ankur.src}
            alt={"sai"}
            className="absolute top-0  w-[160px] md:w-[180px]  left-[120px] md:static"
          />
          <img
            src={ayush.src}
            alt={"sai"}
            className="absolute bottom-0  w-[160px]  md:w-[180px] rotate-[-5deg] md:rotate-0 left-0 md:static"
          />
          <img
            src={savitri.src}
            alt={"sai"}
            className="absolute bottom-[-20px] md:w-[180px]  w-[160px]  rotate-[-5deg] md:rotate-0 left-[120px] md:static"
          />
        </div>
        <p className=" font-garnett  text-[#162520] text-lg font-normal md:text-xl z-10 text-center max-w-[820px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Veterans;
