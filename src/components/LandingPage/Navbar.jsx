import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/sign-in');
  };

  return (
    <nav className="bg-white text-black p-4 cursor-pointer">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-sky-900"
        >
          TechCity
        </motion.div>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-8"
        >
          <li className="hover:text-sky-900 transition duration-300">Home</li>
          <li className="hover:text-sky-900 transition duration-300">About Us</li>
          <li className="hover:text-sky-900 transition duration-300">Services</li>
          <li className="hover:text-sky-900 transition duration-300">F.A.Q's</li>
          <li className="hover:text-sky-900 transition duration-300">Testimonial</li>
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button 
            onClick={handleLoginClick}
            className="bg-sky-900 hover:bg-sky-950 text-white w-24 font-bold py-2 px-4 rounded-full"
          >
            Login
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
