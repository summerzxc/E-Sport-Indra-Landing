import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center py-[30px]">
      <div className="flex items-center gap-3">
        <Image src={"/logo.png"} alt="hero" width={130} height={130} />
        <h3 className="text-xl font-[500] tracking-tight">X</h3>
        <h3 className="text-3xl font-[700] tracking-tight">INDRA</h3>
      </div>
      <a
        href=""
        className="px-6 py-3 rounded-full border border-white font-[500]"
      >
        Contact
      </a>
    </div>
  );
}
