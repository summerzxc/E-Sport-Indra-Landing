"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pc from "./components/Pc";
import Games from "./components/Games";
import Udir from "./components/Udir";
import Udir2 from "./components/Udir2";
import { useEffect } from "react";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });
  return (
    <>
      <main className="px-[16px] md:px-[64px]" data-cursor-exclusion>
        <Header/>
        <Hero/>
        <Pc />
        <Games />
        <Udir />
        <Udir2 />
        <Footer />
      </main>
    </>
  );
}
