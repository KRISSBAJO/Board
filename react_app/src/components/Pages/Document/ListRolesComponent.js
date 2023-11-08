import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { getRoles, deleteRole } from '../../../api/main_api';
import ConfirmationDialog from '../../Hooks/ConfirmationDialog'; // Make sure this path is correct
import Tooltip from '../../Hooks/Tooltip'; // Make sure this path is correct

const ListRolesComponent = () => {
  const [roles, setRoles] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentRoleId, setCurrentRoleId] = useState(null);
  const [toast, setToast] = useState({
    type: "",
    message: "",
  });

  useEffect(() => {
    async function fetchRoles() {
      const response = await getRoles();
      if (response.success) {
        setRoles(response.data);
      } else {
        setToast({
          type: "error",
          message: response.message || "Something went wrong.",
        });
      }
    }

    fetchRoles();
  }, []);

  const showDeleteConfirmation = (id) => {
    setCurrentRoleId(id);
    setIsDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (currentRoleId == null) return;
    
    const response = await deleteRole(currentRoleId);
    
    if (response.success) {
      setToast({
        type: "success",
        message: "Role deleted successfully!",
      });
      
      const updatedRoles = roles.filter(role => role.id !== currentRoleId);
      setRoles(updatedRoles);
    } else {
      setToast({
        type: "error",
        message: response.message || "Something went wrong.",
      });
    }

    setIsDialogOpen(false);
  };

  const handleEditRole = (id) => {
    window.location.href = `/edit-role/${id}`;
  };

  return (
    <div className="flex flex-col items-center mb-20">
      <h2 className="text-2xl font-bold mb-4">Roles Overview</h2>
      <hr className="w-full mb-4" />
  
      <table className="min-w-full table-fixed text-sm sm:text-lg shadow-md bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-3 text-left font-medium">
              Name
            </th>
            <th className="px-6 py-3 text-left font-medium">
              Description
            </th>
            <th className="px-6 py-3 text-right font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="hover:bg-gray-100 border-t">
              <td className="px-6 py-4">
                <Link to={`/roles/${role.id}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                  {role.name}
                </Link>
              </td>
              <td className="px-6 py-4">{role.description}</td>
              <td className="px-6 py-4 flex justify-end items-center space-x-2">
                <Tooltip content="Delete Role">
                  <button
                    onClick={() => showDeleteConfirmation(role.id)}
                    type="button"
                    className="text-red-500 hover:bg-red-100 p-2 rounded"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </Tooltip>
                <Tooltip content="Edit Role">
                  <button
                    onClick={() => handleEditRole(role.id)}
                    type="button"
                    className="text-blue-500 hover:bg-blue-100 p-2 rounded"
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </Tooltip>
                <Tooltip content="Add New Role">
                  <Link
                    to="/roles_form"
                    className="text-green-500 hover:bg-green-100 p-2 rounded"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </Link>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmationDialog
        isOpen={isDialogOpen}
        title="Confirm Deletion"
        message="role"
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default ListRolesComponent;
