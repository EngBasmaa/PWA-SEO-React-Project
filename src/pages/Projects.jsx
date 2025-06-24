import React from "react";
import { Link } from "react-router-dom";

export function Projects() {
  const projectsData = [
    {
      image: "./projects/project1.png",
      title: "Tranquil Retreat",
      category: "House",
      description:
        "A serene and modern residential design focusing on natural light and open spaces."
    },
    {
      image: "./projects/project2.png",
      title: "Urban Loft Reimagined",
      category: "Apartment",
      description:
        "Transforming a city loft into a functional and stylish living area with industrial accents."
    },
    {
      image: "./projects/project3.png",
      title: "Cozy Workspace Studio",
      category: "Office",
      description:
        "Creating an inspiring and comfortable workspace for creative professionals."
    },
    {
      image: "./projects/project4.png",
      title: "Eco-Friendly Villa",
      category: "House",
      description:
        "Designing a luxurious villa with eco-friendly features for a sustainable living experience."
    },
    {
      image: "./projects/project1.png",
      title: "Minimalist Modern Villa",
      category: "House",
      description:
        "Designing a luxurious villa with eco-friendly features for a sustainable living experience."
    },
    {
      image: "./projects/project3.png",
      title: "Urban Loft Reimagined",
      category: "Apartment",
      description:
        "Transforming a city loft into a functional and stylish living area with industrial accents."
    }
  ];
  return (
    <div className="px-5 py-5 bg-background2">
      <div className="pb-8 lg:pb-8">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="mb-8 text-center">
              <h2 className="text-4xl md:text-5xl font-semibold pt-5 mt-5 text-gray-900 leading-tight">
                Our Latest Creations and Projects
              </h2>
              <p className="text-lg text-gray-700  mt-2 w-1/2 text-center p-5 mx-auto">
                Explore a curated collection of our finest projects, where
                innovation meets aesthetics to bring unique visions to life.
                From luxurious interiors to minimalistic spaces, each design
                tells a story of creativity, precision, and passion. Dive into a
                world of elegance and smart design solutions crafted to
                transform your ideas into exceptional realities.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) =>
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transform hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
              >
                <img
                  className="w-full h-64 object-cover object-center"
                  src={project.image}
                  alt={project.title}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium mb-4">
                    {project.category}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <Link
                  to={`/projects/${project.index}`}
                  className="transition-colors mx-auto duration-300 font-semibold text-white  shadow-md rounded-md  inline-block btn-primary px-8 py-3 hover:bg-[var(--primary-dark)] "
                >
                  View more
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
