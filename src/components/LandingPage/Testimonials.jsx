import React, { useState } from 'react';
import { FaCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonialsData = [
  {
    avatar: 'https://avatars.dicebear.com/api/avataaars/example1.svg',
    text: "Lorem Ipsum Is Simply Dummy Text Of The Any An Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's.",
  },
  {
    avatar: 'https://avatars.dicebear.com/api/avataaars/example2.svg',
    text: "The quick brown fox jumps over the lazy dog. Lorem Ipsum Has Been The Industry's.",
  },
  {
    avatar: 'https://avatars.dicebear.com/api/avataaars/example3.svg',
    text: "A journey of a thousand miles begins with a single step. Lorem Ipsum Has Been The Industry's.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-white py-12 px-6 flex flex-col items-center relative">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h3 className="text-2xl font-semibold text-sky-600 mb-6">Testimonials</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Here, you'll find answers to some of the most common questions about TechCity. Whether you're new to the platform or need help with a specific feature.
          </p>
        </div>
        <div className="relative w-full max-w-md border border-gray-200 rounded-lg shadow-lg p-6">
          <FaArrowLeft 
            onClick={handlePrevClick} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-800" 
            size={24} 
          />
          <div className="flex flex-col items-center">
            <img 
              src={testimonialsData[currentIndex].avatar} 
              alt="Avatar" 
              className="w-20 h-20 rounded-full mb-4"
            />
            <p className="text-center text-gray-700 mb-6">
              {testimonialsData[currentIndex].text}
            </p>
          </div>
          <FaArrowRight 
            onClick={handleNextClick} 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-800" 
            size={24} 
          />
          <div className="flex justify-center space-x-2 mt-4">
            {testimonialsData.map((_, index) => (
              <FaCircle 
                key={index} 
                onClick={() => handleDotClick(index)}
                className={`cursor-pointer ${index === currentIndex ? 'text-blue-500' : 'text-gray-300'}`} 
                size={12} 
              />
            ))}
          </div>
        </div>            
      </div>
    </section>
  );
};

export default TestimonialsSection;
