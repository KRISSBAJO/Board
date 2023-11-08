import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getDocumentTypeById, updateDocumentType } from '../../../api/main_api';
import { toast } from 'react-toastify';

const EditDocumentTypeComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Validation Schema
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required")
  });

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDocumentTypeById(id);
        
        if (response && response.data) {
          const documentTypeData = response.data;
          setValue('name', documentTypeData.name);
          setValue('description', documentTypeData.description);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        toast.error("Failed to load document type details.");
      }
    };
  
    fetchData();
  }, [id, setValue, toast]);

  const onSubmit = async (data) => {
    try {
      const response = await updateDocumentType(id, data);
      if (response && response.data) {
        toast.success("Document Type updated successfully");
        navigate('/list_document-types');
      } else {
        toast.error("Something went wrong with the API");
      }
    } catch (error) {
      console.error("Error updating document type: ", error);
      toast.error("Error updating document type");
    }
  };

  return (
    <div className="flex flex-col mb-20">
      <h1 className="text-2xl font-bold border-b-4 border-blue-500 mb-7">Edit Document Type</h1>
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
        {errors.name && <p className="text-red-500 mt-2">{errors.name.message}</p>}
        {errors.description && <p className="text-red-500 mt-2">{errors.description.message}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          Update Document Type
        </button>
      </form>
    </div>
  );
};

export default EditDocumentTypeComponent;
