import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h4 className="text-xl">WE ARE ANNOUNCING E-SPORT COMPETITION</h4>
      <div className="flex items-center gap-6">
        <h1 className="text-[300px] font-[900] tracking-tighter leading-[100%]">
          INDRA
        </h1>
        <Image
          src={"/vector.png"}
          alt="hero"
          width={200}
          height={200}
          className="animate-spin-slow"
        />
      </div>
    </div>
  );
}
