import React from "react";

export default function Games() {
  return (
    <div className="w-full pb-[80px]">
      <div className="flex flex-col gap-3">
        <h4 className="text-lg md:text-2xl font-[700] text-[#AFF058]">GAMES</h4>
        <h2 className="text-xl md:text-3xl font-[700] text-white">
          Энэхүү Тоглоомуудаар Зохиогдож байна.
        </h2>
      </div>
      <div className="w-full flex gap-6 items-center mt-[30px] md:mt-[60px] md:flex-row flex-col">
        <div className="w-full md:h-[320px] rounded-[30px] overflow-hidden" data-cursor-text="Valorant"
      data-cursor-size="100px">
            <img src="/valo.jpg" alt="" className="w-full object-cover bg-center"/>
        </div>
        <div className="w-full md:h-[320px] rounded-[30px] overflow-hidden" data-cursor-text="CS 2"
      data-cursor-size="100px">
            <img src="/csgo.jpg" alt="" className="w-full object-cover bg-center"/>
        </div>
      </div>
    </div>
  );
}
