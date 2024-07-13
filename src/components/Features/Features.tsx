const FEATURES_SECTION_HEADING = "Here’s what you get with";
import Image from "next/image";
import Logo from "@/assets/belongLogo.png";
import { FeatureCard } from "../Cards/FeatureCard/FeatureCard";
import { FEATURES_INFO } from "@/config/Feature.config";

export const Features = () => {
  return (
    <div className="w-full relative z-[4000]  flex flex-col pt-28 pb-36 justify-center items-center bg-[#FBF8F6]">
      <div className="flex flex-col justify-center items-center">
        <p className="mb-4">{FEATURES_SECTION_HEADING}</p>
        <Image src={Logo} alt="" width={200} className="mb-10 md:mb-4" />
      </div>
      <div className="flex flex-wrap gap-6 md:gap-0 md:w-[1000px] justify-center items-center">
        {FEATURES_INFO.map((item, index) => (
          <FeatureCard key={index} cardInfo={item} />
        ))}
      </div>
    </div>
  );
};
