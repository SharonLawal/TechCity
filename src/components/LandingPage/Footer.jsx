import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* TechCity Description */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-blue-700">TechCity</h2>
          <p className="mt-4 text-gray-600">
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra 
            videa magna derita valies darta donna mare fermentum iaculis eu non diam 
            phasellus.
          </p>
          <div className="flex space-x-4 mt-6 text-blue-500">
            <FaTwitter className="cursor-pointer hover:text-blue-700" size={24} />
            <FaFacebook className="cursor-pointer hover:text-blue-700" size={24} />
            <FaInstagram className="cursor-pointer hover:text-blue-700" size={24} />
            <FaLinkedin className="cursor-pointer hover:text-blue-700" size={24} />
          </div>
        </div>
        
        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Useful Links</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-blue-700">lorem ipsum</a></li>
            <li><a href="#" className="hover:text-blue-700">lorem ipsum</a></li>
            <li><a href="#" className="hover:text-blue-700">lorem ipsum</a></li>
            <li><a href="#" className="hover:text-blue-700">lorem ipsum</a></li>
            <li><a href="#" className="hover:text-blue-700">lorem ipsum</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Our Services</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-blue-700">lorem ipsum</a></li>
            <li><a href="#" className="hover:text-blue-700">lorem ipsum</a></li>
            <li><a href="#" className="hover:text-blue-700">lorem ipsum</a></li>
            <li><a href="#" className="hover:text-blue-700">lorem ipsum</a></li>
            <li><a href="#" className="hover:text-blue-700">lorem ipsum</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>A108 Adam Street</li>
            <li>New York, NY 535022</li>
            <li>United States</li>
            <li><strong>Phone:</strong> +1 5589 55488 55</li>
            <li><strong>Email:</strong> info@example.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
