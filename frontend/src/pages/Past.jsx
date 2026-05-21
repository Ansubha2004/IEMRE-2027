import React from "react";
import pastspeakers from "../data/pastspeakers.json";

function Past() {
  return (
    <section id="" className="px-[5%] py-[2.5%] bg-green-100">
      <p className="text-[2rem] oswald text-center">
        IEMRE Archives -{" "}
        <span className="text-green-800 italic">Past Speakers</span>
      </p>
      <br />
      <div className="flex flex-col gap-5">
        {pastspeakers.map((speakers, index) => (
          <div classname="" key={index}>
            <div className="flex gap-2 items-center">
              <div className="translate-y-0.5 rounded-full h-[2rem] w-[3px]  bg-lime-900 "></div>
              <p className="text-[1.5rem] font-bold text-lime-900">
                {speakers.heading}
              </p>
            </div>
            <br />
            <div className="flex flex-wrap justify-start space-x-3.5 items-center">
                {
                    speakers.speakers.map((speaker,index)=>(
                        <div className="flex flex-col w-50 items-center gap-1">
                            <div className="scale-[0.8] aspect-[1/1] w-full border-[10px] border-green-900 rounded-full overflow-hidden flex items-center justify-center">
                                <img src={speaker.image} className="w-full h-full " />
                            </div>
                            <p className="font-bold text-center text-[0.75rem]">{speaker.name}</p>
                            <p className="text-[0.5rem] text-center oswald">{speaker.description}</p>
                        </div>
                    ))
                }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Past;
