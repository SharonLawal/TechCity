import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaProjectDiagram, FaBriefcase, FaTools, FaNetworkWired, FaChalkboardTeacher } from 'react-icons/fa';

const servicesData = [
  {
    title: 'Developer Profiles',
    description: 'Create A Comprehensive Profile To Showcase Your Skills, Projects, And Experience.',
    icon: <FaUser size={40} className="text-blue-600" />,
  },
  {
    title: 'Project Showcase',
    description: 'Present Your Work And Gain Visibility Within The Community And Among Potential Employers.',
    icon: <FaProjectDiagram size={40} className="text-blue-600" />,
  },
  {
    title: 'Job Board',
    description: 'Explore And Apply For Job Opportunities That Match Your Expertise And Career Aspirations.',
    icon: <FaBriefcase size={40} className="text-blue-600" />,
  },
  {
    title: 'Collaboration Tools',
    description: 'Collaborate On Projects, Share Code, And Communicate With Peers Through Our Integrated Tools.',
    icon: <FaTools size={40} className="text-blue-600" />,
  },
  {
    title: 'Networking',
    description: 'Join Discussions, Forums, And Events To Connect With Other Developers And Industry Experts.',
    icon: <FaNetworkWired size={40} className="text-blue-600" />,
  },
  {
    title: 'Mentorship Programs',
    description: 'Connect Less Experienced Developers With Seasoned Mentors For Guidance, Career Advice, And Skill Development.',
    icon: <FaChalkboardTeacher size={40} className="text-blue-600" />,
  },
];

const Services = () => {
  return (
    <section className="px-6 lg:px-20 py-16 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
          Services
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-1/4 bg-green-500"></span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
            className="p-6 bg-white shadow-md rounded-lg text-center"
          >
            <div className="flex justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
