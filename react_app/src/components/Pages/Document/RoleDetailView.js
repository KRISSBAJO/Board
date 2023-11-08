import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRoleById } from '../../../api/main_api';
import IsLoadingComponent from '../../Hooks/IsLoading';
import { format } from 'date-fns'; 
import { ReactComponent as RoleIcon } from '../../../assets/images/role.svg';

const RoleDetailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const formatBoolean = (value) => (value ? 'Yes' : 'No');

  const formatDate = (dateString) => format(new Date(dateString), 'PPPpp');

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response = await getRoleById(id);
        console.log(response);
        if (response.success) {
          setRole(response.data);
        } else {
          // handle the error, could redirect or show a message
        }
      } catch (error) {
        // handle the error
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchRole();
  }, [id]);

  if (isLoading) {
    return <IsLoadingComponent text="Loading role details..." />;
  }

  if (!role) {
    return <div>No role data available.</div>;
  }
  return (
    <div className="container mx-auto p-5 bg-white shadow-xl rounded-lg">
      <div className="border-b pb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <RoleIcon className="h-16 w-16 text-blue-500" />
            <h1 className="text-3xl font-bold text-blue-800">Role Details</h1>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Back to List
          </button>
        </div>
      </div>
  
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* You could even split these into two columns on larger screens */}
        <DetailField label="Name" value={role.name} />
        <DetailField label="Description" value={role.description} />
        <DetailField label="Hierarchy" value={role.parent ? role.parent_name : 'N/A'} />
        <DetailField label="Active" value={formatBoolean(role.is_active)} />
        <DetailField label="Default" value={formatBoolean(role.is_default)} />
        <DetailField label="Created At" value={formatDate(role.created_at)} />
        <DetailField label="Updated At" value={formatDate(role.updated_at)} />
      </div>
  
      <div className="my-6">
        <label className="block text-lg font-bold text-gray-700 mb-2">Permissions:</label>
        <div className="bg-gray-100 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            {role.permissions.map((permission) => (
              <li key={permission.id} className="text-gray-800 text-xl">
                {permission.name} - {permission.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
  
    </div>
  );
}
  
  const DetailField = ({ label, value }) => (
    <div className="bg-gray-100 p-4 rounded-lg">
      <label className="block text-lg font-bold text-gray-700 mb-1">{label}:</label>
      <p className="text-gray-800 text-xl">{value}</p>
    </div>
  );
  export default RoleDetailView;
  