"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

export default function Pc() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowCursor(true);
      } else {
        setShowCursor(false);
      }
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {showCursor && <Cursor isGelly={true} />}
      <div
        className="w-full flex flex-col justify-center items-center mb-[60px]"
        data-cursor-text="PC байршил харах"
        data-cursor-size="100px"
      >
        <a href="https://maps.app.goo.gl/SiSQPuWt328Gwp6f9" target="_blank">
          <div className="w-full md:h-[600px] overflow-hidden rounded-[30px]">
            <img
              src="/pc.jpg"
              alt=""
              className="w-full object-cover bg-center"
            />
          </div>
        </a>
        <a
          href="https://maps.app.goo.gl/SiSQPuWt328Gwp6f9"
          target="_blank"
          className="md:hidden block mt-6 animate-pulse"
        >
          ✦ Байршил үзэх ✦
        </a>
      </div>
    </>
  );
}
