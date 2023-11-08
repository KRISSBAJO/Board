import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { createPermission, getPermissionsOptions } from '../../../api/main_api'
import { useNavigate } from 'react-router-dom';


// Define your validation schema using Yup
const validationSchema = yup.object({
  code: yup.string().required('Code is required'),
  name: yup.string().required('Name is required'),
  description: yup.string(),
  relatedPermissions: yup.array().of(yup.object().shape({
    value: yup.string().required(),
    label: yup.string().required(),
  })),
});

const PermissionForm = () => {
    const [permissionsOptions, setPermissionsOptions] = useState([]);
    console.log(permissionsOptions);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPermissionsOptions = async () => {
            try {
                const response = await getPermissionsOptions();
                if (response.success) {
                    setPermissionsOptions(response.data);
                } else {
                    toast.error(response.message || 'Failed to fetch permissions options');
                }
            } catch (error) {
                toast.error('An unexpected error occurred');
                console.error(error);
            }
        };

        fetchPermissionsOptions();
    }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await createPermission(data);
      if (response.success) {
        navigate('/list_permissions');
        toast.success('Permission created successfully!');
        // Additional logic after successful creation
      } else {
        toast.error(response.message || 'An error occurred');
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="code" className="block text-sm font-medium text-gray-700">Code</label>
        <input
          id="code"
          {...register('code')}
          type="text"
          placeholder="Unique code for the permission"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.code && <p className="mt-2 text-sm text-red-600">{errors.code.message}</p>}
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          {...register('name')}
          type="text"
          placeholder="Name of the permission"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          {...register('description')}
          placeholder="Description of the permission"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="relatedPermissions" className="block text-sm font-medium text-gray-700">Related Permissions</label>
        <Controller
          name="relatedPermissions"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={permissionsOptions}
              isMulti
              className="mt-1 block w-full"
              classNamePrefix="select"
            />
          )}
        />
        {errors.relatedPermissions && <p className="mt-2 text-sm text-red-600">{errors.relatedPermissions.message}</p>}
      </div>

      <button
        type="submit"
        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create Permission
      </button>
    </form>
  );
};

export default PermissionForm;
