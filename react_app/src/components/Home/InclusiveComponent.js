import React from "react";
import docIcon1 from "../../assets/images/docu4.png";
import docIcon2 from "../../assets/images/docu2.png";
import docIcon3 from "../../assets/images/docu5.png";
import { Link } from "react-router-dom";

const InclusiveComponent = () => {
  return (
    <div className="mb-40">
      <div className="flex flex-col items-center mb-6 space-y-4">
        <Link
          to="/signup"
          className="inline-block px-5 py-3 text-lg bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
        >
          Embark on Your Organized Odyssey
        </Link>
        <div className="bg-gradient-to-r from-green-400 via-yellow-400 to-green-600 rounded-full h-1.5 w-2/5 mb-2 hover:scale-x-110 transform transition-transform duration-300"></div>
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-full h-1.5 w-1/3 mb-2 hover:scale-x-110 transform transition-transform duration-300"></div>
        <div className="bg-gradient-to-r from-red-400 to-pink-600 rounded-full h-1.5 w-1/4 mb-6 hover:scale-x-110 transform transition-transform duration-300"></div>
      </div>

      <div className="flex flex-col lg:flex-row p-2 justify-center items-center bg-white gap-8 h-full ">
        {/* Left Section */}
        <div className="shadow-xl bg-gray-200 p-6 rounded-xl max-w-2xl w-full lg:w-1/2">
          <h1 className="text-3xl font-semibold mb-8">
            Dynamic products tailored for you
          </h1>
          <div className="flex flex-col space-y-6 w-full">
            {[docIcon1, docIcon2, docIcon3].map((icon, index) => (
              <button
                key={index}
                className="bg-white shadow-md flex items-center rounded-lg w-full h-28 transition duration-400 transform hover:scale-105"
              >
                <img
                  src={icon}
                  alt={`Icon ${index + 1}`}
                  className="w-24 h-auto object-cover rounded-lg"
                />
                <div className="flex-1 p-4 bg-gray-100 ml-4 rounded-lg">
                  <p className="text-lg">
                    {index === 0 &&
                      "Client House SOPs - Your guide to our standard operating procedures."}
                    {index === 1 &&
                      "Knowledge Gap Bridge Document - Bridging the knowledge divide efficiently."}
                    {index === 2 &&
                      "How to Documents, Manuals, Policies, and Procedures - All stored in a secure online hub."}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="shadow-xl flex-1 p-5 bg-green-100 rounded-xl flex flex-col justify-center items-center max-w-2xl w-full lg:w-1/2 mt-6 lg:mt-0">
          <blockquote className="mb-20 py-6 italic text-2xl font-medium text-gray-700 leading-relaxed text-center border-l-4 pl-8 border-green-300">
            “With product inclusion, it’s really looking end to end at the
            design and development process and saying: Who else needs to be in
            the room? Who else do we need to have perspective from? And I think
            co-creating is really integral to building a product that actually
            suits the world.”
          </blockquote>
          <div className="flex items-center justify-center">
            <img
              src={docIcon3}
              alt="Profile"
              className="w-24 h-24 object-cover rounded-full shadow-lg mr-4"
            />
            <div className="flex flex-col">
              <p className="font-bold text-gray-800 text-xl">
                Chris Bajo (SHE/HER)
              </p>
              <p className="text-gray-600">
                HEAD OF PRODUCT INCLUSION & EQUITY, LogaXP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InclusiveComponent;
