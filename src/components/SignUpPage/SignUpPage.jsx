import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Perform sign-up logic here (e.g., API call)
    
    // After successful sign-up, navigate to the sign-in page
    navigate('/sign-in');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white flex-col m-8">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8">
          <button
            onClick={() => navigate('/sign-in')}
            className="px-6 py-2 text-gray-500 border border-gray-300 rounded-l-full hover:text-blue-900 hover:border-blue-900 transition duration-300 focus:outline-none"
          >
            Sign In
          </button>
          <button
            className="px-6 py-2 bg-blue-900 text-white rounded-r-full shadow-md hover:bg-blue-950 transition duration-300 focus:outline-none"
          >
            Sign Up
          </button>
        </div>
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        {/* Social Sign Up Buttons */}
        <div className="flex flex-col space-y-4 mb-6">
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-full py-2 hover:bg-gray-100 transition duration-300">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-5 h-5 mr-3"
            />
            <span className="text-gray-700 font-medium">Sign up with Google</span>
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-full py-2 hover:bg-gray-100 transition duration-300">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="w-5 h-5 mr-3"
            />
            <span className="text-gray-700 font-medium">Sign up with Apple</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSignUp}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Email address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="At least 8 characters"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Create Account
          </button>
        </form>

        {/* Sign In Link */}
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/sign-in')}
            className="text-blue-600 hover:underline focus:outline-none"
          >
            Sign in now
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
