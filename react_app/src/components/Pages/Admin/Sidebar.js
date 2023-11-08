import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faBars, faUser,  faFileAlt, faFileUpload, faFolderOpen, faEdit, faTrashAlt, faPlusCircle, faTimesCircle,faUserPlus, faUserEdit, 
  faUserSlash, faUsers, faUserCheck, faUserTimes, faUsersCog, faUserShield, faHandshake, faHistory, faSearch, faFileContract, faBook, 
  faBookOpen, faDoorOpen, faWrench, faTimes, faUserLock, faMapPin, faAddressCard, faPlus
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('');
  const menuRef = useRef(null);

  const handleMenuClick = (menuName) => {
    setActiveMenu((prevActiveMenu) => (prevActiveMenu === menuName ? '' : menuName));
  };

  // Close the submenu if clicking outside of it
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setActiveMenu(''); // Close submenu
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <nav ref={menuRef}>
    <div className={`flex flex-col ${isOpen ? 'w-64' : 'w-20'} shadow-xl text-black h-screen p-5 pt-8 relative duration-300`}>
      <FontAwesomeIcon icon={faBars} className=" font-extrabold cursor-pointer absolute right-4 top-4" onClick={() => setIsOpen(!isOpen)} />

      <div className="flex flex-col  gap-4 mt-8">
        {/* Main Menu Item: My Forms */}
      <div className="flex items-center mb-4 mt-4 justify-between">
        <a href="#" className="flex items-center " onClick={() => handleMenuClick('myForms')}>
          <FontAwesomeIcon icon={faFileAlt} className="mr-3 h-5 text-gray-700"  title="Forms" /> <span className={`${isOpen ? 'block' : 'hidden'}`}>Forms</span>
        </a>
        {activeMenu === 'myForms' && (
          <div className="absolute bg-white rounded-lg shadow-lg p-3 mt-1 z-10">
            <div className="flex justify-between items-center">
              <h3 className="text-md md:text-xl font-semibold mx-auto text-blue-600 hover:text-blue-700 transition-colors duration-300">Forms</h3>
              <FontAwesomeIcon icon={faTimes} className="cursor-pointer" onClick={() => setActiveMenu('')} />
            </div>
        {/* My Forms Submenu */}
        <div className={`mt-2 flex flex-col gap-2 pl-2 ${activeMenu === 'myForms' ? 'block' : 'hidden'}`}>
          <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
            <FontAwesomeIcon icon={faFileContract} className="mr-3" /> <span>Documents</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
            <FontAwesomeIcon icon={faBook} className="mr-3" /> <span>SOPs Collection</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
            <FontAwesomeIcon icon={faBookOpen} className="mr-3" /> <span>Manual</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
            <FontAwesomeIcon icon={faSearch} className="mr-3" /> <span>Knowledge Center</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
            <FontAwesomeIcon icon={faDoorOpen} className="mr-3" /> <span>Access</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
            <FontAwesomeIcon icon={faWrench} className="mr-3" /> <span>Guides</span>
          </a>
        </div>
        </div>
        )}
        </div>

       {/* Main Menu Item: Users */}
                <div className="flex items-center mb-4 justify-between">
                <a href="#" className="flex items-center" onClick={() => handleMenuClick('users')}>
                    <FontAwesomeIcon icon={faUser} className="mr-3 h-5 text-green-700"  title="User" /> <span className={`${isOpen ? 'block' : 'hidden'}`}>Users</span>
                </a>
                {activeMenu === 'users' && (
                    <div className="absolute bg-white rounded-lg shadow-lg p-3 mt-1 z-10">
                    <div className="flex justify-between items-center">
                        <h3 className="text-md md:text-xl font-semibold mx-auto text-blue-600 hover:text-blue-700 transition-colors duration-300">Users</h3>
                        <FontAwesomeIcon icon={faTimes} className="cursor-pointer" onClick={() => setActiveMenu('')} />
                    </div>
                    {/* Submenu Items */}
                            <div className={`mt-2 flex flex-col gap-2 pl-2 ${activeMenu === 'users' ? 'block' : 'hidden'}`}>
                            <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
                                <FontAwesomeIcon icon={faUserPlus} className="mr-3" /> <span>Create User</span>
                            </a>
                            <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
                                <FontAwesomeIcon icon={faUserEdit} className="mr-3" /> <span>Update User</span>
                            </a>
                            <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
                                <FontAwesomeIcon icon={faUserSlash} className="mr-3" /> <span>Disable User</span>
                            </a>
                            <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
                                <FontAwesomeIcon icon={faUsers} className="mr-3" /> <span>View Users</span>
                            </a>
                            <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
                                <FontAwesomeIcon icon={faUserCheck} className="mr-3" /> <span>Enable User</span>
                            </a>
                            <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
            <FontAwesomeIcon icon={faUserTimes} className="mr-3" /> <span>Delete User</span>
            </a>
            </div>
            </div>
            )}
            </div>


                {/* Main Menu Item: Service Requests */}
        <div className="flex items-center mb-4 justify-between">
        <a href="#" className="flex items-center" onClick={() => handleMenuClick('serviceRequests')}>
            <FontAwesomeIcon icon={faMapPin} className="mr-3 h-5 text-yellow-700"  title="Service" /> <span className={`${isOpen ? 'block' : 'hidden'}`}>Service Requests</span>
        </a>
        {activeMenu === 'serviceRequests' && (
            <div className="absolute bg-white rounded-lg shadow-lg p-3 mt-1 z-10">
            <div className="flex justify-between items-center">
                <h3 className="text-md md:text-xl font-semibold mx-auto text-blue-600 hover:text-blue-700 transition-colors duration-300">Service</h3>
                <FontAwesomeIcon icon={faTimes} className="cursor-pointer" onClick={() => setActiveMenu('')} />
            </div>
            {/* Service Request Submenu */}
            <div className="flex flex-col gap-2 pl-2">
                <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
                <FontAwesomeIcon icon={faSearch} className="mr-3" /> <span>View Requests</span>
                </a>
                <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
                <FontAwesomeIcon icon={faPlusCircle} className="mr-3" /> <span>Create Request</span>
                </a>
                <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
                <FontAwesomeIcon icon={faEdit} className="mr-3" /> <span>Update Request</span>
                </a>
                <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
                <FontAwesomeIcon icon={faTimesCircle} className="mr-3" /> <span>Close Request</span>
                </a>
                {/* Add other options here as needed */}
            </div>
            </div>
        )}
        </div>


      {/* Main Menu Item: Documents */}
