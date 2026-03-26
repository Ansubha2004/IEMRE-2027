import React from "react";
import { CalendarCheck } from "lucide-react";
import keydates from "../data/keydates.json";
import clsx from "clsx"

function Keydates() {
  return (
    <section
      id="keydates"
      className="py-[2.5%] px-[5%] bg-green-50 box-border scroll-mt-[130px] w-full h-auto"
    >
      <p className="text-center oswald text-black  text-shadow-[1px_1px_0px_rgba(0,0,0,0.4)] text-[2rem]">Conference Timeline 2027</p><br />
      <table className="w-full text-center mb-5 ">
        <thead className="bg-green-800 text-white oswald ">
            <tr className="h-10 text-[1.5rem] ">
                <td className="w-1/2 border-r-[2px] ">Events</td>
                <td className="w-1/2 ">Dates</td>
            </tr>
        </thead>
        <tbody className=" text-[0.8rem] oswald ">
            {
                keydates.map((keydate,index)=>(
                    <tr key={index} className="h-13 ">
                        <td className={clsx("w-1/2 italic border-r-[2px] border-white ",index%2==0 ?"bg-lime-100":"bg-lime-50")}>{keydate.event}</td>
                        <td className={clsx("w-1/2 italic ",index%2==0 ?"bg-lime-100":"bg-lime-50")}>{keydate.date}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </section>
  );
}

export default Keydates;
