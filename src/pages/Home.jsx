import React from "react";
import "../index.css";
import { Link } from "react-router-dom";


export function Home() {
  const services = [
    "Design Project",
    "Concept creation",
    "Architectural Conception",
    "Brand Identity",
    "Consulting"
  ];

  const reasonsToChoose = [
    "Preferential Price",
    "After Care",
    "We convey the unique appeal and color plan",
    "We provide the most effective exclusive solutions"
  ];

  const projects = [
  {
    image: harmonyHouse,
    title: 'Harmony House',
    category: 'House',
  },
  {
    image: coffeeCorner,
    title: 'The Coffee Corner',
    category: 'Food & Beverage',
  },
  {
    image: paradisHotel,
    title: 'Paradis hotel',
    category: 'Hotels',
  },
  {
    image: neuwaveOffices,
    title: 'NeuWave Offices',
    category: 'Offices',
  },
  {
    image: tranquilTides,
    title: 'Tranquil Tides Hotel and Spa',
    category: 'Hotels',
  },
  {
    image: charmingCottage,
    title: 'Charming Cottage',
    category: 'House',
  },
];

  return (
    <>
      {/* Header */}
      <header className="bg-[var(--background-color)]">
        <div className="container mx-auto py-16 lg:py-24">
          <div className="px-8 py-8 flex flex-col lg:flex-row justify-center items-center gap-12">
            {/* Left Section - Text */}
            <div className="px-8 lg:w-1/2 text-center lg:text-left">
              <h1 className="px-8 text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--primary-color)] leading-tight mb-6">
                Find your <br /> dream space
              </h1>
            </div>

            {/* Right Section - Description and Button */}
            <div className="lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right">
              <p className="px-8 text-lg text-[var(--text-secondary)] max-w-lg mb-8">
                We are an innovative interior design and construction company
                dedicated to transforming spaces into stunning works of art.
              </p>
              <button className="btn-primary">
                Let's chat
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-16 relative">
            <img
              src="./home/hero.png"
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

      {/* Main Content */}
      <main>

        {/* What We Do Section */}
        <section className="container mx-auto px-8 py-8 my-8 lg:py-24">
          <div className="flex flex-col py-8 px-8 lg:flex-row gap-12 lg:gap-24 items-start justify-between">
            {/* Left Section - Services List */}
            <div className="w-1/3">
              <h2 className="text-4xl md:text-5xl pb-8 lg:text-6xl font-semibold text-[var(--primary-color)] mb-12">
                What we do
              </h2>
              <ul className="space-y-6">
                {services.map((service, index) => (
                  <li key={index} className="text-xl border-b-2 border-gray-300 text-[var(--text-secondary)] pb-4 last:pb-0">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section - Images */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img
                  src="./home/img1.png"
                  alt="Modern kitchen interior"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img
                  src="./home/img2.png"
                  alt="Abstract architectural structure"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
      <section className="bg-gray-900 text-white py-16 lg:py-24">
  <div className="container mx-auto py-8 px-4">
    <div className="flex  flex-col lg:flex-row items-center lg:items-stretch gap-12">
      
      {/* Left Section - Image */}
      <div className="lg:w-2/3 w-full relative rounded-lg overflow-hidden">
        <img
          src="./home/about.png"
          alt="Team meeting"
          className="w-full h-full object-cover rounded-lg shadow-xl"
        />
        {/* Overlay فوق الصورة مباشرة */}
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg pointer-events-none"></div>
      </div>

      {/* Right Section - Text Content */}
      <div className="lg:w-1/3 w-full p-4 lg:p-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">About us</h2>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Laborum ullamco id non excepteur aliqua ea cillum et reprehenderit. Cupidatat ex dolore amet mollit voluptate culpa et est
        </p>

        <div className="border-b border-gray-700 w-full mb-8"></div>

        <h3 className="text-2xl font-semibold mb-6">Why Choose Us</h3>
        <ul className="space-y-4">
          {reasonsToChoose.map((reason, index) => (
            <li key={index} className="flex items-start text-lg text-gray-300">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>

        <Link
  to="/about"
  className="mt-6 inline-block bg-yellow-600 text-gray-900 text-lg px-8 py-3 rounded-md hover:bg-yellow-500 transition-colors duration-300 shadow-md"
>
  View more
</Link>
      </div>
    </div>
  </div>
</section>

{/* gallery */}


      </main>
    </>
  );
}
