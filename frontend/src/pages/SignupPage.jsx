import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Create an Account</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input id="fullname" name="fullname" type="text" required className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-teal-500 focus:border-teal-500"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input id="email" name="email" type="email" required className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-teal-500 focus:border-teal-500"/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" required className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-teal-500 focus:border-teal-500"/>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-teal-600 hover:text-teal-500">Sign in</Link>
        </p>
      </div>
    </div>
  );
};
export default SignupPage;