import { Button } from "../Button/Button";
import { BLOG_CONFIG } from "@/config/Blogs.config";
import { BlogCard } from "../Cards/BlogCard/BlogCard";
import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { isMobileScreen } from "@/utils/isMobileScreen";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Blogs: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () => {
        setActiveIndex(swiperRef.current.activeIndex);
      });
    }
  }, []);

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
          onSwiper={(swiper: any) => {
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
        <div className="hidden md:block relative top-[-170px]">
          <div
            className={activeIndex === 3 ? "hidden" : "absolute right-[-60px]"}
          >
            <div className="bg-black w-[35px] h-[35px] blur-sm rounded-full relative left-[8px] top-[-1.5px]"></div>
            <button
              onClick={() => {
                swiperRef.current?.slideNext();
              }}
              className=" text-[#0E424A] rounded-full relative top-[-45px] bg-[#F2D9B5] border-[#D8C09F] border-[1px] border-solid p-3 color-[#0E424A]"
            >
              <HiOutlineArrowRight size={18} />
            </button>
          </div>

          <div
            className={activeIndex === 0 ? "hidden" : "absolute left-[-80px]"}
          >
            <div className="bg-black w-[38px] h-[38px] blur-sm rounded-full relative right-[1px] top-[-1.5px]"></div>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className=" text-[#0E424A] rounded-full rotate-180 relative top-[-45px] bg-[#F2D9B5] border-[#D8C09F] border-[1px] border-solid p-3 color-[#0E424A]"
            >
              <HiOutlineArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <Link
        target="_blank"
        href={"https://getbelong.com/blog"}
        className="mb-4"
      >
        <Button variant="outline" size={"sm"} className="mt-16 font-garnett">
          View all blogs
        </Button>
      </Link>
    </div>
  );
};
