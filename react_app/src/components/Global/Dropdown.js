// Dropdown.js
import React from 'react';
import './Dropdown.css';
import logo from '../../assets/images/nlogo.png';

const Dropdown = ({ isOpen, section, onMouseLeave }) => {
  const getDropdownContent = () => {
    
    switch (section) {
        case "services":
            return (
                <div className={`dropdown-content bg-gray-700 text-white min-w-full absolute inset-x-0 top-full z-10`}>
                  {/* First Row with Background Color */}
                  <div className="flex flex-wrap">
                    <div className="w-1/3">
                      <div className="text-white"> {/* Apply bg-gray-300 to this div */}
                      <div className="flex items-center"> {/* This div is now a flex container aligning items center */}
                            <img src={logo} alt="LogaXP Logo" className="h-5 mr-2 mb-2" /> {/* Adjusted className for margin right */}
                            <h2 className="font-bold text-xs mb-2 text-white uppercase">LogaXP</h2>
                        </div>
                        <hr className="mb-4 border-green-500 w-full mx-auto  border-2" />
                        <ul className="space-y-1">
                          <li>
                            <a href="/hr-management" className="text-white hover:text-gray-200">HR Management</a>
                            <p className="text-gray-400 text-sm mb-4">Management of human capital</p>
                            <hr className="mb-4 border-white w-full mx-auto  border-2" />
                          </li>
                          <li>
                            <a href="/employee-recruitment" className="text-white hover:text-gray-200">Recruitment</a>
                            <p className="text-gray-400 text-sm mb-4">Management of human capital</p>
                            <hr className="mb-4 border-white w-full mx-auto  border-2" />
                          </li>
                        </ul>
                      </div>
                    </div>
              
                    <div className="w-1/3">
                      <h2 className="font-bold text-xl mb-2 ml-">Utility Applications</h2>
                      <ul className="space-y-1">
                        <li>
                          <a href="/billing-systems" className="text-gray-400 hover:text-gray-200">Billing Systems</a>
                        </li>
                        <li>
                          <a href="/workflow-automation" className="text-gray-400 hover:text-gray-200">Workflow Automation</a>
                        </li>
                        <li>
                          <a href="/customer-relations" className="text-gray-400 hover:text-gray-200">Customer Relations</a>
                        </li>
                      </ul>
                    </div>
              
                    <div className="w-1/3">
                      <h2 className="font-bold text-black  text-xl mb-2 ml-5">Insights</h2>
                      <ul>
                        <li className="mb-1">Reports</li>
                        <li className="mb-1">Analysis</li>
                        <li className="mb-1">Trends</li>
                        {/* Add more insights as needed */}
                      </ul>
                    </div>
                  </div>
              
                  {/* Add more rows as needed */}
                </div>
              );
              
      case 'industries':
        return (
            <div className={`dropdown-content bg-gray-700 text-white p-4 space-y-4 absolute inset-x-0 top-full z-10 shadow-lg border-t-4 border-indigo-600`}>
    {/* First Row */}
    <div className="flex flex-wrap">
      {/* First Column with bg-gray-300 */}
      <div className="w-1/3"> {/* Apply bg-gray-300 to this div */}
      <div className="flex items-center"> {/* This div is now a flex container aligning items center */}
    <img src={logo} alt="LogaXP Logo" className="h-5 mr-2 mb-2" /> {/* Adjusted className for margin right */}
    <h2 className="font-bold text-xs mb-2 text-white uppercase">LogaXP</h2>
  </div>
        <hr className="mb-4 border-green-500 w-full mx-auto  border-2" />
        <div className="p-4"> {/* Apply padding here */}
       
          <ul className="space-y-1">
            <li>
              <a href="/hr-management" className="text-white hover:text-gray-600">HR Management</a>
              <p className="text-gray-400 text-sm mb-4">Management of human capital</p>
              <hr className="mb-4 border-white w-full mx-auto  border-2" />
              
            </li>
            <li>
              <a href="/employee-recruitment" className="text-white hover:text-gray-600">Employee Recruitment</a>
            </li>
            <li>
              <a href="/performance-tracking" className="text-white hover:text-gray-600">Performance Tracking</a>
            </li>
          </ul>
        </div>
      </div>
                
                {/* The rest of the content remains the same */}
                {/* Second Row */}
                <div className="w-full md:w-1/3">
                  <div className="space-y-2">
                    <h2 className="font-bold text-xl text-indigo-400">Connect</h2>
                    <ul className="space-y-1">
                      <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">Contact</li>
                      <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">Support</li>
                      <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">Feedback</li>
                      {/* Add more connections as needed */}
                    </ul>
                  </div>
                </div>
          
                {/* Third Row */}
                <div className="w-full md:w-1/3">
                  <div className="text-center">
                    <p className="text-sm">Discover the unexpected. Join our journey and be part of something bigger.</p>
                    <button className="mt-3 bg-indigo-500 text-black font-bold py-2 px-4 rounded-full hover:bg-indigo-600 transition duration-300 ease-in-out">
                      Join Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
      case 'insights':
        return (
            <div className={`dropdown-content bg-gray-700 text-white p-4 space-y-4 absolute inset-x-0 top-full z-10 shadow-lg border-t-4 border-indigo-600`}>
              <div className="flex flex-wrap justify-between">
                {/* First Row */}
                <div className="w-full md:w-1/3">
                <div className="flex items-center"> {/* This div is now a flex container aligning items center */}
                    <img src={logo} alt="LogaXP Logo" className="h-5 mr-2 mb-2" /> {/* Adjusted className for margin right */}
                    <h2 className="font-bold text-xs mb-2 text-white uppercase">LogaXP</h2>
                </div>
                 <hr className="mb-4 border-green-500 w-full mx-auto  border-2" />
                  <div className="space-y-2">
                    <h2 className="font-bold text-xl text-indigo-400">Explore More</h2>
                    <ul className="space-y-1">
                      <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">Careers</li>
                      <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">About Us</li>
                      <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">Events</li>
                      {/* Add more options as needed */}
                    </ul>
                  </div>
                </div>
          
                {/* Second Row */}
                <div className="w-full md:w-1/3">
                  <div className="space-y-2">
                    <h2 className="font-bold text-xl text-indigo-400">Connect</h2>
                    <ul className="space-y-1">
                      <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">Contact</li>
                      <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">Support</li>
                      <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">Feedback</li>
                      {/* Add more connections as needed */}
                    </ul>
                  </div>
                </div>
          
                {/* Third Row */}
                <div className="w-full md:w-1/3">
                  <div className="text-center">
                    <p className="text-sm">Discover the unexpected. Join our journey and be part of something bigger.</p>
                    <button className="mt-3 bg-indigo-500 text-white font-bold py-2 px-4 rounded-full hover:bg-indigo-600 transition duration-300 ease-in-out">
                      Join Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
          
      case 'careers':
        return (
            <div className={`dropdown-content bg-gray-700 text-white p-4 space-y-4 absolute inset-x-0 top-full z-10 shadow-lg border-t-4 border-indigo-600`}>
              <div className="flex flex-wrap justify-between">
                {/* First Row */}
                <div className="w-full md:w-1/3">
                <div className="flex items-center"> {/* This div is now a flex container aligning items center */}
                    <img src={logo} alt="LogaXP Logo" className="h-5 mr-2 mb-2" /> {/* Adjusted className for margin right */}
                    <h2 className="font-bold text-xs mb-2 text-white uppercase">LogaXP</h2>
                </div>
                <hr className="mb-4 border-green-500 w-full mx-auto  border-2" />
                  <div className="space-y-2">
                    <h2 className="font-bold text-xl text-indigo-400">Careers</h2>
                    <ul className="space-y-1">
                      <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">Open Positions</li>
                      <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">Application Process</li>
                      <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">Benefits</li>
                      {/* Add more options as needed */}
                    </ul>
                  </div>
                </div>
          
                {/* Second Row */}
                <div className="w-full md:w-1/3">
                  <div className="space-y-2">
                    <h2 className="font-bold text-xl text-indigo-400">Connect</h2>
                    <ul className="space-y-1">
                      <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">Contact</li>
                      <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">Support</li>
                      <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">Feedback</li>
                      {/* Add more connections as needed */}
                    </ul>
                  </div>
                </div>
          
                {/* Third Row */}
                <div className="w-full md:w-1/3">
                  <div className="text-center">
                    <p className="text-sm">Join our team and make an impact!</p>
                    <button className="mt-3 bg-indigo-500 text-white font-bold py-2 px-4 rounded-full hover:bg-indigo-600 transition duration-300 ease-in-out">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
          
      default:
        // Handle any cases that are not specifically matched by the other cases
        return  <div className={`dropdown-content bg-gray-700 text-white p-4 space-y-4 absolute inset-x-0 top-full z-10 shadow-lg border-t-4 border-indigo-600`}>
        <div className="space-y-2">
          <h2 className="font-bold text-xl text-indigo-400">Default Section</h2>
          <ul className="space-y-1">
            <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">Option 1</li>
            <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">Option 2</li>
            <li className="transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white rounded-md p-2">Option 3</li>
            {/* Add more default options as needed */}
          </ul>
        </div>
      </div>
    }
  };

 const dropdownClasses = isOpen ? 'dropdown-open' : '';

return (
  <div className={dropdownClasses} onMouseLeave={onMouseLeave}>
    {getDropdownContent()}
  </div>
);

};

export default Dropdown;
