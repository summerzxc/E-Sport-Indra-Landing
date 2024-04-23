import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Hero() {
  return (
    <div className="my-[40px] md:my-0 md:h-screen w-full flex flex-col items-center justify-center">
      <h4 className=" md:text-xl text-[14px] text-center">WE ARE ANNOUNCING E-SPORT COMPETITION</h4>
      <div className="flex items-center gap-6">
        <h1 className="text-[76px] md:text-[120px] lg:text-[200px] xl:text-[300px] font-[900] tracking-tighter leading-[100%]">
          INDRA
        </h1>
        <Image
          src={"/vector.png"}
          alt="hero"
          width={200}
          height={200}
          className="lg:block hidden animate-spin-slow"
        />
        <Image
          src={"/vector.png"}
          alt="hero"
          width={70}
          height={70}
          className="md:hidden block animate-spin-slow"
        />
      </div>
      <div className="mt-5"></div>
      <Marquee>
        <h3 className="text-xl md:text-3xl font-[700] tracking-tight mr-2">БҮРТГЭЛ ЯВАГДАЖ БАЙНА ✦</h3>
        <h3 className="text-xl md:text-3xl font-[700] tracking-tight mr-2">БҮРТГЭЛ ЯВАГДАЖ БАЙНА ✦</h3>
        <h3 className="text-xl md:text-3xl font-[700] tracking-tight mr-2">БҮРТГЭЛ ЯВАГДАЖ БАЙНА ✦</h3>
        <h3 className="text-xl md:text-3xl font-[700] tracking-tight mr-2">БҮРТГЭЛ ЯВАГДАЖ БАЙНА ✦</h3>
        <h3 className="text-xl md:text-3xl font-[700] tracking-tight mr-2">БҮРТГЭЛ ЯВАГДАЖ БАЙНА ✦</h3>
        <h3 className="text-xl md:text-3xl font-[700] tracking-tight mr-2">БҮРТГЭЛ ЯВАГДАЖ БАЙНА ✦</h3>
      </Marquee>
    </div>
  );
}
