"use client";

import Link from "next/link";
import ArrowRight from "@public/arrow-right.svg";
import NavigationArrow from "@public/arrow-down.svg";
import { CategoryCard } from "../molecules/category-card";
import { useEffect, useRef, useState } from "react";
import { Category } from "@/types/Category";
import leafImage from "@public/hero-icons/image-4.png";
import { getCategories } from "@/services/categories-service";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

export function Categories() {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    (async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    })();
  }, []);

  return (
    <section className="px-[5vw] py-[5rem] my-lg bg-gradient-to-b from-gray-100 to-transparent relative">
      <div className="w-full flex justify-between item-center mb-md">
        <h3 className="text-[2.8rem] font-semibold">Shop By Top Categories</h3>

        <Link className="text-primary flex justify-center gap-sm" href="/shop">
          View All
          <ArrowRight className="w-[2rem] h-[2rem] stroke-primary" />
        </Link>
      </div>
      <div className="relative w-full">
        <div
          ref={navigationPrevRef}
          className="shadow p-3 bg-white rounded-full absolute top-1/2 -left-8 transform -translate-y-1/2 rotate-90 z-10 cursor-pointer"
        >
          <NavigationArrow className="w-[2rem] h-[2rem] stroke-gray-800" />
        </div>
        <div
          ref={navigationNextRef}
          className="shadow p-3 bg-white rounded-full absolute top-1/2 -right-8 transform -translate-y-1/2 -rotate-90 z-10 cursor-pointer"
        >
          <NavigationArrow className="w-[2rem] h-[2rem] stroke-gray-800" />
        </div>
        <Swiper
          spaceBetween={40}
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
            },
            820: {
              slidesPerView: 4,
            },
            900: {
              slidesPerView: 5,
            },
            1170: {
              slidesPerView: 6,
            },
          }}
        >
          {categories?.map((category) => {
            return (
              <SwiperSlide key={category.id}>
                <CategoryCard {...category} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Image
        src={leafImage}
        className="w-[7rem] h-[7rem] absolute -top-[3rem] left-[5vw] -rotate-90"
        alt="green leaf image"
      />
    </section>
  );
}
