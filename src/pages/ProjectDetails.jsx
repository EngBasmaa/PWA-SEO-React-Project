import React from "react";
import { Link } from "react-router-dom";

export function ProjectDetails() {
  const projectInfo = {
    project: "Tranquil Retreat Bailey House",
    location: "San Francisco, CA 94132",
    area: "120 m2",
    completed: "2023",
    description:
      "The owners wanted a new family home that is flexible to cater to the future changes in family requirements- a joyful abode at all stages in life. The owners wanted a new family home that is flexible to cater to the future changes in family requirements- a joyful abode at all stages in life."
  };
  return (
    <>
      {/* Image Section */}
      <div className="mt-8 relative bg-background2">
        <h2 className="text-4xl  md:text-5xl p-8 lg:text-6xl font-semibold text-gray-900 ml-6">
          What we do
        </h2>
        <img
          src="/projectDetails/panner.png"
          alt="Modern living room interior design"
          className="w-full h-auto object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* details */}
      <section className="bg-background2 container mx-auto px-8 py-8 lg:py-24">
  <div className="flex flex-col pt-8 px-8 lg:flex-row gap-16 lg:gap-24 items-stretch justify-between">
    
    {/* Left Section */}
    <div className="px-8 text-gray-700 lg:w-1/2 text-md">
      <div className="pb-2 grid grid-cols-1 leading-relaxed max-w-xl mb-4 text-md">
        {/* Project Info Rows */}
        {[
          { label: "Project", value: projectInfo.project },
          { label: "Location", value: projectInfo.location },
          { label: "Area", value: projectInfo.area },
          { label: "Completed", value: projectInfo.completed },
        ].map((item, i) => (
          <div
            key={i}
            className="border-b text-md flex justify-between items-center border-gray-300 py-3 px-6"
          >
            <div className="text-md font-semibold text-gray-800">{item.label}</div>
            <div className="text-md text-gray-700">{item.value}</div>
          </div>
        ))}
      </div>

      <p className="text-md leading-relaxed mb-2 max-w-xl">
        {projectInfo.description}
      </p>

      <Link
        to="/contact"
        className="bg-gray-800 text-white text-lg px-8 py-3 mt-2 rounded-md hover:bg-gray-700 transition-colors duration-300 shadow-md inline-block"
      >
        Contact us
      </Link>
    </div>

    {/* Right Section - Images */}
    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      {[1, 2].map((i) => (
        <div key={i} className="h-full overflow-hidden rounded-lg shadow-xl">
          <img
            src={`/projectDetails/img${i}.png`}
            alt={`Project Image ${i}`}
            className="w-full h-[100%] object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
}
