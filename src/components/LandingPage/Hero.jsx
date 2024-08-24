import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate('/sign-up'); // Navigate to the Sign Up page
  };

  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/src/assets/Image.jpeg)' }}>
      <div className="absolute inset-0 bg-opacity-30" /> {/* Optional overlay for better text contrast */}
      <div className="relative z-10 flex items-center justify-start h-full px-6 lg:px-20">
        <div className="w-full md:w-3/4 text-left">
          <div className="max-w-screen-2xl">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-5xl md:text-6xl font-bold text-sky-400"
            >
              Connect With Your Fellow Devs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mt-4 text-black font-medium text-lg md:text-xl"
            >
              Transforming The Technology Landscape Forever By Changing How Developers Create Products And Interact With Each Other.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mt-8"
            >
              <button
                onClick={handleButtonClick} // Add onClick handler
                className="bg-blue-950 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full"
              >
                Sign Up Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
