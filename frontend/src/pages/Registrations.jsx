import React from "react";
import registrations from "../data/registrations.json";
import {CreditCard} from "lucide-react";

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
                <p className=" whitespace-nowrap text-white dm-serif-display-regular text-yellow-400/80 text-[0.8rem]">
                  {registration.participant}
                </p>
                <div className="h-[1px] rounded-full bg-yellow-400/30  w-full"></div>
                <p className="whitespace-nowrap text-white italic text-[0.7rem]">
                  {registration.participationtype}
                </p>
              </div>
              <div className="flex py-2 gap-2 px-2 bg-green-100">
                <div className="flex-1 auto box-border p-1  rounded-[5px]  bg-green-800/20 ">
                  <p className="text-center text-[0.55rem] font-bold uppercase">
                    Faculty/Academician
                  </p>
                  <p className="text-center text-green-900 oswald text-[1.2rem]">
                    {registration.FacultyAcademician}
                  </p>
                </div>
                <div className="flex-1 auto box-border p-1  rounded-[5px]  bg-green-800/20 ">
                  <p className="text-center text-[0.55rem] font-bold uppercase">
                    Corporate/Industry
                  </p>
                  <p className="text-center text-green-900 oswald text-[1.2rem]">
                    {registration.CorporateIndustry}
                  </p>
                </div>
                <div className="flex-1 auto box-border p-1  rounded-[5px]  bg-green-800/20  ">
                  <p className="text-center text-[0.55rem] font-bold uppercase">
                    Student/Research Scholar
                  </p>
                  <p className="text-center text-green-900 oswald text-[1.2rem]">
                    {registration.StudentResearchScholar}
                  </p>
                </div>
                <div className="flex-1 auto box-border p-1  rounded-[5px]  bg-green-800/20  ">
                  <p className="text-center text-[0.55rem] font-bold uppercase">
                    Participation
                  </p>
                  <p className="text-center text-green-900 oswald text-[1.2rem]">
                    {registration.Participationonly}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-xl flex-1 overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-200 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
            <CreditCard color="green" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest">
                Payment via bank transfer
              </p>
              <p className="text-sm font-medium text-gray-800 mt-0.5">
                Account Details
              </p>
            </div>
          </div>

          <div className="p-5">
            <p className="text-sm font-medium text-emerald-600 mb-3">
              Indian Overseas Bank
            </p>

            <div className="grid grid-cols-2 gap-1">
              <div className="bg-gray-50 rounded-lg px-4 py-2">
                <p className="text-[0.5rem] text-gray-400 leading-1  uppercase tracking-wide mb-1">
                  Branch
                </p>
                <p className="text-sm font-medium text-gray-800">Sector V</p>
              </div>

              <div className="bg-gray-50 rounded-lg px-4 py-2">
                <p className="text-[0.5rem] text-gray-400 leading-1  uppercase tracking-wide mb-1">
                  Branch Code
                </p>
                <p className="text-sm font-medium text-gray-800">1642</p>
              </div>

              <div className="bg-gray-50 rounded-lg px-4 py-2">
                <p className="text-[0.5rem] text-gray-400 leading-1  uppercase tracking-wide mb-1">
                  IFSC Code
                </p>
                <p className="text-sm font-mono font-medium text-gray-800">
                  IOBA0001642
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg px-4 py-2">
                <p className="text-[0.5rem] text-gray-400 leading-1  uppercase tracking-wide mb-1">
                  Swift Code
                </p>
                <p className="text-sm font-mono font-medium text-gray-800">
                  IOBAINBB893
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg px-4 py-2 col-span-2">
                <p className="text-[0.5rem] leading-1 text-gray-400 uppercase tracking-wide mb-1">
                  Account Number
                </p>
                <p className="text-base font-mono font-medium text-gray-800 tracking-wide">
                  164201000000488
                </p>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 col-span-2">
                <p className="text-xs leading-2 text-emerald-700 uppercase tracking-wide mb-1">
                  Account Name
                </p>
                <p className="text-sm font-medium text-emerald-900">
                  Institute of Engineering & Management Trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registrations;
