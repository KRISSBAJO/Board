import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getRoleById, updateRole, getAllPermissions, getRoles } from '../../../api/main_api';
import { toast } from 'react-toastify';
import { Listbox } from '@headlessui/react';

const EditRoleComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();


  // Validation Schema
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
    permissions: yup.array()
      .min(1, "At least one permission is required")
      .of(
        yup.object().shape({
          label: yup.string().required(),
          value: yup.string().required(),
        })
      ),
  });

  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });


  const [permissions, setPermissions] = useState([]);
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedParent, setSelectedParent] = useState(null);

  useEffect(() => {
    const fetchPermissionsAndRole = async () => {
      try {
        const permissionsResponse = await getAllPermissions();
        const roleResponse = await getRoleById(id);
        
        if (permissionsResponse && permissionsResponse.data) {
          const options = permissionsResponse.data.map(permission => ({
            value: permission.id,
            label: permission.name,
          }));
          setPermissions(options);
        }
  
        if (roleResponse && roleResponse.data) {
          const roleData = roleResponse.data;
        
          // Set form values using the `setValue` method from `react-hook-form`
          setValue('name', roleData.name);
          setValue('description', roleData.description);
        
            const selectedPermissionsData = roleData.permissions.map(permission => ({
              value: permission.id,
              label: permission.name,
            }));
            setSelectedPermissions(selectedPermissionsData);

  
          // Handle parent role selection
          if (roleData.parent) {
            const parentSelection = {
              value: roleData.parent.id,
              label: roleData.parent.name,
            };
            setSelectedParent(parentSelection);
            // If you need to set this in the form as well for submission, you would use setValue:
            setValue('parent', parentSelection);
          }
        }
  
        // Get roles for the parent selection dropdown
        const rolesResponse = await getRoles();
        if (rolesResponse && rolesResponse.data) {
          const rolesOptions = rolesResponse.data.map(role => ({
            value: role.id,
            label: role.name,
          }));
          setRoles(rolesOptions);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        toast.error("Failed to load role details and permissions.");
      }
    };
  
    fetchPermissionsAndRole();
  }, [id, setValue, toast]);
  

  const onSubmit = async (data) => {
    const selectedPermissionIds = selectedPermissions.map(p => p.value);
    const formData = {
      name: data.name,
      description: data.description,
      permissions: selectedPermissionIds,
      parent: selectedParent ? selectedParent.value : null,
    };

    try {
      const response = await updateRole(id, formData);
      if (response && response.data) {
        toast.success("Role updated successfully");
        navigate('/list_roles');
      } else {
        toast.error("Something went wrong with the API");
      }
    } catch (error) {
      console.error("Error updating role: ", error);
      toast.error("Error updating role");
    }
  };

  const togglePermission = (permission) => {
    setSelectedPermissions((currentSelectedPermissions) =>
      currentSelectedPermissions.some(p => p.value === permission.value)
        ? currentSelectedPermissions.filter(p => p.value !== permission.value)
        : [...currentSelectedPermissions, permission]
    );
  };
  

  return (
    <div className="flex flex-col mb-20">
      <h1 className="text-2xl font-bold border-b-4 border-blue-500 mb-7">Edit Role</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <input
          type="text"
          {...register("name")}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Name"
        />
        <textarea
          {...register("description")}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Description"
          rows="4"
        />
        <div className="grid grid-cols-3 gap-4">
          {permissions.map((permission) => (
            <div key={permission.value} className="flex items-center">
             <input
                  type="checkbox"
                  id={`checkbox-${permission.value}`}
                  checked={selectedPermissions.some(p => p.value === permission.value)}
                  onChange={() => togglePermission(permission)}
                  className="mr-2"
                />

              <label htmlFor={`checkbox-${permission.value}`} className="ml-2">{permission.label}</label>
            </div>
          ))}
        </div>
        {errors.permissions && <p className="text-red-500 mt-2">{errors.permissions.message}</p>}
        
        <Controller
        name="parent"
        control={control}
        render={({ field }) => (
              <Listbox value={selectedParent} onChange={setSelectedParent}>
                <Listbox.Button className="w-full h-10 p-2 border border-gray-300 rounded-md shadow-sm text-base">
            {selectedParent ? selectedParent.label : "Select parent role"}
          </Listbox.Button>
          <Listbox.Options className="w-full p-2 border border-gray-300 rounded-md shadow-sm">
            {roles.map((role) => (
              <Listbox.Option key={role.value} value={role} as={React.Fragment}>
                {({ active, selected }) => (
                  <li
                    className={`${
                      active ? 'bg-indigo-100' : 'text-gray-900'
                    } cursor-pointer select-none relative py-2 pl-10 pr-4 ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}
                  >
                    {role.label}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
  )}
/>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          Update Role
        </button>
      </form>
    </div>
  );
                  };
  
  export default EditRoleComponent;
  