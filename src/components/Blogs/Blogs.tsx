import { Button } from "../Button/Button";
import { BLOG_CONFIG } from "@/config/Blogs.config";
import { BlogCard } from "../Cards/BlogCard/BlogCard";
import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { isMobileScreen } from "@/utils/isMobileScreen";
import { useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
// import { useQuery } from "react-query";
// import getBlogs from "@/hooks/query/useGetBlogs";

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      className="w-10 absolute right-0 rounded-full bg-[#F2D9B5] border-[#D8C09F] border-[1px] border-solid p-3 color-[#0E424A]"
    >
      {children}
      <FaArrowRightLong />
    </button>
  );
};

const SwiperButtonPrevious = ({ children }: any) => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="w-10 absolute left-0 rounded-full rotate-180 bg-[#F2D9B5] border-[#D8C09F] border-[1px] border-solid p-3 color-[#0E424A]"
    >
      {children}
      <FaArrowRightLong />
    </button>
  );
};

export const Blogs: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { items } = BLOG_CONFIG;

  const swiperRef: MutableRefObject<any> = useRef(null);

  useEffect(() => {
    setIsMobile(() => isMobileScreen());
  }, []);
  // const { isLoading, isError, data, error } = getBlogs()

  return (
    <div className="bg-[#FBF8F6] z-0 flex justify-center flex-col items-center pt-[60px] md:px-28">
      <h1 className="text-black font-garnett font-bold text-3xl mb-12">
        Stay Informed
      </h1>

      <div className="w-full block lg:w-full xl:w-[1100px]">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={isMobile ? 1.4 : 4}
          spaceBetween={0}
          navigation={true}
          modules={[Navigation]}
          className="z-40 bg-[#FBF8F6]"
        >
          {items.slice(0, 7).map((ele, index) => (
            <SwiperSlide key={index}>
              <BlogCard cardInfo={ele} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* //TODO: make icon btn  */}
        <div className="relative top-[-140px]">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:block w-10 absolute right-[-60px] rounded-full bg-[#F2D9B5] border-[#D8C09F] border-[1px] border-solid p-3 color-[#0E424A]"
          >
            <FaArrowRightLong />
          </button>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:block w-10 absolute left-[-60px] rotate-180 rounded-full bg-[#F2D9B5] border-[#D8C09F] border-[1px] border-solid p-3 color-[#0E424A]"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      <Link target="_blank" href={"https://getbelong.com/blog"} className="mb-4">
        <Button variant="outline" size={"sm"} className="mt-16 font-garnett">
          View all blogs
        </Button>
      </Link>
    </div>
  );
};
