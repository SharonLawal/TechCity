import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <header className="bg-white shadow">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-900">TechCity</h1>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-600 hover:text-blue-900">Home</Link></li>
            <li><Link to="/about-us" className="text-gray-600 hover:text-blue-900">About Us</Link></li>
            <li><Link to="/services" className="text-gray-600 hover:text-blue-900">Services</Link></li>
            <li><Link to="/faqs" className="text-gray-600 hover:text-blue-900">F.A.Q's</Link></li>
            <li><Link to="/testimonials" className="text-gray-600 hover:text-blue-900">Testimonial</Link></li>
          </ul>
          <Link to="/sign-in" className="px-4 py-2 bg-blue-900 text-white rounded-full">Login</Link>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <section className="text-center py-10">
          <h2 className="text-5xl font-bold text-blue-900">Connect With Your Fellow Devs</h2>
          <p className="text-gray-600 mt-4">Transforming The Technology Landscape Forever By Changing How Developers Create Products And Interact With Each Other.</p>
          <Link to="/sign-up" className="mt-6 inline-block px-6 py-3 bg-blue-900 text-white rounded-full">Sign Up Now</Link>
        </section>

        {/* About Us Section */}
        <section id="about-us" className="py-10">
          <h2 className="text-3xl font-bold text-blue-900 text-center">About Us</h2>
          <p className="text-gray-600 mt-4 text-center">
            We are a community of passionate developers transforming the way technology is built and shared.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="py-10 bg-gray-100">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Our Services</h2>
          <p className="text-gray-600 mt-4 text-center">
            We offer a wide range of services to help developers collaborate, learn, and grow.
          </p>
        </section>

        {/* FAQ Section */}
        <section id="faqs" className="py-10">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Frequently Asked Questions</h2>
          <div className="text-gray-600 mt-4 text-center">
            <p>Q: What is TechCity?</p>
            <p>A: TechCity is a platform for developers to connect and share knowledge.</p>
            {/* Add more FAQs as needed */}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-10 bg-gray-100">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Testimonials</h2>
          <div className="text-gray-600 mt-4 text-center">
            <p>"TechCity has changed the way I work with other developers. Highly recommend!" - John Doe</p>
            {/* Add more testimonials as needed */}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">&copy; 2024 TechCity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
