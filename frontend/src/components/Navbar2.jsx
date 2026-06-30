import React, { useState } from "react";
import clsx from "clsx";
import {Link } from "react-router-dom";

function Navbar2() {
  const [hovered, setHovered] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
  
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
  
      // Concatenate the id to the current path
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}#${id}`
      );
    }
  };

  return (
    <nav
      id="nav2"
      className="Navbar2 relative  bg-[#193B24] text-[white] border-b-[0.5px] border-white cursor-pointer  "
    >
      <a
        onClick={() => scrollToSection("Home")}
      >
        Home
      </a>
      <a
        onClick={() => scrollToSection("About")}
      >
        About
      </a>
      <a className="relative h-full flex items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
        
        onClick={() => {
          scrollToSection("papercalls")
          setHovered(false)
        }}
      >
        Call For Papers
        <a   className={clsx("absolute top-8 left-5 px-4 py-1 rounded-[5px] bg-green-500 buttonanimate border-yellow-400/50 text-green-950 border-[1px]",hovered?"block":"hidden")} href="https://drive.google.com/file/d/1-0MBEh0kHjH5xXxl9cQM1OPI1U1YcfFW/view?usp=drive_link" target="main">Poster</a>
      </a>
      <a
        onClick={() => scrollToSection("keynotespeaker")}
      >
        Keynote Speaker
      </a>
      <a
        onClick={() => scrollToSection("keydates")}
      >
        Keynote Dates
      </a>
      <a
        onClick={() => scrollToSection("publication")}
      >
        Publication
      </a>
      <a
        onClick={() => scrollToSection("submission")}
      >
        Submission Details
      </a>
      <Link to="/cmt-acknowledgement"
      >
        CMT Acknowledgement
      </Link>
      <a
        onClick={() => scrollToSection("registration")}
      >
        Registrations
      </a>
      <a
        onClick={() => scrollToSection("committee")}
      >
        Committee Members
      </a>
      <a
        onClick={() => scrollToSection("contact")}
      >
        Contact
      </a>
    </nav>
  );
}

export default Navbar2;
