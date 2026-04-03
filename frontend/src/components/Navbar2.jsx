import React, { useState } from "react";
import clsx from "clsx";

function Navbar2() {
  const [hovered, setHovered] = useState(false);

  return (
    <nav
      id="nav2"
      className="Navbar2 relative  bg-[#193B24] text-[white] border-b-[0.5px] border-white cursor-pointer  "
    >
      <a
        onClick={() => {
          const section = document.getElementById("Home");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Home
      </a>
      <a
        onClick={() => {
          const section = document.getElementById("About");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        About
      </a>
      <a className="relative h-full flex items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
        
        onClick={() => {
          const section = document.getElementById("papercalls");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
          setHovered(false)
        }}
      >
        Call For Papers
        <a   className={clsx("absolute top-8 left-5 px-4 py-1 rounded-[5px] bg-green-500 buttonanimate border-yellow-400/50 text-green-950 border-[1px]",hovered?"block":"hidden")} href="https://drive.google.com/file/d/1-0MBEh0kHjH5xXxl9cQM1OPI1U1YcfFW/view?usp=drive_link" target="main">Poster</a>
      </a>
      <a
        onClick={() => {
          const section = document.getElementById("keynotespeaker");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Keynote Speaker
      </a>
      <a
        onClick={() => {
          const section = document.getElementById("keydates");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Keynote Dates
      </a>
      <a
        onClick={() => {
          const section = document.getElementById("publication");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Publication
      </a>
      <a
        onClick={() => {
          const section = document.getElementById("submission");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Submission Details
      </a>
      <a
        onClick={() => {
          const section = document.getElementById("registration");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Registrations
      </a>
      <a
        onClick={() => {
          const section = document.getElementById("committee");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Committee Members
      </a>
      <a
        onClick={() => {
          const section = document.getElementById("contact");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Contact
      </a>
    </nav>
  );
}

export default Navbar2;
