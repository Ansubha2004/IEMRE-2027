import React from "react";

function Contact() {
  const contact = {
    email: "iemre_2025@iem.edu.in",
    phones: [
      "+91 7001406425",
      "+91 9832326307",
      "+91 9674002637",
      "+91 9564612490",
    ],
    address:
      "Institute of Engineering & Management (IEM), Kolkata Management House, D-1, Sector-V, Salt Lake City Kolkata - 700091, West Bengal, India",
  };

  return (
    <section
      id="contact"
      className="w-full h-auto bg-[#193B24] text-white box-border px-[5%] py-[3%] scroll-mt-[130px]"
    >
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="min-w-0">
          <p className="oswald text-[3rem] text-[#FFE156] mb-2">IEMRE-2026</p>
          <p className="text-[0.85rem] leading-[1.5] text-white/90">
            6th International Conference on Innovation in Energy Management &
            Renewable Resources (Hybrid Mode), organised by the Department of
            Electrical Engineering (EE) and Electrical & Electronics Engineering
            (EEE), Institute of Engineering & Management, Kolkata.
          </p>
        </div>

        <div className="min-w-0">
          <p className="oswald text-[1.6rem] mb-3">Contact</p>
          <div className="text-[0.85rem] leading-[1.6] text-white/90 space-y-3">
            <div>
              <p className="font-bold text-white">Address</p>
              <p className="leading-[1.2] text-[0.7rem]">{contact.address}</p>
            </div>
            <div>
              <p className="font-bold text-white leading-[1]">Email</p>
              <a
                className="leading-[1.2] text-[0.7rem]"
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </a>
            </div>
            <div>
              <p className="font-bold text-white ">Phone</p>
              <div className="flex flex-col gap-1 leading-[1] text-[0.7rem]">
                {contact.phones.map((phone, index) => (
                  <a key={index} href={`tel:${phone}`}>{phone}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <p className="oswald text-[1.6rem] mb-3">Quick Links</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[0.85rem] text-white/90">
            <a
              className="hover:text-white underline-offset-4 hover:underline"
              href="#Home"
            >
              Home
            </a>
            <a
              className="hover:text-white underline-offset-4 hover:underline"
              href="#About"
            >
              About
            </a>
            <a
              className="hover:text-white underline-offset-4 hover:underline"
              href="https://iem.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              IEM Website
            </a>
            <a
              className="hover:text-white underline-offset-4 hover:underline"
              href="https://drive.google.com/file/d/1-0MBEh0kHjH5xXxl9cQM1OPI1U1YcfFW/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Call for Papers
            </a>
          </div>

          <div className="mt-6 pt-4 border-t border-white/20 text-[0.75rem] text-white/70">
            <p>
              © Institute of Engineering and Management, Kolkata. IEMRE{" "}
              {new Date().getFullYear()}. All rights reserved.
            </p>
            <p>
              Developed By{" "}
              <b>
                <a href="https://ansubha-portfolio-official.vercel.app/">
                  Ansubha Dhar
                </a>
              </b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
