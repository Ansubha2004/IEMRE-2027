import React from "react";

function CmtAcknowledgement() {
  return (
    <section
      id="cmt-acknowledgement"
      className="min-h-[calc(100vh-6.4rem)] bg-green-50 py-[3%] px-[5%]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-teal-900 oswald">
            Microsoft CMT Acknowledgement
          </h1>

          <p className="mt-3 text-gray-700 text-lg">
            6<sup>th</sup> International Conference on Innovations in Energy
            Management and Renewable Resources (IEMRE 2027)
          </p>

          <div className="w-40 h-1 bg-teal-900 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Main Card */}
        <div className="bg-white border-2 border-teal-900 rounded-2xl shadow-xl overflow-hidden">

          {/* Header */}
          <div className="bg-teal-900 text-white px-8 py-5">
            <h2 className="text-3xl font-semibold oswald">
              Microsoft Conference Management Toolkit (CMT)
            </h2>
          </div>

          <div className="p-8 space-y-8">

            {/* Conference Description */}
            <div>
              <h3 className="text-2xl font-semibold text-teal-900 mb-4">
                About the Conference
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                The 6th International Conference on Innovations in Energy
                Management and Renewable Resources (IEMRE 2027), organized by
                the Departments of Electrical Engineering (NBA Accredited) and
                Electrical & Electronics Engineering, Institute of Engineering &
                Management (IEM), Kolkata, provides an international platform
                for researchers, academicians, scientists, industry
                professionals, and students to present and discuss recent
                advances in renewable energy, sustainable technologies, smart
                grids, energy storage, energy management systems, electric
                mobility, and related interdisciplinary research.
              </p>
            </div>

            {/* Official Acknowledgement */}
            <div className="bg-green-100 border-l-8 border-green-700 rounded-xl p-6">

              <h3 className="text-2xl font-bold text-teal-900 mb-4">
                Official Microsoft CMT Acknowledgement
              </h3>

              <p className="italic font-semibold text-gray-900 text-lg leading-8 text-justify">
                The Microsoft CMT service was used for managing the
                peer-reviewing process for this conference. This service was
                provided for free by Microsoft and they bore all expenses,
                including costs for Azure cloud services as well as for
                software development and support.
              </p>

            </div>

            {/* About CMT */}
            <div>
              <h3 className="text-2xl font-semibold text-teal-900 mb-4">
                Why Microsoft CMT?
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                Microsoft Conference Management Toolkit (CMT) is a globally
                recognized platform for managing conference paper submissions
                and peer reviews. For IEMRE 2027, CMT facilitates secure paper
                submission, reviewer assignment, double-blind peer review,
                decision management, and communication with authors, ensuring a
                fair, transparent, and efficient review process.
              </p>
            </div>

            {/* Features */}
            <div>

              <h3 className="text-2xl font-semibold text-teal-900 mb-5">
                CMT Supports IEMRE 2027 Through
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-green-50 border rounded-xl p-5">
                  <h4 className="font-bold text-teal-900 text-lg">
                    ✔ Secure Paper Submission
                  </h4>
                  <p className="mt-2 text-gray-700">
                    Centralized submission and management of manuscripts.
                  </p>
                </div>

                <div className="bg-green-50 border rounded-xl p-5">
                  <h4 className="font-bold text-teal-900 text-lg">
                    ✔ Double-Blind Peer Review
                  </h4>
                  <p className="mt-2 text-gray-700">
                    Ensures impartial and unbiased evaluation of research
                    papers.
                  </p>
                </div>

                <div className="bg-green-50 border rounded-xl p-5">
                  <h4 className="font-bold text-teal-900 text-lg">
                    ✔ Reviewer Management
                  </h4>
                  <p className="mt-2 text-gray-700">
                    Efficient assignment and tracking of reviewers and review
                    progress.
                  </p>
                </div>

                <div className="bg-green-50 border rounded-xl p-5">
                  <h4 className="font-bold text-teal-900 text-lg">
                    ✔ Global Standard Platform
                  </h4>
                  <p className="mt-2 text-gray-700">
                    Used by thousands of conferences and journals worldwide.
                  </p>
                </div>

              </div>

            </div>

            {/* Footer */}
            <div className="border-t pt-6">

              <p className="text-center text-gray-600">
                For more information about Microsoft CMT, visit
              </p>

              <div className="text-center mt-5">
                <a
                  href="https://cmt3.research.microsoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-900 hover:bg-teal-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Microsoft CMT Official Website
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CmtAcknowledgement;