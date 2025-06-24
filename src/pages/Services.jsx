import React from 'react'

export  function Services() {
const detailedServiceItems = [

  {
    title: 'Design Project',
    description: 'Deserunt consectetur ullamco exercitation aliquip enim ad qui qui officia magna voluptate tempor occaecat amet proident. Ipsum qui quis adipisicing adipisicing culpa',
    image: "./services/service1.png",
    alt: 'Abstract curved building design',
    layout: 'text-left-image-right' // Indicates text on left, image on right
  },
  {
    title: 'Concept creation',
    description: 'Sit amet cillum elit consectetur ipsum dolor enim non. Qui id magna sit id occaecat eu consectetur occaecat voluptate pariatur eiusmod cillum quis eu ea ut qui. Sunt eiusmod tempor officia',
    image: "./services/service2.png",
    alt: 'Modern building with curved architecture',
    layout: 'image-left-text-right' // Indicates image on left, text on right
  },
];

  const serviceItems = [
  {
    title: 'Architectural Conception',
    description: 'Reprehenderit magna elit irure irure qui do elit ad ex sint eiusmod. Elit excepteur ad cillum amet id amet magna sunt sunt laborum exercitation dolor veniam. Sunt irure nulla et minim ullamco minim dolore deserunt minim',
    image: "./services/img1.png",
    alt: 'Modern living room with sofa'
  },
  {
    title: 'Brand Identity',
    description: 'Labore aute do eiusmod eu consequat qui adipisicing id sint nisi tempor id magna eu eu ea ut qui. Sunt eiusmod tempor officia labore magna eu minim consequat nisi enim et in veniam sunt est reprehenderit elit ea',
    image: "./services/img2.png",
    alt: 'Modern office interior with lounge chairs'
  },
];
  return (
  <>

 <div className="bg-background2 py-8 lg:py-8">

   <div className="container mx-auto p-8">
  <div className="flex flex-col gap-16 lg:gap-24">
    {detailedServiceItems.map((item, index) => {
      const isFirstLayout = index % 2 === 0;

      return (
        <div
          key={index}
          className="flex flex-col items-center gap-12 lg:gap-16 lg:flex-row"
        >
          {isFirstLayout ? (
            <>
              {/* Text Left with Padding */}
              <div className="lg:w-1/2 text-start lg:text-left px-4 lg:px-6">
                <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0">
                  {item.description}
                </p>
              </div>

              {/* Image Right with Padding */}
              <div className="lg:w-1/2 px-4 lg:px-6">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </>
          ) : (
            <>
              {/* Image Left with Padding */}
              <div className="lg:w-1/2 px-4 lg:px-6">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Text Right with Padding */}
              <div className="lg:w-1/2 text-start lg:text-left px-4 lg:px-6">
                <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0">
                  {item.description}
                </p>
              </div>
            </>
          )}
        </div>
      );
    })}
  </div>
</div>


    </div>

{/* ........................ */}


 <div className="bg-gray-900 text-white p-8 ">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {serviceItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Text Content */}
              <div className="mb-8"> {/* Adjusted margin for spacing */}
                <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-grow flex items-end"> {/* Pushes image to bottom if text heights differ */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>  </>
  )
}
