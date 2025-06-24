import React from "react";
import { Link } from "react-router-dom";

export function About() {
  const members = [
    {
      image: "./about/team1.png",
      title: "Havez Helal"
    },
    {
      image: "./about/team2.png",
      title: "Khalil Ali"
    },
    {
      image: "./about/team3.png",
      title: "Noura Esaam"
    }
  ];

  const processSteps = [
    {
      title: "Preconstruction Design",
      description:
        "Officia elit ipsum ad velit exercitation do est nisi elit. Exercitation reprehenderit cupidatat fugiat voluptate mollit mollit fugiat consequa",
      type: "text",
      colSpan: "lg:col-span-1"
    },
    {
      image: "./about/process1.png",
      alt: "Blueprint with pencil",
      type: "image",
      colSpan: "lg:col-span-1"
    },
    {
      title: "Design & Construction Estimate",
      description:
        "Qui nisi sint excepteur irure incididunt nostrud consectetur ad voluptate eiusmod esse voluptate id ut commodo in reprehen",
      type: "text",
      colSpan: "lg:col-span-1"
    },
    {
      title: "On-Site Consultations",
      description:
        "Proident duis adipisicing duis irure occaecat est nisi cupidatat anim duis proident ut enim nulla veniam ea sunt dolore",
      type: "text",
      colSpan: "lg:col-span-1"
    },
    {
      title: "The Finishing Touches",
      description:
        "Ut ut aliqua mollit amet cupidatat minim cillum fugiat cillum quis ullamco sint culpa ullamco commodo amet. Nostrud enim pariatur et ad",
      type: "text",
      colSpan: "lg:col-span-1"
    },
    {
      image: "./about/process2.png",
      alt: "Modern escalator tunnel",
      type: "image",
      colSpan: "lg:col-span-1"
    }
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-background2">
        <div className="container mx-auto lg:py-24">
          <div className="px-8 py-8 flex flex-col lg:flex-row justify-center items-center gap-12">
            {/* Left Section - Text */}
            <div className="px-8 pt-8 lg:w-1/2 text-center lg:text-left">
              <h1 className="px-8 text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--primary-color)] leading-tight mb-6">
                Who We Are
              </h1>
            </div>

            {/* Right Section - Description and Button */}
            <div className="lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right">
              <p className="px-8 text-lg text-[var(--text-secondary)] max-w-lg ">
                We bring equal dedication and commitment to every project,
                whether it's residential, commercial, or public space design.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="pt-8 relative">
            <img
              src="./about/hero.png"
              alt="Modern living room interior design"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
            {/* Play Button Overlay */}
            <div className="absolute bottom-6 right-6 bg-white bg-opacity-90 p-4 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-gray-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-8 pt-8 mt-6 lg:py-24">
          <div className="flex flex-col py-8 px-8 lg:flex-row gap-12 lg:gap-24 items-start justify-between">
            {/* Left Section - Services List */}
            <div className="w-1/2 py-8">
              <h2 className="text-4xl md:text-5xl pb-8 lg:text-6xl font-semibold text-[var(--primary-color)] mb-12">
                What we do
              </h2>
              <p className="w-1/2 py-4 leading-loose">
                We expect living to be in an aesthetic form which is also an
                attitude. We try to apply beautiful life experience to design
                and to optimize the interaction between users and spaces.
              </p>

              <p className="py-8 leading-loose">
                <small>
                  <strong>Daniel Moore & Julia Lopez</strong>
                  <br />
                  Co-Founder A.studio
                </small>
              </p>
            </div>

            {/* Right Section - Images */}
            <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img
                  src="./about/person1.png"
                  alt="Modern kitchen interior"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img
                  src="./about/person2.png"
                  alt="Abstract architectural structure"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* team */}
        <section className="bg-white pb-8 mb-8 ">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl py-12 md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-12 text-center">
              Meet Our Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
              {members.map((member, index) =>
                <div
                  key={index}
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mx-auto transform hover:scale-[1.02] transition-transform duration-300"
                >
                  <a href="#">
                    <img
                      className="rounded-t-lg w-full h-auto object-cover"
                      src={member.image}
                      alt={member.title}
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-xl text-center tracking-tight text-gray-600 dark:text-white">
                        {member.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {member.category}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* process */}
        <div className="bg-gray-900 text-white  lg:py-8 p-8">
          <div className="container p-8 mx-auto px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-center">
              Our Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 mt-8">
              {processSteps.map((item, index) =>
                <div
                  key={index}
                  className={`
                ${item.type === "text"
                  ? "bg-gray-800 p-8 rounded-lg shadow-lg"
                  : "overflow-hidden rounded-lg shadow-lg"}
                ${item.colSpan}
                flex items-center justify-center
              `}
                >
                  {item.type === "text"
                    ? <div>
                        <h3 className="text-2xl font-bold mb-4 text-yellow-500">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    : <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />}
                </div>
              )}
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="bg-yellow-600 text-gray-900 text-lg px-8 py-4 rounded-md hover:bg-yellow-500 transition-colors duration-300 shadow-md inline-block"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
