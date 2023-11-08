import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllPermissions, deletePermission } from '../../../api/main_api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import ConfirmationDialog from '../../Hooks/ConfirmationDialog'; 
import Tooltip from '../../Hooks/Tooltip';
import IsLoadingComponent from '../../Hooks/IsLoading';

const PermissionListView = () => {
    const [permissions, setPermissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentPermissionId, setCurrentPermissionId] = useState(null);
  
    useEffect(() => {
      const fetchPermissions = async () => {
        setLoading(true);
        const response = await getAllPermissions();
        if (response.success) {
          setPermissions(response.data);
        } else {
          toast.error(response.message || 'Failed to fetch permissions.');
        }
        setLoading(false);
      };
  
      fetchPermissions();
    }, []);
  
    const showDeleteConfirmation = (permissionId) => {
      setCurrentPermissionId(permissionId);
      setIsDialogOpen(true);
    };
  
    const handleConfirmDelete = async () => {
      if (currentPermissionId == null) return;
  
      const response = await deletePermission(currentPermissionId);
      if (response.success) {
        setPermissions(permissions.filter((permission) => permission.id !== currentPermissionId));
        toast.success('Permission deleted successfully');
        setCurrentPermissionId(null); // Reset the current permission ID
      } else {
        toast.error(response.message || 'Failed to delete permission.');
      }
      setIsDialogOpen(false);
    };
  
    if (loading) {
      return <IsLoadingComponent />;
    } 
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold leading-tight">Permissions List</h2>
      <table className="min-w-full leading-normal mt-6">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Code
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Description
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{permission.code}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{permission.name}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{permission.description}</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex items-center justify-end">
                <Tooltip content="Edit Permission">
                  <Link to={`/edit-permission/${permission.id}`} className="text-blue-600 hover:text-blue-900 mr-3">
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </Link>
                </Tooltip>
                <Tooltip content="Delete Permission">
                  <button onClick={() => showDeleteConfirmation(permission.id)} className="text-red-600 hover:text-red-900 ml-4">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </Tooltip>
                <Tooltip content="Add New Role">
                  <Link
                    to="/permissions"
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
        message="Are you sure you want to delete this permission?"
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDialogOpen(false)}
      />
    </div>
  );        
};


export default PermissionListView;
