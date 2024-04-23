import React from "react";

export default function Udir() {
  return (
    <div className="w-full bg-white rounded-[30px] p-[80px] flex flex-col text-black">
      <div className="flex items-center gap-[80px] self-center ">
        <img
          src="/blackvector.png"
          alt=""
          className="w-[100px] h-[100px] animate-spin-slow"
        />
        <div className="flex flex-col items-center mb-[40px]">
          <h1 className="text-[64px] leading-[100%] text-black font-[800]">
            Шагналын Сан{" "}
          </h1>
          <h1 className="text-[140px] leading-[100%] text-black font-[800]">
            700,000₮
          </h1>
        </div>
        <img
          src="/blackvector.png"
          alt=""
          className="w-[100px] h-[100px] animate-spin-slow"
        />
      </div>
      <span className="px-4 py-2 rounded-full border-2 font-[600] border-black w-fit self-center my-[30px]">
        Тэмцээний товч танилцуулга
      </span>
      <p className="text-center font-[500] leading-[150%]">
        Индра Кибер Институт нь Valorant болон CS2-ийг хамарсан eSport
        тэмцээнийг зохион байгуулж байгааг баяртайгаар зарлаж байна. Энэхүү
        вэбсайт нь тэмцээний талаарх мэдээллийг оролцогчид, ивээн тэтгэгчид
        болон бусад оролцогч талуудад өгөх зорилготой.
      </p>
    </div>
  );
}
