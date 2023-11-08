import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { ReactComponent as EditIcon } from '../../../assets/images/edit.svg'; 

const DiscoverComponent = () => {
    return (
        <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">DISCOVER WHAT'S HAPPENING</h2>
            <div className="flex flex-wrap md:space-x-4 mb-4 space-y-2 md:space-y-0 text-sm">
                <button className="flex items-center space-x-2 border rounded-md px-2 py-1 text-blue-600 font-semibold mb-2 md:mb-0 w-full md:w-auto">
                    <span>⭐</span>
                    <span>Following</span>
                </button>
                <button className="flex items-center space-x-2 border rounded-md px-2 py-1 text-gray-600 mb-2 md:mb-0 w-full md:w-auto">
                    <span>🔥</span>
                    <span>Popular</span>
                </button>
                <button className="flex items-center space-x-2 border rounded-md px-2 py-1 text-gray-600 mb-2 md:mb-0 w-full md:w-auto">
                    <span>📢</span>
                    <span>Announcements</span>
                </button>
                <button className="flex items-center space-x-2 border rounded-md px-2 py-1 text-gray-600 w-full md:w-auto">
                    <span>📅</span>
                    <span>Calendars</span>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-md shadow-sm">
                    <h3 className="text-md font-semibold mb-2">Feed Title Here</h3>
                    <p className="text-gray-600 mb-2 text-sm">Short description or snippet from the feed...</p>
                    <EditIcon 
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 rounded-md px-2 py-1 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60" 
                        aria-label="Edit" 
                        role="button" 
                        title="Edit"
                        tabIndex="0"
                    />
                </div>
                <div className="bg-slate-50 p-4 rounded-md shadow-sm">
                    <h3 className="text-md font-semibold mb-2 ">Another Feed Title</h3>
                    <p className="text-gray-600 mb-2 text-sm">Another short description or snippet...</p>
                    <EditIcon 
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 rounded-md px-2 py-1 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60" 
                        aria-label="Edit" 
                        role="button" 
                        tabIndex="0"
                        title="Edit"
                    />
                </div>
                {/* Add more feed items as necessary */}
            </div>
        </div>
    );
}

export default DiscoverComponent;

