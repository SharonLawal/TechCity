import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqsData = [
  {
    question: 'What Is TechCity?',
    answer: 'TechCity Is A Platform Designed To Connect Developers With Fellow Developers And Potential Employers. It Allows Developers To Showcase Their Work, Collaborate On Projects, And Find Career Opportunities.',
  },
  {
    question: 'What Can I Do With My TechCity Profile?',
    answer: 'With A TechCity Profile, You Can Showcase Your Skills, Projects, And Experience To Potential Employers And Collaborators.',
  },
  {
    question: 'How Does The Mentorship Program Work?',
    answer: 'TechCity Mentorship Program Connects Less Experienced Developers With Seasoned Mentors For Guidance, Career Advice, And Skill Development.',
  },
  {
    question: 'Is My Personal Information Secure On TechCity?',
    answer: 'Yes, We Take Data Privacy Seriously. Your Personal Information Is Secure And Will Not Be Shared Without Your Consent.',
  },
];

const FAQItem = ({ faq, index, toggleFAQ, isOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
      className="mb-4"
    >
      <div
        className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg cursor-pointer"
        onClick={() => toggleFAQ(index)}
      >
        <h4 className="text-lg font-medium text-gray-800">{faq.question}</h4>
        {isOpen ? (
          <FaChevronUp className="text-gray-600" />
        ) : (
          <FaChevronDown className="text-gray-600" />
        )}
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="p-4 bg-gray-50 rounded-lg shadow-inner"
        >
          <p className="text-gray-700 ">{faq.answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="px-6 lg:px-20 py-16 bg-white">
        <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2">
                <h3 className="text-2xl font-semibold text-sky-600 mb-6">Frequently Asked Questions</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Here, you'll find answers to some of the most common questions about TechCity. Whether you're new to the platform or need help with a specific feature.
                </p>
                </div>
            
            <div className="w-1/2 mx-auto">
                {faqsData.map((faq, index) => (
                <FAQItem
                    key={index}
                    faq={faq}
                    index={index}
                    isOpen={openFAQ === index}
                    toggleFAQ={toggleFAQ}
                />
                ))}
            </div>
        </div>
    </section>
  );
};

export default FAQs;
