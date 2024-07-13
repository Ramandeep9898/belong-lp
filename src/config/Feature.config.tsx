import card from "@/assets/card.svg";
import reward from "@/assets/reward.svg";
import cashBack from "@/assets/1CashBack.svg";
import zeroForexFree from "@/assets/zeroForexFree.svg";


export const FEATURES_INFO = [
  {
    heading: "1% Cashback",
    subHeading: "on all India spends",
    logo: cashBack,
    borderStyle:
      "md:pb-[1px] md:bg-gradient-to-tr md:from-white md:via-[#29302E33] md:to-[#29302E33] border-none",
  },
  {
    heading: "Metal card",
    subHeading: "For the premium spenders",
    logo: card,
    borderStyle:
      "md:pl-[1px] md:bg-gradient-to-b md:from-white md:via-[#29302E33] md:to-[#29302E33] border-none",
    image: "",
  },
  {
    heading: "0 forex fee",
    subHeading: "So you are stress free when you spend",
    logo: zeroForexFree,
    borderStyle:
      "md:pr-[1.5px] md:bg-gradient-to-bl md:from-[#29302E33]  md:via-white md:to-white border-none",
    image: "",
  },
  {
    heading: "Rewards",
    subHeading: "Spend more, Win more",
    logo: reward,
    borderStyle:
      "md:pt-[1px] md:bg-gradient-to-tr md:from-white md:via-[#29302E33] md:to-[#29302E33] border-none",
    image: "",
  },
];
