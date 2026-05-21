import React from "react";
import {FileCheck,Link,MoveRight} from "lucide-react";
import clsx from "clsx"

function Submission() {
  const submissions = [
    {
      s1: "Paper Submission Link",
      s2: "Submit Your Paper",
      link: "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FIEMRE2025%2FSubmission%2FIndex",
      icon:<Link size={60} strokeWidth={2} color="#0d4a23" />
    },
    {
      s1: "Paper Submission Template",
      s2: "Download Template",
      link: "img/springer template_word.docm",
      icon:<FileCheck size={60} strokeWidth={2} color="#0d4a23" />
    },
  ];

  return (
    <section
      id="submission"
      className="py-[2.5%] px-[5%] bg-green-50 box-border scroll-mt-[130px] w-full h-auto"
    >
      <div className="flex gap-3 items-end ">
        <p className="oswald text-[2rem] ">Submission Guidelines</p>
        <div className="h-[2px] flex-1 bg-black/30 -translate-y-4"></div>
      </div>
      <br />
      <div className="flex justify-center items-center w-full gap-4">
        {submissions.map((submission, index) => (
          <div className="h-auto w-1/2 bg-green-100 border-[3px] border-green-700 p-5 rounded-[10px] flex gap-5">
            <div className="box-border p-2 border-[#0d4a23] border-[3px] rounded-[10px]  w-fit">
                {submission.icon}
            </div>
            <div className="flex-1 flex flex-col justify-center  "> 
                <p className="font-bold text-[1.5rem] text-green-900">{submission.s1}</p>
                <a href={submission.link} download className={clsx("flex gap-2 hover:text-blue-900  -translate-y-1 text-[1.2rem] italic  items-center font-[poppins]")}>
                  <p>{submission.s2}</p>
                  <MoveRight strokeWidth={3} size={20} className="translate-y-0.5" />
                </a>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div className="w-full bg-lime-100 rounded-tl-[10px] rounded-bl-[10px] p-5 border-l-[4px] border-[1px] border-green-700 ">
        <p className="text-[1.3rem] oswald text-green-900 mb-1"> CMT Acknowledgment</p>
        <p className="text-[0.8rem] leading-4 font-bold text-black/80 italic">The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>

      </div>
    </section>
  );
}

export default Submission;
