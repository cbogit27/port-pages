"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { BsArrowUpRight } from "react-icons/bs";
import { FreeMode, Pagination } from "swiper/modules";
import { projectsData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-auto">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {projectsData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col mb-10 gap-4 group text-gray-400 relative shadow-sm rounded-sm h-[450px] w-[100%] sm:w-[250px] lg:h-[450px] lg:w-[300px] bg-white cursor-pointer">
              <div className="relative">
                <Image
                  src={item.imageUrl}
                  className="object-cover rounded-sm"
                  width={350}
                  height={280}
                  alt={item.title}
                />
              </div>
              <div className="text-gray-800 font-semibold text-sm md:text-md px-2">
                {item.title}
              </div>
              <div className="text-gray-600 font-light text-sm md:text-md px-2">
                {item.description}
              </div>
              <div className="absolute inset-0 bg-gray-800 opacity-10 group-hover:opacity-50" />
              <div className="absolute flex p-2">
                <item.icon className="text-gray-600/20 group-hover:text-gray-400 w-[24px] h-[24px] md:w-[32px] md:h-[32px]" />
              </div>
            <Link href={"https://cbogit27.github.io/inv-pages"} target="_blank">
            <BsArrowUpRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:rotate-45 group-hover:text-gray-800/40 duration-100" />
            
            </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
