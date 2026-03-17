import React from "react";

function Navbar2() {
  return (
    <nav id="nav2" className="Navbar2 relative  bg-[#193B24] text-[white] border-b-[0.5px] border-white  ">
      <a
        onClick={() => {
          const section = document.getElementById("Home");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
        href=""
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
        href=""
      >
        About
      </a>
      <a
        onClick={() => {
          const section = document.getElementById("callforpapers");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
        href=""
      >
        Call For Papers
      </a>
      <a
        onClick={() => {
          const section = document.getElementById("keynotespeaker");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
        href=""
      >
        Keynote Speaker
      </a>
      <a
        onClick={() => {
          const section = document.getElementById("keynotedates");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
        href=""
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
        href=""
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
        href=""
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
        href=""
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
        href=""
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
        href=""
      >
        Contact
      </a>
    </nav>
  );
}

export default Navbar2;
