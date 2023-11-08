import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { createDocument, getDocumentTypes, getTags } from '../../../api/main_api';
import { useEmployee } from '../../../context/EmployeeContext';

// Yup validation schema
const DocumentSchema = Yup.object().shape({
    document_type_id: Yup.string().required('Document type is required'), 
    title: Yup.string().required('Title is required'),
    content: Yup.string().required('Content is required'),
    tags: Yup.array().of(Yup.string()),
    file: Yup.mixed().nullable(),
    is_encrypted: Yup.boolean(),
  });

const DocumentForm = () => {
  const navigate = useNavigate();
  const { employee } = useEmployee();
  console.log(employee)
  const [documentTypes, setDocumentTypes] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchDocumentTypesAndTags = async () => {
      try {
        const docTypesResponse = await getDocumentTypes();
        const tagListResponse = await getTags();
        if (docTypesResponse.success) {
          setDocumentTypes(docTypesResponse.data);
        } else {
          console.error('Document types fetch was unsuccessful');
        }
        if (tagListResponse.success) {
          setTags(tagListResponse.data);
        } else {
          console.error('Tags fetch was unsuccessful');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchDocumentTypesAndTags();
  }, []);
  

  const initialValues = {
    document_type_id: '',
    title: '',
    content: '',
    tags: [],
    file: null,
    is_encrypted: false,
  
  };

  const handleSubmit = async (values, actions) => {
    try {
      // Use 'document_type_id' directly if that's what the API expects
      const payload = {
        ...values,
      };
  
      const response = await createDocument(payload);
      if (response.success) {
        navigate('/document_list');
        // Handle success scenario
        actions.resetForm();
      } else {
        // Handle other scenarios
      }
    } catch (error) {
      // Handle errors here
      console.error('Error submitting form:', error);
      actions.setSubmitting(false);
      actions.setErrors({ ...error.response.data });
    }
  };
  
  
  const handleFileChange = (event, setFieldValue) => {
    if (event.currentTarget.files[0]) {
      setFieldValue("file", event.currentTarget.files[0]);
    } else {
      setFieldValue("file", null); // Set to null if no file is selected
    }
  };
  
  return (
    <div className="max-w-8xl p-7 px-5 shadow-lg bg-white">
    <Formik
      initialValues={initialValues}
      validationSchema={DocumentSchema}
      onSubmit={handleSubmit}
    >
       {({ errors, touched, setFieldValue, isSubmitting }) => (
          <Form className="space-y-4">
            {/* Document Type Dropdown */}
            <div className='mt-4'>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold border-b-8 border-slate-500 mb-8 py-1 px-2 rounded-md shadow-lg text-center mx-auto block transform translate-x-2">
                Create Document
              </h3>
              <div>
              <label htmlFor="document_type_id" className="block text-sm font-medium text-gray-700">Document Type</label>
                <Field as="select" name="document_type_id" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
                    <option value="">Select a document type</option>
                    {documentTypes.map((type) => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                </Field>

                {errors.document_type_id && touched.document_type_id && (
                    <div className="text-red-500 text-xs">{errors.document_type_id}</div> // Changed to document_type_id
                )}
            </div>
            </div>
  
            {/* Tags Dropdown */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</label>
              <Field as="select" name="tags" multiple className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
                {Array.isArray(tags) && tags.map(tag => (
                  <option key={tag.id} value={tag.id}>{tag.name}</option>
                ))}
              </Field>
              {errors.tags && touched.tags ? (
                <div className="text-red-500 text-xs">{errors.tags}</div>
              ) : null}
            </div>

             {/* Title Field */}
<div>
  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
  <Field name="title" type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
  {errors.title && touched.title ? (
    <div className="text-red-500 text-xs">{errors.title}</div>
  ) : null}
</div>

{/* Content Field */}
<div>
  <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
  <Field name="content" as="textarea" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
  {errors.content && touched.content ? (
    <div className="text-red-500 text-xs">{errors.content}</div>
  ) : null}
</div>

<div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold ...">
              Create Document
            </h3>
            {/* File Field */}
            <div>
              <label htmlFor="file" className="block text-sm font-medium text-gray-700">File</label>
              <input
                id="file"
                name="file"
                type="file"
                onChange={(event) => handleFileChange(event, setFieldValue)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />

              {errors.file && touched.file ? (
                <div className="text-red-500 text-xs">{errors.file}</div>
              ) : null}
            </div>
            </div>
{/* Encryption Checkbox */}
<div>
  <label htmlFor="is_encrypted" className="flex items-center">
    <Field name="is_encrypted" type="checkbox" />
    <span className="ml-2 text-sm font-medium text-gray-700">Is Encrypted?</span>
  </label>
</div>

{/* Submit Button */}
<div>
<button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-slate-500 text-white p-2 rounded-md hover:bg-slate-600"
          >
            {isSubmitting ? 'Processing...' : 'Create Document'}
          </button>
</div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DocumentForm;
