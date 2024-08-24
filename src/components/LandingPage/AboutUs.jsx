import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-sky-600 mb-6">TechCity</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Welcome to TechCity, where innovation meets opportunity. At TechCity, we are dedicated to bridging the gap between developers and the tech community, fostering collaboration, and enhancing career prospects.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">
              Sign Up & Start
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-4 rounded-full">
                  {/* Icon SVG here */}
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    {/* Replace with appropriate icon */}
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93h2c0 2.76 2.24 5 5 5v2.93zm6.9-2.54C17.1 17.69 14.76 18.99 12 19v-2c1.66 0 3.14-.67 4.24-1.76l1.66 1.66c.08.08.18.13.29.13s.21-.05.29-.13c.39-.39.39-1.02 0-1.41l-1.66-1.66C18.33 15.14 19 13.66 19 12h2c0 3.08-2.13 5.64-5.1 6.39zM12 4c4.41 0 8 3.59 8 8h-2c0-3.31-2.69-6-6-6V4zm-4.24 9.76C6.67 12.86 6 11.38 6 10H4c0 2.76 2.24 5 5 5v2c-3.31 0-6-2.69-6-6h2c0 1.38.67 2.86 1.76 3.76l1.66-1.66c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-1.66 1.66z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-800">Seamless Connections</h4>
                  <p className="text-gray-600">TechCity guarantees a streamlined and efficient connection process.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-4 rounded-full">
                  {/* Icon SVG here */}
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    {/* Replace with appropriate icon */}
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93h2c0 2.76 2.24 5 5 5v2.93zm6.9-2.54C17.1 17.69 14.76 18.99 12 19v-2c1.66 0 3.14-.67 4.24-1.76l1.66 1.66c.08.08.18.13.29.13s.21-.05.29-.13c.39-.39.39-1.02 0-1.41l-1.66-1.66C18.33 15.14 19 13.66 19 12h2c0 3.08-2.13 5.64-5.1 6.39zM12 4c4.41 0 8 3.59 8 8h-2c0-3.31-2.69-6-6-6V4zm-4.24 9.76C6.67 12.86 6 11.38 6 10H4c0 2.76 2.24 5 5 5v2c-3.31 0-6-2.69-6-6h2c0 1.38.67 2.86 1.76 3.76l1.66-1.66c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-1.66 1.66z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-800">Collaborative Opportunities</h4>
                  <p className="text-gray-600">Engage with a vibrant community of developers through project collaborations.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-4 rounded-full">
                  {/* Icon SVG here */}
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    {/* Replace with appropriate icon */}
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93h2c0 2.76 2.24 5 5 5v2.93zm6.9-2.54C17.1 17.69 14.76 18.99 12 19v-2c1.66 0 3.14-.67 4.24-1.76l1.66 1.66c.08.08.18.13.29.13s.21-.05.29-.13c.39-.39.39-1.02 0-1.41l-1.66-1.66C18.33 15.14 19 13.66 19 12h2c0 3.08-2.13 5.64-5.1 6.39zM12 4c4.41 0 8 3.59 8 8h-2c0-3.31-2.69-6-6-6V4zm-4.24 9.76C6.67 12.86 6 11.38 6 10H4c0 2.76 2.24 5 5 5v2c-3.31 0-6-2.69-6-6h2c0 1.38.67 2.86 1.76 3.76l1.66-1.66c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-1.66 1.66z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-800">Career Advancement</h4>
                  <p className="text-gray-600">TechCity helps you find the right roles that align with your skills and career goals.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-4 rounded-full">
                  {/* Icon SVG here */}
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    {/* Replace with appropriate icon */}
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93h2c0 2.76 2.24 5 5 5v2.93zm6.9-2.54C17.1 17.69 14.76 18.99 12 19v-2c1.66 0 3.14-.67 4.24-1.76l1.66 1.66c.08.08.18.13.29.13s.21-.05.29-.13c.39-.39.39-1.02 0-1.41l-1.66-1.66C18.33 15.14 19 13.66 19 12h2c0 3.08-2.13 5.64-5.1 6.39zM12 4c4.41 0 8 3.59 8 8h-2c0-3.31-2.69-6-6-6V4zm-4.24 9.76C6.67 12.86 6 11.38 6 10H4c0 2.76 2.24 5 5 5v2c-3.31 0-6-2.69-6-6h2c0 1.38.67 2.86 1.76 3.76l1.66-1.66c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-1.66 1.66z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-800">Showcase Your Skills</h4>
                  <p className="text-gray-600">Display your projects and achievements to attract potential employers and collaborators.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
