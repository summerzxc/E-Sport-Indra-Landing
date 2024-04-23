import React from "react";
import { FaBookReader } from "react-icons/fa";
import { TbCurrencyTugrik } from "react-icons/tb";
import { IoTime } from "react-icons/io5";

export default function Udir2() {
  return (
    <div className="w-full my-[60px] flex flex-col gap-[60px]">
      <div className="flex flex-col gap-[24px]">
        <h4 className="text-3xl font-[700] text-[#AFF058] mb-4 text-center">
          Бүртгэл
        </h4>
        <div className="w-full flex gap-[24px]">
          <div className="w-full flex flex-col gap-4 border-2 bg-[#363636]/30 border-[#363636] p-[40px] rounded-[30px]">
            <div className="p-3 rounded-full border w-fit border-red-500 bg-red-500/20 mb-4">
              <FaBookReader className="text-red-500" />
            </div>
            <h5 className="text-[20px] font-[600]">
              Оролцогчидод тавигдах шаардлага
            </h5>
            <p>Индра кибер институт-д сурдаг байх</p>
          </div>
          <div className="w-full flex flex-col gap-4 border-2 bg-[#363636]/30 border-[#363636] p-[40px] rounded-[30px]">
            <div className="p-3 rounded-full border w-fit border-green-500 bg-green-500/20 mb-4">
              <TbCurrencyTugrik className="text-green-500" />
            </div>
            <h5 className="text-[20px] font-[600]">Бүртгэлийн хураамж</h5>
            <p>Багийн 100,000₮</p>
          </div>
          <div className="w-full flex flex-col gap-4 border-2 bg-[#363636]/30 border-[#363636] p-[40px] rounded-[30px]">
            <div className="p-3 rounded-full border w-fit border-yellow-500 bg-yellow-500/20 mb-4">
              <IoTime className="text-yellow-500" />
            </div>
            <h5 className="text-[20px] font-[600]">
              Бүртгэлийн сүүлийн хугацаа
            </h5>
            <p>2024.04.25</p>
          </div>
        </div>
        <div className="w-full flex gap-[24px]">
          <div className="w-full flex flex-col gap-4 border-2 bg-[#363636]/30 border-[#363636] p-[40px] rounded-[30px]">
            <h5 className="text-[20px] font-[600]">Тэмцээний дүрэм журам</h5>
            <p>
              Бүх оролцогчид тэмцээний ёс зүйн дүрмийг дагаж мөрдөх ёстой.
              Луйвар, ёс зүйгүй үйлдэл эсвэл cheat wallhack ашиглахыг хатуу
              хориглоно.
              <br />
              <span className="text-red-500">Баригдвал bye!!!</span>
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 border-2 bg-[#363636]/30 border-[#363636] p-[40px] rounded-[30px]">
            <h5 className="text-[20px] font-[600]">Тоглолтын бүтэц</h5>
            <p className="text-4xl">Best of 1 // Final Best of 3</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white text-black rounded-[30px] p-[80px]">
        <h2 className="text-[56px] text-center font-[700] mb-10">Valorant ✦ CS2 Шагналын сан</h2>
        <div className="w-full flex justify-center gap-[56px]">
          <div className="flex flex-col items-center gap-5">
              <div className="py-[40px] px-[42px] text-[32px] rounded-full border-4 border-yellow-400 text-yellow-400 font-[700] bg-yellow-400/30">
                1st
              </div>
              <div className="text-3xl font-[700] text-center leading-[100%]">
              200,000₮<br/> <span className="text-xl font-[600]">+</span><br/> Өргөмжлөл
              </div>
          </div>
          <div className="flex flex-col items-center gap-5">
              <div className="py-[40px] px-[32px] text-[32px] rounded-full border-4 border-slate-400 text-slate-400 font-[700] bg-slate-400/30">
                2nd
              </div>
              <div className="text-3xl font-[700] text-center leading-[100%]">
              100,000₮<br/> <span className="text-xl font-[600]">+</span><br/> Өргөмжлөл
              </div>
          </div>
          <div className="flex flex-col items-center gap-5">
              <div className="py-[40px] px-[37px] text-[32px] rounded-full border-4 border-orange-300 text-orange-300 font-[700] bg-orange-300/30">
                3rd
              </div>
              <div className="text-3xl font-[700] text-center leading-[100%]">
              0₮<br/> <span className="text-xl font-[600]">+</span><br/> Өргөмжлөл
              </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center gap-[40px]">
        <h4 className="text-3xl font-[700] text-[#AFF058]">
          Bracket for both Games
        </h4>
        <div className="w-full rounded-[30px] overflow-hidden max-w-[800px]">
          <img src="/bracket.jpg" alt="" className="w-full " />
        </div>
      </div>
    </div>
  );
}
