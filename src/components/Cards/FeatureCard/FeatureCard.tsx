import Image from "next/image";
import { useRef, useEffect } from "react";
// import { cn } from "@/utils/cn";
type FeatureCardPropType = {
  heading: string;
  subHeading: string;
  logo: string;
  borderStyle: string;
};

export const FeatureCard = ({ cardInfo, index, array }: any) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      {
        rootMargin: '-75px 0px', // Adjust this value to control when the fade-in should start
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);


  const { borderStyle, heading, subHeading, logo } = cardInfo;
  return (
    <div ref={cardRef} style={{
      // background: "linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(41, 48, 46, 0.20) 53%, rgba(255, 255, 255, 0.20) 100%)"

    }} className={index === array.length -1 ? "md:basis-1/2 bg-none w-full  fade-in pb-[1px]" :"md:basis-1/2 bg-gradient-to-right md:bg-none w-full fade-in pb-[1px]"}>
      <div className="flex pb-6 w-full bg-[#FBF8F6] justify-start items-center  gap-6">
        <Image src={logo} alt="" />
        <div className="">
          <h1 className="whitespace-nowrap font-garnett text-[#2A2B2B] font-extrabold text-[22px] md:text-[28px]">{heading}</h1>
          <h2 className="text-[#1D1D1D] font-normal font-garnett text-sm">{subHeading}</h2>
        </div>
      </div>
    </div>
  );
};
