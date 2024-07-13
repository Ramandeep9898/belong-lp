import { Button } from "../Button/Button";
import { useQuery } from "react-query";
import { BLOG_CONFIG } from "@/config/Blogs.config";
import { BlogCard } from "../Cards/BlogCard/BlogCard";
import getBlogs from "@/hooks/query/useGetBlogs";
// Import Swiper React components
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';

// import './style.css'; 

// import required modules
import { Navigation } from 'swiper/modules';
import Link from "next/link";

export const Blogs = () => {
  const { isLoading, isError, data, error } = getBlogs()
  // console.log(data);

  const { items } = BLOG_CONFIG;

  return (
    <div className="bg-[#FBF8F6] hidden   md:flex  justify-center flex-col items-center pt-[60px] md:px-28">
      <h1 className="text-black font-extrabold text-3xl mb-12">
        Stay Informed
      </h1>
      <Swiper slidesPerView={4} navigation={true} modules={[Navigation]} className="bg-[#FBF8F6]">
        {items.slice(0, 7).map((ele, index) => (
          <SwiperSlide>
            <BlogCard cardInfo={ele} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link target="_blank" href={"https://getbelong.com/blog"}>
      <Button variant="outline" size={"sm"} className="mt-16">View all blogs</Button>
      
      
      </Link>

    </div>
  );
};
