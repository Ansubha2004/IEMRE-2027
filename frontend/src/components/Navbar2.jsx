import React from "react";

function Navbar2() {
  return (
    <nav id="nav2" className="Navbar2 relative  bg-[#193B24] text-[white] border-b-[0.5px] border-white cursor-pointer  ">
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
      <a href="https://drive.google.com/file/d/1-0MBEh0kHjH5xXxl9cQM1OPI1U1YcfFW/view?usp=drive_link" target="main">
        Call For Papers
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