<div className="flex items-center mb-4 justify-between">
  <a href="#" className="flex items-center " onClick={() => handleMenuClick('documents')}>
    <FontAwesomeIcon icon={faAddressCard} className="mr-3 text-blue-700"  title="Document" /> <span className={`${isOpen ? 'block' : 'hidden'}`}>Documents</span>
  </a>
  {activeMenu === 'documents' && (
    <div className="absolute bg-white rounded-lg shadow-lg p-3 mt-1 z-10">
      <div className="flex justify-between items-center">
        <h3 className="text-md md:text-xl font-semibold mx-auto text-blue-600 hover:text-blue-700 transition-colors duration-300">Documents</h3>
        <FontAwesomeIcon icon={faTimes} className="cursor-pointer" onClick={() => setActiveMenu('')} />
      </div>
      {/* Documents Submenu */}
      <div className="flex flex-col gap-2 pl-2">
        <Link to="/document_list" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
          <FontAwesomeIcon icon={faFolderOpen} className="mr-3" /> <span>View Documents</span>
        </Link>
        <a href="/document" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
          <FontAwesomeIcon icon={faPlus} className="mr-3" /> <span>Create Document</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
          <FontAwesomeIcon icon={faFileUpload} className="mr-3" /> <span>Upload Document</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
          <FontAwesomeIcon icon={faEdit} className="mr-3" /> <span>Edit Document</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
          <FontAwesomeIcon icon={faTrashAlt} className="mr-3" /> <span>Delete Document</span>
        </a>
        {/* Add other options here as needed */}
      </div>
    </div>
  )}
</div>


{/* Main Menu Item: Permissions */}
<div className="flex items-center justify-between">
  <a href="#" className="flex items-center" onClick={() => handleMenuClick('permissions')}>
    <FontAwesomeIcon icon={faUserLock} className="mr-3 h-5 text-red-900"  title="Permission" /> <span className={`${isOpen ? 'block' : 'hidden'}`}>Permissions</span>
  </a>
  {activeMenu === 'permissions' && (
    <div className="absolute bg-white rounded-lg shadow-lg p-3 mt-1 z-10">
      <div className="flex justify-between items-center">
      <h3 className="text-md md:text-xl font-semibold mx-auto text-blue-600 hover:text-blue-700 transition-colors duration-300">Permissions</h3>

        <FontAwesomeIcon icon={faTimes} className="cursor-pointer" onClick={() => setActiveMenu('')} />
      </div>
      {/* Permissions Submenu */}
      <div className="flex flex-col gap-2 pl-2">
        <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
          <FontAwesomeIcon icon={faUsersCog} className="mr-3" /> <span>Manage Roles</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
          <FontAwesomeIcon icon={faUserShield} className="mr-3" /> <span>Assign Permissions</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
          <FontAwesomeIcon icon={faHandshake} className="mr-3" /> <span>Role Requests</span>
        </a>
        <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-gray-100">
          <FontAwesomeIcon icon={faHistory} className="mr-3" /> <span>Audit Logs</span>
        </a>
        {/* Add other options here as needed */}
      </div>
    </div>
  )}
</div>


        {/* ...repeat for other main menu items with their respective submenus */}
      </div>
    </div>
    </nav>
  );
};

export default Sidebar;
