import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { createDocumentType } from "../../../api/main_api";

const DocumentTypeForm = () => {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async (formData) => {
    try {
      const response = await createDocumentType(formData);

      if (response && response.success) {
        navigate('/list_document-types');
        toast.success("Document type created successfully");
      } else {
        toast.error("Something went wrong with the API");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      toast.error("Error submitting form");
    }
  };
  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name")}
          className="w-full p-2 border border-gray-200 rounded-md"
          placeholder="Name"
        />
        <p>{errors.name?.message}</p>

        <textarea
          {...register("description")}
          className="w-full p-2 border border-gray-200 rounded-md mt-4"
          placeholder="Description"
        />
        <p>{errors.description?.message}</p>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4"
        >
          Create Document Type
        </button>
      </form>
    </div>
  );
};

export default DocumentTypeForm;
