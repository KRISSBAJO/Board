import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profilePic1 from '../../../assets/images/login.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  
  faUser,
  faKey,
  faSignOutAlt,
  faAdjust,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as SearchIcon } from '../../../assets/images/search.svg';
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg'; // Assuming you have an SVG named close.svg
import { ReactComponent as EditIcon } from '../../../assets/images/settings.svg';
import { useEmployee } from '../../../context/EmployeeContext';

const HeaderComponent = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const settingsRef = useRef(null); // Separate ref for the settings dropdown

  const [isSettingsDropdownOpen, setSettingsDropdownOpen] = useState(false);

  const { employee } = useEmployee();

  const toggleSettingsDropdown = () => {
    setSettingsDropdownOpen(!isSettingsDropdownOpen);
  };

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Function to close all dropdowns when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
    if (settingsRef.current && !settingsRef.current.contains(event.target)) {
      setSettingsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Search action triggered!");
  };
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6 bg-white shadow-lg relative">
            {/* Logo/Branding */}
            <div className="text-xl md:text-2xl font-semibold text-blue-600 mb-2 md:mb-0">
            Welcome {employee?.first_name || "User"} !

            </div>

            {/* Search Bar */}
            <div className={`relative w-full md:w-1/3 ${!isSearchOpen && 'hidden'} md:block`}>
                <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"/>
                <button onClick={handleSearch} className="absolute top-1/2 transform -translate-y-1/2 left-3 w-6 h-6 text-gray-400 focus:outline-none">
                    <SearchIcon className="w-full h-full" />
                </button>
            </div>

            {/* Search Icon for Mobile */}
            <button className="md:hidden mb-2" onClick={() => setSearchOpen(!isSearchOpen)}>
                <SearchIcon className="w-6 h-6 text-gray-400" />
            </button>
           {/* Resource Dropdown & Profile */}
           <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 w-full md:w-auto">
                {/* Resources */}
               <div className="relative group w-full md:w-auto" ref={dropdownRef}>
                    <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="text-lg md:text-xl text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-200 w-full text-left">
                        Resources
                    </button>
                {/* Dropdown Items */}
                {isDropdownOpen && (
                    <div className="absolute top-full mt-2 w-64 max-h-60 overflow-y-auto rounded-md shadow-lg bg-white z-10">
                        <div className="py-1 relative">
                            <CloseIcon onClick={() => setDropdownOpen(false)} className="cursor-pointer p-2 absolute top-0 right-0" />
                             {/* Documents Dropdown */}
            <div className="relative group">
                <a href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenDropdown(openDropdown === 'documents' ? null : 'documents');
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
                    Documents
                </a>
                {openDropdown === 'documents' && (
                    <div className="absolute left-0 mt-2 w-64 max-h-60 overflow-y-auto rounded-md shadow-lg bg-white z-10">
                        <a href="/roles_form" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
                            Create DocumentTypes
                        </a>
                        <a href="/list_roles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
                            List DocumentTypes
                        </a>
                    </div>
                )}
            </div>

            {/* Collections Dropdown */}
            <div className="relative group">
                <a href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenDropdown(openDropdown === 'collections' ? null : 'collections');
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
                    Collections
                </a>
                {openDropdown === 'collections' && (
                    <div className="absolute left-0 mt-2 w-64 max-h-60 overflow-y-auto rounded-md shadow-lg bg-white z-10">
                        <a href="/createCollection" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
                            Create Collection
                        </a>
                        <a href="/listCollection" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
                            List Collection
                        </a>
                    </div>
                )}
            </div>

            {/* SOPs Dropdown */}
            <div className="relative group">
                <a href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenDropdown(openDropdown === 'sops' ? null : 'sops');
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
                    SOPs
                </a>
                {openDropdown === 'sops' && (
                    <div className="absolute left-0 mt-2 w-64 max-h-60 overflow-y-auto rounded-md shadow-lg bg-white z-10">
                        <a href="/createSop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
                            Create SOP
                        </a>
                        <a href="/listSop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
                            List SOP
                        </a>
                    </div>
                )}
            </div>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Knowledge Center</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Access</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Manuals</a>
                            <a href="/invitation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Guides</a>
                            
                        </div>
                    </div>
                )}

            </div>
 {/* User Profile & Settings */}
 <div className="flex justify-between w-full md:w-auto md:flex md:items-center md:space-x-6">
        
        {/* User avatar */}
        <div className="w-1/2 md:w-auto flex justify-center">
          <img src={employee?.profile_picture || profilePic1} alt="User Avatar" className="w-8 md:w-10 h-8 md:h-10 object-cover rounded-full shadow" />
        </div>

        {/* Settings */}
        <div className="w-1/2 md:w-auto flex justify-end" ref={settingsRef}>
          <EditIcon 
            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 rounded-md px-2 py-1 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60" 
            aria-label="Edit" 
            role="button" 
            tabIndex="0"
            title="Settings" 
            onClick={toggleSettingsDropdown}
          />
          {/* Settings Dropdown Menu */}
          {isSettingsDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-20">
              {/* Close button */}
              <div className="flex justify-end px-4 py-2">
                <CloseIcon onClick={toggleSettingsDropdown} className="text-gray-800 cursor-pointer" />
              </div>
              {/* Dropdown items */}
              <Link to="/profile_picture" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
                <FontAwesomeIcon icon={faUser} className="mr-3" /> My Profile
              </Link>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
                <FontAwesomeIcon icon={faKey} className="mr-3" /> Change Password
              </a>
              <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" /> Logout
              </Link>
              <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
                <FontAwesomeIcon icon={faAdjust} className="mr-3" />
                <span>Dark Mode</span>
                <input type="checkbox" className="ml-3" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};


export default HeaderComponent;