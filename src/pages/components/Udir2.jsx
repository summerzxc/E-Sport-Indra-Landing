import React from "react";

export default function Udir2() {
  return (
    <div className="w-full my-[60px] flex flex-col gap-[60px]">
      <div className="flex flex-col gap-3">
        <h4 className="text-2xl font-[700] text-[#AFF058]">Бүртгэл</h4>
        <ul className="flex flex-col gap-3 text-[20px]">
          <li>
            <span className="font-[600]">
              Оролцогчидод тавигдах шаардлага:{" "}
            </span>{" "}
            Индра кибер институт-д сурдаг байх
          </li>
          <li>
            <span className="font-[600]">Бүртгэлийн хураамж: </span> Багийн
            100,000
          </li>
          <li>
            <span className="font-[600]">Бүртгэлийн сүүлийн хугацаа: </span>
            2024.04.25
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="text-2xl font-[700] text-[#AFF058]">
          Тэмцээний дүрэм журам
        </h4>
        <p className="text-[20px] font-[600]">
          Бүх оролцогчид тэмцээний ёс зүйн дүрмийг дагаж мөрдөх ёстой. Луйвар,
          ёс зүйгүй үйлдэл эсвэл cheat wallhack ашиглахыг хатуу хориглоно.{" "}
          <span className="text-red-600">Баригдвал bye!!!</span>
        </p>
      </div>

      <div className="w-full flex flex-col gap-[24px]">
        <div className="w-full flex gap-[24px]">
          <div className="w-full bg-white text-black p-[40px] rounded-[30px] flex flex-col gap-4">
            <span className="text-2xl font-[700]">Тоглолтын бүтэц</span>
            <span className="text-[64px] font-[700]">
              Best of 1 // Final Best of 3
            </span>
          </div>
        </div>
        <div className="w-full flex gap-[24px]">
          <div className="w-full bg-white text-black p-[40px] rounded-[30px] flex flex-col gap-4">
            <span className="text-2xl font-[700]">Valorant ✦ Шагналын сан</span>
            <ul className="flex flex-col font-[500] gap-4 text-[20px]">
              <li className="text-[30px] gold-text">
                <span className="font-[700]">Нэгдүгээр байр: </span>200,000₮
              </li>
              <li className="text-[24px] silver-text">
                <span className="font-[700]">Хоёрдугаар байр: </span>100,000₮
              </li>
              <li className="bronze-text">
                <span className="font-[700]">Гуравдугаар байр: </span>Өргөмжлөл
              </li>
            </ul>
          </div>
          <div className="w-full bg-white text-black p-[40px] rounded-[30px] flex flex-col gap-4">
            <span className="text-2xl font-[700]">CSGO 2 ✦ Шагналын сан</span>
            <ul className="flex flex-col font-[500] gap-4 text-[20px]">
              <li className="text-[30px] gold-text">
                <span className="font-[700]">Нэгдүгээр байр: </span>200,000₮
              </li>
              <li className="text-[24px] silver-text">
                <span className="font-[700]">Хоёрдугаар байр: </span>100,000₮
              </li>
              <li className="bronze-text">
                <span className="font-[700]">Гуравдугаар байр: </span>Өргөмжлөл
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center gap-[32px]">
        <h4 className="text-2xl font-[700] text-[#AFF058]">Bracket for both Games</h4>
        <div className="w-full rounded-[30px] overflow-hidden max-w-[800px]">
            <img src="/bracket.jpg" alt="" className="w-full "/>
        </div>
      </div>
    </div>
  );
}
