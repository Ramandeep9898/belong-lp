import { Inter } from "next/font/google";
import { Features } from "@/components/lp/Features/Features";
import {GetEarlyAccess} from "@/components/lp/GetEarlyAccess/GetEarlyAccess"
import { Header } from "@/components/lp/HeroSection/HeroSection";
import Veterans from "@/components/lp/Veterans/Veterans";
import { Footer } from "@/components/lp/Footer/Footer";
import { Blogs } from "@/components/Blogs/Blogs";
import { HeaderMobile } from "@/components/lp/HeroSection/HeroSection";
import { GetEarlyAccessMobile } from "@/components/lp/HeroSection/HeroSection";


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
