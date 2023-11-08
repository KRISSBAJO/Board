import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createRoles, getAllPermissions, getRoles } from "../../../api/main_api";
import { useNavigate } from 'react-router-dom';
import { Listbox } from '@headlessui/react';

const RolesForm = () => {
  const navigate = useNavigate();
  const [permissions, setPermissions] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedParent, setSelectedParent] = useState(null);


  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [displayedPermissions, setDisplayedPermissions] = useState(permissions.slice(0, 2)); // Initial load of 20 permissions
  // Fetch permissions when component mounts
  useEffect(() => {
    // Fetch permissions
    const fetchPermissions = async () => {
      const response = await getAllPermissions();
      if (response && response.data) {
        const options = response.data.map(permission => ({
          value: permission.id,
          label: permission.name
        }));
        setPermissions(options);
        setDisplayedPermissions(options.slice(0, 20)); // Set the initial displayed permissions
      }
    };
    fetchPermissions();

    // Fetch roles
    const fetchRoles = async () => {
      try {
        const response = await getRoles();
        if (response && response.data) {
          setRoles(response.data.map(role => ({
            value: role.id,
            label: role.name
          })));
        }
      } catch (error) {
        console.error("Error fetching roles: ", error);
        // Handle error - perhaps show a notification or set an error state
      }
    };
    fetchRoles();
  }, []);

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
      )
  });
  

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async (data) => {
    // Ensure data.permissions is an array before mapping over it
    const selectedPermissions = Array.isArray(data.permissions) ? data.permissions.map(p => p.value) : [];
  
    const formData = {
      name: data.name,
      description: data.description,
      permissions: selectedPermissions.map(p => p.value),
      parent: selectedParent ? selectedParent.value : null,
    };
  
    try {
      // Submit the data to the API
      const response = await createRoles(formData);
  
      if (response && response.success) {
        navigate('/list_roles');
        toast.success("Role created successfully");
      } else {
        toast.error("Something went wrong with the API");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      toast.error("Error submitting form");
    }
  };  
  // This function toggles a permission in the selectedPermissions array
  const togglePermission = (permission) => {
    setSelectedPermissions(selectedPermissions.includes(permission)
      ? selectedPermissions.filter(p => p !== permission)
      : [...selectedPermissions, permission]);
  };
  return (
    <div className="flex flex-col mb-20">
      <h1 className="text-2xl font-bold border-b-4 border-blue-500 mb-7">Create Role</h1>
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
                checked={selectedPermissions.includes(permission)}
                onChange={() => togglePermission(permission)}
                className="mr-2"
              />
              <label htmlFor={`checkbox-${permission.value}`} className="ml-2">{permission.label}</label>
            </div>
          ))}
        </div>
        {/* Displaying permissions field errors */}
        {errors.permissions && <p className="text-red-500 mt-2">{errors.permissions.message}</p>}
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
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          Create Role
        </button>
      </form>
    </div>
  );
                  };
  export default RolesForm;
  
