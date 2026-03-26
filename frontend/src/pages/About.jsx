import React from "react";

function About() {
  return (
    <section
      id="About"
      className="bg-green-100 w-full h-auto box-border py-[2.5%] px-[5%] flex justify-between items-start gap-10 scroll-mt-[130px]"
    >
      <div className="w-1/2">
        <p className="text-[2rem] text-teal-900 mb-3 oswald">
          The 6th Conference Insight On
        </p>
        <p className="text-[0.8rem]   text-justify tracking-tight leading-[1.3]">
          Energy forms the foundation of modern human civilization.
          Historically, the majority of global energy requirements have been
          fulfilled through fossil fuels. However, the continued dependence on
          these resources is unsustainable in the long term. To effectively
          utilize environmentally sustainable renewable energy sources, it is
          essential to advance key technologies through coordinated global
          collaboration. In addition, the deployment of renewable energy systems
          must address not only technological barriers but also socio-economic
          challenges, calling for a comprehensive transformation of global
          energy policies and strategies. In line with this vision, the 6th
          International Conference on Innovations in Energy Management and
          Renewable Resources (IEMRE 2027) is being organized by the Departments
          of Electrical Engineering (NBA Accredited) and Electrical &
          Electronics Engineering at the Institute of Engineering & Management,
          Kolkata. The conference will be conducted in hybrid mode, continuing
          the legacy of its successful previous editions held from 2021 to 2025.
          The primary objective of this conference is to convene leading
          researchers, academicians, and industry professionals from around the
          world to share and discuss recent developments in renewable energy
          technologies, including generation, storage, management, policy
          frameworks, and smart grid integration. The conference aims to provide
          a collaborative platform that encourages the exchange of ideas,
          fosters innovation, and promotes interdisciplinary partnerships. It
          will also serve as an opportunity to establish new collaborations and
          engage with experts in the field. A distinctive feature of the
          conference will be keynote sessions delivered by eminent speakers,
          highlighting the latest trends, strategies, and advancements in
          renewable energy.
        </p>
      </div>
      <div className="w-1/2  border-solid border-teal-900 border-[3px] ">
        <p className="text-[2rem] bg-teal-900  oswald text-white px-5 py-1">
          About Our College
        </p>
        <p className="text-[0.8rem] text-justify tracking-tight leading-[1.3] p-2">
          The{" "}
          <b>
            <a href="https://iem.edu.in/">
              Institute of Engineering & Management (IEM), Kolkata
            </a>
          </b>
          , established in 1989, is the first self-financed engineering
          institution in the state of West Bengal. Over the years, the institute
          has earned recognition as one of the leading self-financed engineering
          colleges in the region, consistently attracting top-ranking students.
          The institute has been accredited with Grade A by the National
          Assessment and Accreditation Council (NAAC), reflecting its commitment
          to academic excellence and quality education. IEM offers full-time
          four-year B.Tech programs across various disciplines, including
          Computer Science and Engineering and its allied specializations (CSE,
          CSE-AIML, CSE-AI, CSE-IoT, CSE-IoT-CSBT, CSBS), Electronics and
          Communication Engineering, Electrical and Electronics Engineering,
          Electrical Engineering, Information Technology, and Mechanical
          Engineering. In addition, the institute offers full-time two-year
          M.Tech programs in Computer Science and Engineering, Electronics and
          Communication Engineering, and Information Technology. Beyond
          engineering, IEM also provides undergraduate and postgraduate programs
          in Management, contributing to a holistic academic environment.
        </p>
      </div>
    </section>
  );
}

export default About;
