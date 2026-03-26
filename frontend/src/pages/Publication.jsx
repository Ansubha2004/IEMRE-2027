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
      <div className="border-[8px] box-border p-3 space-y-2 border-green-200">
        <img src={lecturenotes} alt="" className="w-50" />
      
      </div>
      <div className="box-border p-10 bg-green-200 flex-1">
        <p className="oswald text-[2rem] text-teal-900 ">Publications</p>
        <p className="text-amber-800">
          It is planned to publish the peer reviewed and selected papers of
          conference as proceedings with Springer in their prestigious “Lecture
          Notes in Electrical Engineering” series
          (https://link.springer.com/series/7818). For detailed instructions for
          author and editors of conference proceedings, kindly visit the
          following link:
          https://www.springer.com/us/authors-editors/conference-proceedings.
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
