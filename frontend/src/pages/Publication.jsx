import React, { useState } from "react";
import lecturenotes2023 from "../assets/images/lecturenotes2023.png";
import lecturenotes2024 from "../assets/images/lecturenotes2024.png";
import lecturenotes2025 from "../assets/images/lecturenotes2025.png";
import scopus from "../assets/images/scopus.png";
import springer from "../assets/images/springer.png";
import { SquareArrowOutUpRight, CircleArrowDown } from "lucide-react";

function Publication() {
  const [pointer, setPointer] = useState(0);

  const lecturenotes = [
    {
      image: lecturenotes2025,
      year: "2025",
      link: "https://link.springer.com/book/9789819215836",
    },
    {
      image: lecturenotes2024,
      year: "2024",
      link: "https://link.springer.com/book/9789819211296",
    },
    {
      image: lecturenotes2023,
      year: "2023",
      link: "https://link.springer.com/book/10.1007/978-981-97-6390-0",
    },
  ];

  return (
    <section
      id="publication"
      className="py-[3%] px-[5%] gap-3 bg-green-100 box-border scroll-mt-[130px] w-full h-auto flex justify-center"
    >
      <div className="relative border-[8px] box-border p-2 border-green-200 flex justify-center items-center">
        <img
          src={lecturenotes[pointer].image}
          className="relative w-50"
        />
        <div className="flex absolute justify-between items-center w-full px-6 top-5 text-green-100 z-10">
          <CircleArrowDown onClick={()=>{setPointer(prev=>(prev+1)%lecturenotes.length)}} className=" rotate-90 rounded-full bg-[#193B24]/80 border border-green-300/30 shadow-lg cursor-pointer transition-all duration-300 hover:bg-[#245634] hover:border-yellow-400 hover:scale-110 active:scale-95" />
          <CircleArrowDown onClick={()=>{setPointer(prev=>(prev-1+ lecturenotes.length)%lecturenotes.length)}} className="-rotate-90 rounded-full bg-[#193B24]/80 border border-green-300/30 shadow-lg cursor-pointer transition-all duration-300 hover:bg-[#245634] hover:border-yellow-400 hover:scale-110 active:scale-95" />
        </div>
        <p className="absolute bottom-4 oswald left-5 text-green-200/90 text-shadow-[2px_2px_0px_rgba(0,0,0,0.5)] text-[1.5rem]">
          {lecturenotes[pointer].year}
        </p>
        <a
          href={lecturenotes[pointer].link}
          target="main"
          className="absolute bottom-5 right-5 p-1 bg-green-200/80  rounded-[5px] text-green-800"
        >
          <SquareArrowOutUpRight />
        </a>
      </div>
      <div className="box-border py-3 px-8  bg-green-200 flex-1  ">
        <div className="w-full flex justify-between items-center lg:mt-4">
          <p className="oswald text-[2rem] text-teal-900 ">Publications</p>
          <div className="flex h-10 gap-1">
            <img
              src={springer}
              alt=""
              className="border-[3px] box-border p-1 border-green-300"
            />
            <img
              src={scopus}
              alt=""
              className="border-[3px] box-border p-1 border-green-300"
            />
          </div>
        </div>
        <br />
        <p className="text-amber-900 text-justify tracking-tight leading-6 italic">
          It is planned to publish the peer reviewed and selected papers of
          conference as proceedings with Springer in their prestigious “Lecture
          Notes in Electrical Engineering” series (
          <a href="https://link.springer.com/series/7818" target="main">
            https://link.springer.com/series/7818
          </a>
          ). For detailed instructions for author and editors of conference
          proceedings, kindly visit the following link:
          <a
            href="https://www.springer.com/us/authors-editors/conference-proceedings"
            target="main"
          >
            https://www.springer.com/us/authors-editors/conference-proceedings.
          </a>
          Select papers from the conference will be published by Springer as a
          proceedings book volume. Springer will conduct quality checks on the
          accepted papers and only papers that pass these checks will be
          published. Springer Nature does not charge any money for publication
          of Non-Open Access content. Abstracts/extended abstracts and short
          papers (less than 4 pages) are not considered for publication.
        </p>
      </div>
    </section>
  );
}

export default Publication;
