import React from "react";
import homebackground from "../assets/images/homebackground.png";

function Home() {
  return (
    <section id="Home" className="relative scroll-mt-[130px] h-[calc(100vh-6.4rem)] w-[100wh]">
      <img src={homebackground} className="absolute w-full h-full z-[0] " />
      <div className="relative oswald-text z-[1]  w-full h-full bg-black/40  flex flex-col justify-center items-center box-border px-[3%] py-[3%]">
        <p className=" text-[1.2rem] font-bold text-white text-shadow-[2px_2px_0px_rgba(0,0,0)] dm-serif-display-regular">6th International Conference</p>
        <p className="text-[4rem] font-bold sekuya-regular text-[#FFE156] text-shadow-[7px_7px_0px_rgba(0,0,0,0.5)]">IEMRE-2027</p>
        <p className="text-[1.7rem] font-bold text-[#F77F00] -translate-y-5 text-shadow-[5px_5px_2px_rgba(0,0,0,0.5)] oswald">Innovation in Energy Management & Renewable Resources</p>
        <p className="text-rem] text-white font-bold text-shadow-[2px_2px_0px_rgba(0,0,0,0.5)] mb-1">Organised By</p>
        <p className="text-yellow-200 text-shadow-[1px_2px_3px_rgba(0,0,0)]">Department of Electrical Engineering (EE) </p>
        <p className="text-yellow-200 text-shadow-[1px_2px_3px_rgba(0,0,0)]">Institute of Engineering & Management, Kolkata</p>
        <br />
        <p className="font-bold text-green-200 text-[1.5rem] text-shadow-[1px_2px_0px_rgba(0,0,0)] oswald">15th - 17th September, 2027 (Hybrid Mode)</p>
      </div>
    </section>
  );
}

export default Home;
