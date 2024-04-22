import React from "react";
import Image from "next/image";

export default function Pc() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-full h-[600px] overflow-hidden rounded-[30px]">
        <img src="/pc.jpg" alt="" className="w-full object-cover bg-center "/>
      </div>
    </div>
  );
}
