import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full flex flex-wrap gap-5 justify-between items-center py-[30px]">
      <div className="hidden md:flex items-center gap-3">
        <Image src={"/logo.png"} alt="hero" width={130} height={130} />
        <h3 className="text-xl font-[500] tracking-tight">X</h3>
        <h3 className="text-3xl font-[700] tracking-tight">INDRA</h3>
      </div>
      <div className="flex md:hidden items-center gap-2">
        <Image src={"/logo.png"} alt="hero" width={100} height={100} />
        <h3 className="font-[500] tracking-tight">X</h3>
        <h3 className="text-2xl font-[700] tracking-tight">INDRA</h3>
      </div>
      <a
        href="https://forms.gle/UjQ8Zisdq3igtbza7"
        target="_blank"
        className="px-4 py-2 md:px-6 md:py-3 rounded-full border border-white font-[500] md:text-[16px] text-[14px]"
      >
        Бүртгүүлэх
      </a>
    </div>
  );
}
