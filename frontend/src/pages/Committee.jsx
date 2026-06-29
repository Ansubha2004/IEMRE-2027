import React, { useState } from "react";
import clsx from "clsx";
import technicalcommittee from "../data/technicalcommittee.json";
import advisorycommittee from "../data/advisorycommittee.json";
import organizingcommittee from "../data/organizingcommitttee.json";

function Committee() {
  const [pointer, setPointer] = useState(0);
  const committees = [
    {
      title: "Advisory",
      data: advisorycommittee,
    },
    {
      title: "Technical",
      data: technicalcommittee,
    },
    {
      title: "Organizers",
      data: organizingcommittee,
    },
  ];

  
  
  return (
    <section
      id="committee"
      className="bg-gradient-to-tr from-green-950 to-green-800 border-b-[1px] border-white w-full h-auto box-border pb-[4%] pt-[2.5%] px-[5%] scroll-mt-[130px]"
    >
      <div className="text-[2rem] oswald text-yellow-500 flex justify-between w-full items-center">
        <p className="">Committee Members</p>
        <div
          className="flex items-center gap-4 hover:cursor-pointer hover:opacity-80"
        >
          <div className="dm-serif-display-regular flex gap-2 text-[0.7rem] uppercase">
            {
              committees.map((committee,index)=>(
                <div key={index} onClick={()=>setPointer(index)} className={clsx("px-5 py-2 rounded-lg bg-[#193B24] text-green-100 font-medium hover:bg-[#245634] transition-all duration-300 ",pointer === index
                  ? "bg-[#245634] text-white scale-105 border border-[#FFE156]"
                  : "bg-[#193B24] text-green-100 hover:bg-[#245634] hover:scale-105")}>
                    {committee.title}
                </div>
              ))
            }
          </div>

        </div>
      </div>
      <br />
      <div className="flex flex-col w-full gap-1">
        {committees[pointer].data.map((members, index) => (
          <div
            className="h-auto py-2 w-full gap-5 rounded-[5px] text-white px-5 bg-green-700/50 flex justify-between items-center"
            key={index}
          >
            <p className="text-[1rem] italic">
              {index + 1 + ". " + members.name}
            </p>
            <div className="flex-1 h-[1px] bg-white/50"></div>
            <div className="flex gap-2 text-[0.8rem]">
              <p className="oswald px-3 py-1 rounded-full bg-green-500/50 border-[1px] border-yellow-300/50">
                {members.institution}
              </p>
              <p className="oswald px-3 py-1 rounded-full bg-green-500/50 border-[1px] border-yellow-300/50">
                {members.title}
              </p>
              <p className="oswald px-3 py-1 rounded-full bg-green-500/50 border-[1px] border-yellow-300/50">
                {members.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Committee;
