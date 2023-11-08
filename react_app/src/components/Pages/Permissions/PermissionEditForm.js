import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { getPermissionById, updatePermission } from '../../../api/main_api';

// Define your validation schema using Yup
const validationSchema = yup.object({
  code: yup.string().required('Code is required'),
  name: yup.string().required('Name is required'),
  description: yup.string(),
  // Include the related permissions in the validation schema if needed
  relatedPermissions: yup.array().of(yup.object().shape({
    value: yup.string().required(),
    label: yup.string().required(),
  })),
});

const PermissionEditForm = ({ permissionId }) => {
  const [loading, setLoading] = useState(true);
  const [permissionsOptions, setPermissionsOptions] = useState([]);
  
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    const fetchPermissionData = async () => {
      setLoading(true);
      try {
        // Fetch permission to be edited
        const permissionResponse = await getPermissionById(permissionId);
        // Fetch related permissions options
        const permissionsOptionsResponse = await getPermissionsOptions();

        if (permissionResponse.success) {
          reset(permissionResponse.data); // Set the form fields with the data received
        } else {
          toast.error(permissionResponse.message || 'Failed to fetch permission data.');
        }

        if (permissionsOptionsResponse.success) {
          setPermissionsOptions(permissionsOptionsResponse.data);
        } else {
          toast.error(permissionsOptionsResponse.message || 'Failed to fetch permissions options.');
        }

      } catch (error) {
        toast.error('An unexpected error occurred');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPermissionData();
  }, [permissionId, reset]);


  const onSubmit = async (data) => {
    const response = await updatePermission(permissionId, data);
    if (response.success) {
      toast.success('Permission updated successfully!');
      // Additional logic after successful update
    } else {
      toast.error(response.message || 'An error occurred during the update.');
    }
  };

  if (loading) {
    return <div>Loading...</div>; // or some loading spinner with Tailwind CSS
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="code" className="block text-sm font-medium text-gray-700">Code</label>
        <input
          id="code"
          {...register('code')}
          type="text"
          placeholder="Unique code for the permission"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        {errors.code && <p className="text-red-500 text-xs italic">{errors.code.message}</p>}
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          {...register('name')}
          type="text"
          placeholder="Name of the permission"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          {...register('description')}
          placeholder="Description of the permission"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      {/* If you have related permissions to be edited */}
      <div>
        <label htmlFor="relatedPermissions">Related Permissions</label>
        <Controller
          name="relatedPermissions"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              isMulti
              options={permissionsOptions}
              classNamePrefix="select"
            />
          )}
        />
      </div>

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Update Permission
      </button>
    </form>
  );
};

export default PermissionEditForm;