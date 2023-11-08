import React from 'react';
import { useEmployee } from '../../context/EmployeeContext';

const ProfilePictureModal = ({ isOpen, onClose, onFileSelect, onSave, profilePicture }) => {
  const { employee } = useEmployee(); // using useEmployee context

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 max-h-128 overflow-auto bg-smoke-light flex mt-20 ml-4">
      <div className="modal relative p-8 bg-white opacity-90 w-1/2 max-w-md m-auto rounded-lg shadow-lg cursor-grab">
      <button className="close-button absolute top-0 right-0 p-2" onClick={onClose}>
          &times;
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Manage Profile Picture</h2>
          <div className="text-gray-700 font-bold text-md mt-4 mb-8">
            <p>{employee.first_name} {employee.last_name}</p>
            <p>{employee.email}</p>
          </div>
        </div>
        <div className="my-3 text-center text-black">
          <img
            src={profilePicture}
            alt="Profile"
            className="mx-auto rounded-full h-24 w-24 object-cover"
          />
        </div>
        <div className="text-center">
          <input
            type="file"
            className="text-black file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-violet-50 file:text-violet-700
                      hover:file:bg-violet-100"
            onChange={onFileSelect}
          />
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-1/2 hover:bg-blue-700"
            onClick={onSave}
          >
            Save
          </button>
          <button
             className="px-4 py-2 bg-gray-300 text-gray-700 text-base font-medium rounded-md w-1/2 hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePictureModal;
