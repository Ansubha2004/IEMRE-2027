import React from "react";
import registrations from "../data/registrations.json";
function Registrations() {

    
  return (
    <section
      id="registration"
      className="py-[2.5%] px-[5%] bg-green-50 box-border scroll-mt-[130px] w-full h-auto"
    >
      <div className="flex mb-[45px] flex-row-reverse gap-2 justify-end items-center ">
        <div>
          <p className="oswald text-[2rem] leading-10 text-emerald-900">
            Conference Registrations
          </p>
          <p className="text-yellow-700 font-[600] italic text-[0.9rem]">
            Reserve your spot for our upcoming conference. Choose your
            registration option below...
          </p>
        </div>
        <div className="translate-y-0.5 rounded-full h-[3.1rem] w-[3px]  bg-lime-900 "></div>
      </div>
      <div className="flex gap-5">
        <div className="w-[65%] gap-5 flex flex-col">
          {registrations.map((registration, index) => (
            <div
              key={index}
              className=" h-auto rounded-[15px] w-full bg-gray-100 overflow-hidden"
            >
              <div className="gap-2 w-full flex justify-between items-center h-auto px-4 py-2 bg-gradient-to-tr from-green-900 to-green-700">
                <p className=" whitespace-nowrap text-white dm-serif-display-regular text-yellow-400/80 text-[0.8rem]">{registration.participant}</p>
                <div className="h-[1px] rounded-full bg-yellow-400/30  w-full"></div>
                <p className="whitespace-nowrap text-white italic text-[0.7rem]">{registration.participationtype}</p>
              </div>
              <div className="flex py-2 gap-2 px-2 bg-green-100">
                <div className="flex-1 auto box-border p-1  rounded-[5px]  bg-green-800/20 ">
                    <p className="text-center text-[0.55rem] font-bold uppercase">Faculty/Academician</p>
                    <p className="text-center text-green-900 oswald text-[1.2rem]">{registration.FacultyAcademician}</p>
                </div>
                <div className="flex-1 auto box-border p-1  rounded-[5px]  bg-green-800/20 ">
                    <p className="text-center text-[0.55rem] font-bold uppercase">Corporate/Industry</p>
                    <p className="text-center text-green-900 oswald text-[1.2rem]">{registration.CorporateIndustry}</p>
                </div>
                <div className="flex-1 auto box-border p-1  rounded-[5px]  bg-green-800/20  ">
                    <p className="text-center text-[0.55rem] font-bold uppercase">Student/Research Scholar</p>
                    <p className="text-center text-green-900 oswald text-[1.2rem]">{registration.StudentResearchScholar}</p>
                </div>
                <div className="flex-1 auto box-border p-1  rounded-[5px]  bg-green-800/20  ">
                    <p className="text-center text-[0.55rem] font-bold uppercase">Participation</p>
                    <p className="text-center text-green-900 oswald text-[1.2rem]">{registration.Participationonly}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 bg-black">

        </div>
      </div>
    </section>
  );
}

export default Registrations;
