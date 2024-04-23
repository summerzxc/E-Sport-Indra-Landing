import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full flex flex-col gap-[24px] items-center justify-center my-[50px]">
        <span className="text-[#888] text-center">Ивээн тэтгэгчид</span>
      <div className="flex items-center gap-3">
        <Image src={"/logo.png"} alt="hero" width={130} height={130} />
        <h3 className="text-xl font-[500] tracking-tight">X</h3>
        <h3 className="text-3xl font-[700] tracking-tight">INDRA</h3>
      </div>
      <span className="text-[#888] text-center tracking-tight text-[14px]">Developed by SW-23 student Anand.B (JinDev)</span>
    </div>
  );
}
