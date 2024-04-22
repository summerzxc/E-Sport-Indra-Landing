import React from "react";

export default function Games() {
  return (
    <div className="w-full pb-[80px]">
      <div className="flex flex-col gap-3">
        <h4 className="text-2xl font-[700] text-[#AFF058]">GAMES</h4>
        <h2 className="text-3xl font-[700] text-white">
          Энэхүү Тоглоомуудаар Зохиогдож байна.
        </h2>
      </div>
      <div className="w-full flex gap-6 items-center mt-[60px]">
        <div className="w-full h-[320px] rounded-[30px] overflow-hidden">
            <img src="/valo.jpg" alt="" className="w-full object-cover bg-center"/>
        </div>
        <div className="w-full h-[320px] rounded-[30px] overflow-hidden">
            <img src="/csgo.jpg" alt="" className="w-full object-cover bg-center"/>
        </div>
      </div>
    </div>
  );
}
