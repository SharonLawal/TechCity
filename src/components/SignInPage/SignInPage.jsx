import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => navigate('/sign-in')}
          className="px-6 py-2 bg-blue-900 text-white rounded-tl-full rounded-bl-full focus:outline-none"
        >
          Sign In
        </button>
        <button
          onClick={() => navigate('/sign-up')}
          className="px-6 py-2 text-blue-900 border border-blue-900 rounded-tr-full rounded-br-full focus:outline-none"
        >
          Sign Up
        </button>
      </div>

      {/* Sign In Form Box */}
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg border border-blue-200">
        <button className="w-full flex items-center justify-center mb-4 bg-gray-100 p-2 rounded-full shadow-sm focus:outline-none">
          <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5 mr-2" />
          Sign in with Google
        </button>
        <button className="w-full flex items-center justify-center mb-4 bg-gray-100 p-2 rounded-full shadow-sm focus:outline-none">
          <img src="https://developer.apple.com/design/human-interface-guidelines/images/overview/app-icon-sets.jpg" alt="Apple" className="w-5 h-5 mr-2" />
          Sign in with Apple
        </button>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or sign in with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          navigate('/');
        }}>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Email address" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Password" />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" className="mr-2 focus:ring-2 focus:ring-blue-200" />
            <label className="text-gray-700">Remember Me</label>
          </div>
          <button 
          type="submit" 
          onClick={() => navigate('/homepage')}
          className="w-full px-4 py-2 bg-blue-900 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200">
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-gray-700">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/sign-up')}
            className="text-blue-900 hover:underline focus:outline-none"
          >
            Sign up now
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignInPage;
