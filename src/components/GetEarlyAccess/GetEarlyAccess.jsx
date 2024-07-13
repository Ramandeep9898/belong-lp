import Image from "next/image";
import getEarlyAccessBg from "@/assets/getEarlyAccessBg.svg";
import getInTouchMobileBg from "@/assets/getInTouchMobileBg.svg"
import { Input } from "../Input/Input";
const HEADING = "Launching first in UAE";
const SUB_HEADING = "Get access to all the early features and benefits";

import { Button } from "../Button/Button";

const GET_EARLY_ACCESS_CONFIG = [
  {
    name: "fullName",
    placeHolder: "Enter full name",
    component: "input",
    type: "text",
    variant: "primary",
  },
  {
    name: "email",
    placeHolder: "Enter Email",
    component: "input",
    type: "email",
    variant: "primary",
  },
];

export const GetEarlyAccess = () => {
  return (
    <div className="flex justify-center items-center relative bg-[#FBF8F6]">
      <Image alt="" src={getEarlyAccessBg} className="p-2 md:p-0 h-full hidden md:block"/>
      <Image alt="" src={getInTouchMobileBg} className="md:p-0 h-full w-full  md:hidden block"/>
      <div className="absolute top-[100px] flex flex-col justify-center items-center max-w-[350px]">
        <h1 className="text-[#E4AE48] text-center text-2xl md:text-4xl font-extrabold mb-3">
          {HEADING}
        </h1>
        <h1 className="text-[#F4F4F4] max-w-[180px] text-sm text-center md:text-base mb-10 ">
          {SUB_HEADING}
        </h1>
        <div className=" flex gap-4 flex-col min-w-[300px] mb-10">
          {GET_EARLY_ACCESS_CONFIG.map((ele, index) => (
            <Input key={index} variant={ele.variant} placeholder={ele.placeHolder} />
          ))}
        </div>
        <Button className="w-fit" size="lg">Get Early Access</Button>

      </div>
    </div>
  );
};
