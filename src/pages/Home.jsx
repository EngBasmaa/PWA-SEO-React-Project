import React, { useState, useEffect } from "react";
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
    image: "./home/project1.png",
    title: 'Harmony House',
    category: 'House',
  },
  {
    image: "./home/project2.png",
    title: 'The Coffee Corner',
    category: 'Food & Beverage',
  },
  {
    image: "./home/project3.png",
    title: 'Paradis hotel',
    category: 'Hotels',
  },
  {
    image: "./home/project4.png",
    title: 'NeuWave Offices',
    category: 'Offices',
  },
  {
    image: "./home/project5.png",
    title: 'Tranquil Tides Hotel and Spa',
    category: 'Hotels',
  },
  {
    image: "./home/project6.png",
    title: 'Charming Cottage',
    category: 'House',
  },
];

const testimonials = [
  {
    quote: `"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."`,
    name: "Michael Gough",
    title: "CEO at Google",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
  },
  {
    quote: `"The best UI kit I’ve ever used. Amazing documentation, fully customizable and production-ready!"`,
    name: "Sarah Lee",
    title: "CTO at OpenAI",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
  },
  {
    quote: `"I switched from Bootstrap to Flowbite and never looked back. Beautiful components and very developer-friendly."`,
    name: "John Smith",
    title: "Founder at DevFlow",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
  }
];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval); // clean up
  }, []);

  const { quote, name, title, image } = testimonials[index];



  return (
    <>
      {/* Header */}
      <header className="bg-background2">
        <div className="container mx-auto pt-8">
          <div className="px-8 pt-8 flex flex-col lg:flex-row justify-center items-center gap-12">
            {/* Left Section - Text */}
            <div className="px-8 pt-8  lg:w-1/2 text-center lg:text-left">
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
          <Link
  to="/contact"
className="transition-colors duration-300 font-semibold text-white   shadow-md rounded-md  inline-block btn-primary px-8 py-3 hover:bg-[var(--primary-dark)] "
>
  View more
</Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-8 relative">
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
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-16">
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
      <div className="lg:w-2/3 w-full relative  rounded-lg overflow-hidden">
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
  className="mt-6 inline-block btn-accent text-primary font-semibold text-lg px-8 py-3 rounded-md hover:bg-yellow-500 transition-colors duration-300 shadow-md"
>
  View more
</Link>
      </div>
    </div>
  </div>
</section>

{/* projects */}
<div className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl py-12 md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-12 text-center">
          Recent projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mx-auto transform hover:scale-[1.02] transition-transform duration-300">
              <a href="#"> {/* Link wrapping the image and text */}
                <img className="rounded-t-lg w-full h-auto object-cover" src={project.image} alt={project.title} />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {project.category}
                </p>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* testimonials */}
    <section>
 <figure className="w-full  bg-background2 py-8 my-8 mx-auto text-center transition-opacity duration-500 ease-in-out">
      <svg
        className="w-10 mt-8 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <blockquote>
        <p className="text-2xl italic px-8 font-medium text-gray-900 dark:text-white">
          {quote}
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        <img
          className="w-6 h-6 rounded-full"
          src={image}
          alt={name}
        />
        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
          <cite className="pe-3 font-medium text-gray-900 dark:text-white">{name}</cite>
          <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">{title}</cite>
        </div>
      </figcaption>
    </figure>
    </section>

      </main>
    </>
  );
}
