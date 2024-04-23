import React from "react";
import Image from "next/image";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
export default function Pc() {
  return (
    <>
    <Cursor isGelly={true}/>
    <div
      className="w-full flex justify-center items-center mb-[60px]"
      data-cursor-text="PC байршил харах"
      data-cursor-size="100px"
    >
      <a href="https://maps.app.goo.gl/SiSQPuWt328Gwp6f9" target="_blank">
        <div className="w-full h-[600px] overflow-hidden rounded-[30px]">
          <img
            src="/pc.jpg"
            alt=""
            className="w-full object-cover bg-center "
          />
        </div>
      </a>
    </div>
    </>
    
  );
}
