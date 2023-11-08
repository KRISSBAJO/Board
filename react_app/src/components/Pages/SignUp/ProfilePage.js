import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { updateProfilePicture } from '../../../api/users_api';
import { useEmployee } from '../../../context/EmployeeContext';
import IsLoadingComponent from '../../Hooks/IsLoading';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ProfilePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { employee, setEmployee } = useEmployee();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const goBack = () => navigate(-1);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      toast.error("Please select a file.");
      return;
    }
  
    setIsLoading(true);
    const response = await updateProfilePicture(employee.id, selectedFile);
    setIsLoading(false);
  
    if (response.success) {
      // Append a timestamp to the profile picture URL to prevent caching issues
      const newProfilePictureUrl = response.data.profile_picture + '?t=' + new Date().getTime();
      
      // Update the employee state with the new profile picture URL
      setEmployee({ ...employee, profile_picture: newProfilePictureUrl });
  
      toast.success("Profile updated successfully.");
    } else {
      toast.error(response.message);
    }
  };
  
  if (isLoading) {
    return <IsLoadingComponent />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
  <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white text-lg font-bold">
      <h1>Profile Page</h1>
    </div>
    <button 
      onClick={goBack} 
      className="bg-gradient-to-r from-red-500 to-blue-600 p-4 text-white text-lg font-bold flex items-center"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <span className="ml-2">Go back</span>
    </button>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-blue-100 p-4 flex flex-col items-center">
            <div className="rounded-full h-24 w-24 md:h-36 md:w-36 lg:h-48 lg:w-48 flex items-center justify-center overflow-hidden mb-4">
              <img src={employee?.profile_picture || '/default-profile.png'} alt={`${employee?.first_name} ${employee?.last_name}`} className="rounded-full" />
            </div>
            <h2 className="text-center text-2xl font-semibold">{employee?.first_name} {employee?.last_name}</h2>
            <p className="text-center text-gray-600">{employee?.role} - {employee?.client_name}</p>
            <p className="text-center text-gray-600">{employee?.email}</p>
            <p className="text-center text-gray-600">{employee?.phone_number}</p>
          </div>
          <div className="md:w-2/3 p-4">
            <form onSubmit={handleProfileUpdate}>
              <div className="mb-4">
                <label htmlFor="profile-picture-input" className="block text-gray-700 text-sm font-bold mb-2">
                  Update Profile Picture
                </label>
                <input 
                  id="profile-picture-input"
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {selectedFile && (
                <button 
                  type="submit" 
                  className={`w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Uploading...' : 'Upload Picture'}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default ProfilePage;