import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ConfirmationDialog from '../../Hooks/ConfirmationDialog';
import profilePic1 from '../../../assets/images/login.png';
import { logoutUser } from '../../../api/users_api';

const Logout = () => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    // Show confirmation dialog
    setIsConfirmationOpen(true);
  };

  const confirmLogout = async () => {
    try {
      const response = await logoutUser();
      
      if (response === null) { // Check if response is null, indicating a 204 No Content response
          localStorage.removeItem('token'); // Clear the token from local storage
            localStorage.removeItem('loggedInUserId'); // Clear the user ID from local storage
          navigate('/'); // Redirect the user to the login page
          toast.info('You have been logged out.'); // Show a toast message
      } else {
          // In this case, you'd expect some JSON response with details
          // Possibly handle the received data or show an error based on the content
          toast.error('There was an error logging you out.'); // Show an error message if logout didn't return a 204
      }
    } catch (error) {
      // Handle any exceptions that occur during the API call
      toast.error('An exception occurred during logout.'); // Show an error message
      console.error('Logout error:', error);
    }
  };
  


  const cancelLogout = () => {
    // Simply close the confirmation dialog
    setIsConfirmationOpen(false);
  };

  return (
    <div className="relative flex justify-center items-center h-screen">
      {/* Background image */}
      <img src={profilePic1} alt="Background" className="absolute h-full w-full object-cover" />
      
      {/* Card */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg z-10">
        <button
          className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none"
          onClick={handleLogoutClick}
        >
          {/* Static text "Logout" */}
          <span className="font-semibold">Logout</span>
        </button>
      </div>

      {/* Confirmation Dialog for Logout */}
      <ConfirmationDialog
        isOpen={isConfirmationOpen}
        title="Confirm Logout"
        message="Are you sure you want to log out?"
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
      />
    </div>
  );
};

export default Logout;
