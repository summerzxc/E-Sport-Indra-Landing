import React from "react";

export default function Udir() {
  return (
    <div className="w-full bg-white rounded-[30px] p-[40px] md:p-[80px] flex flex-col text-black">
      <div className="flex items-center gap-4 md:gap-[80px] self-center">
        <img
          src="/blackvector.png"
          alt=""
          className="md:block hidden md:w-[100px] md:h-[100px] animate-spin-slow"
        />
        <div className="flex flex-col items-center mb-[40px]">
        <img
          src="/blackvector.png"
          alt=""
          className="w-[56px] h-[56px] md:w-[100px] md:h-[100px] animate-spin-slow"
        />
          <h1 className="mt-8 md:mt-0 text-[28px] md:text-[64px] leading-[100%] text-black font-[800]">
            Шагналын Сан
          </h1>
          <h1 className="text-[56px] md:text-[140px] leading-[100%] text-black font-[800]">
            700,000₮
          </h1>
        </div>
        <img
          src="/blackvector.png"
          alt=""
          className="md:block hidden md:w-[100px] md:h-[100px] animate-spin-slow"
        />
      </div>
      <span className="md:text-base text-[14px] px-4 py-2 rounded-full border-2 font-[600] border-black w-fit self-center my-[30px]">
        Тэмцээний товч танилцуулга
      </span>
      <p className="text-center font-[500] leading-[150%]">
        Индра Кибер Институт нь Valorant болон CS2-ийг хамарсан eSport
        тэмцээнийг зохион байгуулж байгааг баяртайгаар зарлаж байна. Энэхүү
        вэбсайт нь тэмцээний талаарх мэдээллийг оролцогчид, ивээн тэтгэгчид
        болон бусад оролцогч талуудад өгөх зорилготой.
      </p>

      <span className="px-4 py-2 rounded-full border-2 font-[600] border-black w-fit self-center my-[30px]">
        Хаана?
      </span>
      <p className="text-[18px] md:text-[20px] text-center"><span className="font-[600]">2024 оны 4 сарын 27-28</span> өдрүүдэд <a href="https://maps.app.goo.gl/SiSQPuWt328Gwp6f9" className="font-[600] underline" data-cursor-text="✦" data-cursor-size="80px">PGaming e-Sport Center </a>-д <span className="font-[600]">9:00 - 17:00</span> хүртэл </p>
    </div>
  );
}
