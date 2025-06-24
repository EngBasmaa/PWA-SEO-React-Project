import React from 'react'

export  function Contact() {


  return (
    <>
{/* contacts */}
 <div className="bg-white py-8 px-8 lg:py-8">

<div className="container mx-auto px-8">
  
  <div className="bg-white py-8 px-4 sm:px-6 lg:px-8 lg:py-24">
  <div className="container mx-auto">

    <div className="flex flex-col lg:flex-row items-start gap-12">

      {/* Left Section - Contact Info and Image */}
      <div className="lg:w-1/2 w-full flex flex-col">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold pl-8 text-gray-900 mb-10">
          Contact us
        </h2>

        <div className="space-y-4 text-gray-700 text-lg mb-12">
          {/* Address */}
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-gray-500 mt-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9..."/>
            </svg>
            <span>1777 West Street, Portland, OR 97205</span>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-gray-500 mt-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.82..."/>
            </svg>
            <span>(+1) 123 456 7893</span>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-gray-500 mt-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2..."/>
            </svg>
            <span>name@email.com</span>
          </div>
        </div>

        <img
          src="./contact/contact.png"
          alt="Modern office chairs"
          className="w-full  mt-6 lg:m-0 h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section - Contact Form */}
      <div className="lg:w-1/2 w-full">
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 text-gray-900"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 text-gray-900"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Your phone number"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 text-gray-900"
            />
          </div>
          <div>
            <textarea
              rows="3"
              placeholder="Your message"
              className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 text-gray-900 resize-y"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition duration-300"
          >
            Send message
          </button>
        </form>
      </div>
    </div>

  </div>
</div>

      </div>
    </div>
  

    {/* Image Section */}
          <div className="mt-8 relative">
            <img
              src="./contact/image.png"
              alt="Modern living room interior design"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
            
          </div>
  </>
  )
}
