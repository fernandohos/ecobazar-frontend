"use client";

import Image from "next/image";
import { HeroBg } from "../atoms/hero-background";
import heroImage from "@public/hero-image.png";
import ArrowRight from "@public/arrow-right.svg";
import { Button } from "../atoms/button";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();

  return (
    <section className="bg-gray-50 h-[40rem] relative">
      <HeroBg />
      <div className="absolute left-[50%] -translate-x-2/4 z-10 w-[90vw] h-full flex items-center justify-center gap-md">
        <Image
          className="w-[40vw] hidden min-[930px]:block"
          src={heroImage}
          alt="straw basket with a wide variety of fruits and vegetables in and around"
        />
        <div>
          <p className="uppercase text-[1.4rem] text-primary">
            Welcome to Shopery
          </p>
          <h1 className="text-[4.5rem] sm:text-[5.6rem] font-semibold leading-tight">
            Fresh & Healthy <br /> Organic Food
          </h1>
          <p className="text-[3.2rem]">
            Sale up to{" "}
            <span className="text-warning text-[3.2rem]">30% OFF</span>
          </p>
          <p className="text-[1.4rem] text-gray-500 mb-sm">
            Free shipping on all your order. we deliver, you enjoy
          </p>
          <Button size="lg" onClick={() => router.push("/shop")}>
            <span>Shop now</span>{" "}
            <ArrowRight className="stroke-white w-[2.5rem] h-[2.5rem]" />
          </Button>
        </div>
      </div>
    </section>
  );
}
