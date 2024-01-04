import React from 'react';
import { FaKey, FaLinkedinIn, FaTwitter, FaFacebookF, FaGoogle, FaApple } from 'react-icons/fa';

const JoinUs = () => {
  const brandColor = '#0047b3';
  const secondaryColor = '#ffcc00'; 
 

  return (
    <div className="max-w-md mx-auto bg-gray-700 p-6 rounded-lg shadow-md mb-20 mt-10 opacity-90">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Join LogaXP</h2>
        <p className="text-gray-100">Connect your email or social media profile to get started</p>
      </div>

      {/* Select dropdown */}
      <div className="mb-4">
        <div className="relative">
          <select className="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="location">
            <option>United States (English)</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="mt-2 flex items-center">
          <input id="checkbox" type="checkbox" className="form-checkbox h-4 w-4"/>
          <label htmlFor="checkbox" className="ml-2 text-sm text-gray-50">I confirm my location</label>
        </div>
      </div>

     {/* Form fields */}
<div className="space-y-4 mb-4">
  <input className="form-input mt-1 block w-full bg-gray-100 rounded-md py-2 px-4" id="email" type="text" placeholder="Email Address*" required/>
  <div className="grid grid-cols-2 gap-4">
    <input className="form-input mt-1 block w-full bg-gray-100 rounded-md py-2 px-4" id="first-name" type="text" placeholder="First Name*" required/>
    <input className="form-input mt-1 block w-full bg-gray-100 rounded-md py-2 px-4" id="last-name" type="text" placeholder="Last Name*" required/>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <input className="form-input mt-1 block w-full bg-gray-100 rounded-md py-2 px-4" id="password" type="password" placeholder="Create Password*" required/>
    <input className="form-input mt-1 block w-full bg-gray-100 rounded-md py-2 px-4" id="re-enter-password" type="password" placeholder="Confirm Password*" required/>
  </div>
</div>



      {/* Submit Button */}
      <div className="mb-8">
        <button className="w-full text-white py-2 px-4 rounded" style={{ backgroundColor: brandColor }}>
          Get Started
        </button>
      </div>

      {/* Social Media Buttons */}
      <div className="flex items-center justify-between mb-4">
        <button aria-label="Single Sign-On" className="text-white"><FaKey /></button>
        <button aria-label="LinkedIn" className="text-blue-600"><FaLinkedinIn /></button>
        <button aria-label="Twitter" className="text-blue-400"><FaTwitter /></button>
        <button aria-label="Facebook" className="text-blue-600"><FaFacebookF /></button>
        <button aria-label="Google" className="text-red-500"><FaGoogle /></button>
        <button aria-label="Apple" className="text-white"><FaApple /></button>
      </div>

      <div className="text-center">
        <a className="inline-block align-baseline font-bold text-sm" style={{ color: secondaryColor }} href="/login">
          Already a member? Sign in
        </a>
      </div>

      {/* Privacy Note */}
      <div className="mt-6 text-xs text-center text-gray-50">
        By joining, you agree to our Privacy Policy and Terms of Service.
      </div>
    </div>
  );
};

export default JoinUs;
