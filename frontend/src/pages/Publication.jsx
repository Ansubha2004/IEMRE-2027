import React from "react";
import lecturenotes from "../assets/images/lecturenotes.png";
import scopus from "../assets/images/scopus.png";
import springer from "../assets/images/springer.png";

function Publication() {
  return (
    <section
      id="publication"
      className="py-[2.5%] px-[5%] gap-3 bg-green-100 box-border scroll-mt-[130px] w-full h-auto flex justify-center"
    >
      <div className="border-[8px] box-border p-3 space-y-2 border-green-200 flex justify-center items-center">
        <img src={lecturenotes} alt="" className="w-50" />
      </div>
      <div className="box-border py-3 px-8  bg-green-200 flex-1  ">
        <div className="w-full flex justify-between items-center lg:mt-4">
          <p className="oswald text-[2rem] text-teal-900 ">Publications</p>
          <div className="flex h-10 gap-1">
            <img src={springer} alt="" className="border-[3px] box-border p-1 border-green-300" />
            <img src={scopus} alt="" className="border-[3px] box-border p-1 border-green-300" />
          </div>
        </div>
        <br />
        <p className="text-amber-800 tracking-tight text-justify tracking-tight leading">
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
