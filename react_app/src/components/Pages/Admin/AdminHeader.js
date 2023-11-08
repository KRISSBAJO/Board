import React, { useState, useEffect, useRef } from 'react';
import { getUserById, updateProfilePicture } from '../../../api/users_api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faKey, faSignOutAlt, faAdjust, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { ReactComponent as Settings } from '../../../assets/images/settings.svg';
import { ReactComponent as SearchIcon } from '../../../assets/images/search.svg';
import { useEmployee } from '../../../context/EmployeeContext';


function AdminHeader() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [profilePicture, setProfilePicture] = useState(null);
    const dropdownRef = useRef(null);
    const { employee, setEmployee } = useEmployee();


    const employeeId = employee?.id;
  
    useEffect(() => {
        if (employeeId) {
          // Fetch the current user's profile information when the component mounts
          (async () => {
            const response = await getUserById(employeeId);
            if (response.success) {
              setProfilePicture(response.data.profile_picture);
              setEmployee(response.data);
            }
            // You may handle error case here
          })();
        }
      }, [employeeId, setEmployee]); 
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <nav className="bg-slate-50 shadow-lg p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
                {/* Link to the profile picture update page */}
                <Link to="/profile_picture?openModal=true">
      <img src={profilePicture || ''} alt="Profile" className="mr-3 h-6 sm:h-9"/>
    </Link>
                <span className="self-center text-xl font-semibold whitespace-nowrap text-black"> Admin Portal </span>
            </div>
      {/* Search bar */}
      <div className="flex-grow max-w-2xl mx-10">
        <div className="relative">
          <input type="search" name="search"
            className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-white focus:ring-0 sm:text-sm"
            placeholder="Search"
            autoComplete="off"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* User account info */}
      
      <div className="flex items-center">
      

        <div className="flex items-center relative" ref={dropdownRef}>
          <div onClick={toggleDropdown} className="flex items-center cursor-pointer">
            <div className="mr-4 text-white">
              <span className="hidden sm:block text-gray-700 mr-20">{employee?.first_name || 'Welcome'} {employee?.last_name || 'User'}</span>
              <span className="block sm:hidden text-gray-900">CB</span>
            </div>
            <Settings className="h-8 w-8" alt="User avatar" />
            <FontAwesomeIcon icon={faCaretDown} className="ml-2 text-black" />
          </div>
                
          {/* Dropdown Menu */}
          <div className={`absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 ${isDropdownOpen ? 'block' : 'hidden'}`}>
            {/* Close button */}
            <div className="flex justify-end px-4 py-2">
              <FontAwesomeIcon icon={faTimes} className="text-gray-800 cursor-pointer" onClick={toggleDropdown} />
            </div>
            {/* Dropdown items */}
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
              <FontAwesomeIcon icon={faUser} className="mr-3" /> My Contact Info
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
              <FontAwesomeIcon icon={faKey} className="mr-3" /> Change Password
            </a>
            <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" /> Logout
            </Link>
            <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
              <FontAwesomeIcon icon={faAdjust} className="mr-3" />
              <span>Dark Navigation</span>
              <input type="checkbox" className="ml-3" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default AdminHeader