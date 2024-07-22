import { Button } from "../Button/Button";
import { useQuery } from "react-query";
import { BLOG_CONFIG } from "@/config/Blogs.config";
import { BlogCard } from "../Cards/BlogCard/BlogCard";
// import getBlogs from "@/hooks/query/useGetBlogs";
import React, { useRef, useState, useEffect, useCallback } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { isMobileScreen } from "@/utils/isMobileScreen";

import 'swiper/css';
import { Navigation } from 'swiper/modules';
import Link from "next/link";

export const Blogs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(() => isMobileScreen());
  }, []);
  // const { isLoading, isError, data, error } = getBlogs()

  const { items } = BLOG_CONFIG;

  return (
    <div className="bg-[#FBF8F6] z-0 flex  justify-center flex-col items-center pt-[60px] md:px-28">
      <h1 className="text-black  font-garnett font-extrabold text-3xl mb-12">
        Stay Informed
      </h1>

      <div className="w-full block lg:w-full xl:w-[1100px]">
        <Swiper slidesPerView={isMobile ? 1.4 : 4} spaceBetween={0} navigation={true} modules={[Navigation]} className="z-40  bg-[#FBF8F6]">
          {items.slice(0, 7).map((ele, index) => (
            <SwiperSlide key={index}>
              <BlogCard cardInfo={ele} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      <Link target="_blank" href={"https://getbelong.com/blog"} className="mb-4">
        <Button variant="outline" size={"sm"} className="mt-16  font-garnett">View all blogs</Button>
      </Link>

    </div>
  );
};
