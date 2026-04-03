import React from "react";
import papercalls from "../data/papercalls.json";
function Papercalls() {
  return (
    <section
      id="papercalls"
      className=" w-full h-auto box-border bg-[#193B24] py-[4%] px-[5%] scroll-mt-[130px]"
    >
      <div className="flex items-center gap-4">
        <div className="h-[2px] flex-1 bg-white/50 rounded-full"></div>
        <p className="oswald text-center text-[2rem] text-white -translate-y-3">
          Call For Papers
        </p>
        <div className="h-[2px] flex-1 bg-white/50 rounded-full"></div>
      </div>
      <br />
      <div className="flex flex-wrap justify-center">
        {
            papercalls.map((papercall,index)=>(
                <div key={index} className="w-[25%] p-2 bg-lime-900/70 border-[2px] border-black/50 bg-black" >
                    <div className="box-border  relative">
                        <img src={papercall.image} className="w-full h-full" />
                        <p className="absolute top-2 left-5 text-[2.5rem] text-white/60 sekuya-regular ">{index+1}</p>
                    </div>
                    <div className="pt-2 flex flex-col gap-2">
                        <p className="oswald text-yellow-300 leading-5">{papercall.title}</p>
                        <p className="text-[0.6rem] text-white text-justify italic">{papercall.body}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </section>
  );
}

export default Papercalls;
