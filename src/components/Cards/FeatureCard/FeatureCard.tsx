import Image from "next/image";
type FeatureCardPropType = {
  heading: string;
  subHeading: string;
  logo: string;
  borderStyle: string;
};

export const FeatureCard = ({ cardInfo }: any) => {
  const { borderStyle, heading, subHeading, logo } = cardInfo;
  return (
    <div className={`w-[420px] flex justify-center items-center sm:border-none  ${borderStyle}`}>
      <div className="flex bg-[#FBF8F6] justify-start items-center md:basis-1/2 gap-5">
        <Image src={logo} alt="" />
        <div className="w-[150px]">
          <h1 className="whitespace-nowrap text-[#2A2B2B] font-extrabold text-2xl">{heading}</h1>
          <h2 className="text-[#1D1D1D] text-sm">{subHeading}</h2>
        </div>
      </div>
    </div>
  );
};
