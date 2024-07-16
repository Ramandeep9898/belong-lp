import { Inter } from "next/font/google";
import { Features } from "@/components/Features/Features";
import {GetEarlyAccess} from "@/components/GetEarlyAccess/GetEarlyAccess"
import { Header } from "@/components/HeroSection/HeroSection";
import Veterans from "@/components/Veterans/Veterans";
import { Footer } from "@/components/Footer/Footer";
import { Blogs } from "@/components/Blogs/Blogs";
import { HeaderMobile } from "@/components/HeroSection/HeroSection";

import { GetEarlyAccessMobile } from "@/components/HeroSection/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Header/>
      <HeaderMobile/>
      <GetEarlyAccessMobile/>
      <Features/>
      {/* <GetEarlyAccess /> */}
      <Blogs/>
      <Veterans/>
      <Footer/>
    </div>
  );
}
