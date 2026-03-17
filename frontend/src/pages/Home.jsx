import React from "react";
import homebackground from "../assets/images/homebackground.png";

function Home() {
  return (
    <section id="Home" className="relative h-[calc(100vh-6.4rem)] w-[100wh]">
      <img src={homebackground} className="absolute w-full h-full z-[0] " />
      <div className="relative oswald-text z-[1]  w-full h-full bg-black/30  flex flex-col justify-evenly items-center box-border px-[3%] py-[3%]">
      </div>
    </section>
  );
}

export default Home;
