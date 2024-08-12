import React from 'react';

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 shadow-lg">
        <div className="flex justify-between mb-6">
          <button className="px-4 py-2 text-blue-900 border border-blue-900 rounded-full">Sign In</button>
          <button className="px-4 py-2 bg-blue-900 text-white rounded-full">Sign Up</button>
        </div>
        <button className="w-full flex items-center justify-center mb-4 bg-gray-100 p-2 rounded-full shadow-sm">
          <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5 mr-2" />
          Sign up with Google
        </button>
        <button className="w-full flex items-center justify-center mb-4 bg-gray-100 p-2 rounded-full shadow-sm">
          <img src="https://developer.apple.com/design/human-interface-guidelines/images/overview/app-icon-sets.jpg" alt="Apple" className="w-5 h-5 mr-2" />
          Sign up with Apple
        </button>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none" placeholder="First Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none" placeholder="Last Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none" placeholder="Email address" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Create Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none" placeholder="At least 8 characters" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none" placeholder="Confirm Password" />
          </div>
          <button className="w-full px-4 py-2 bg-blue-900 text-white rounded-lg">Sign Up</button>
        </form>
        <p className="mt-4 text-center">Already have an account? <a href="#" className="text-blue-900">Sign in now</a></p>
      </div>
    </div>
  );
}

export default SignUpPage;
