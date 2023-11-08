import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faTags, faUser, faCalendarAlt, faDownload } from '@fortawesome/free-solid-svg-icons';

import { getDocumentById } from '../../../api/main_api';
import IsLoadingComponent from '../../Hooks/IsLoading';


const DocumentDetailView = () => {
  const { documentId } = useParams();
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    getDocumentById(documentId)
      .then(response => {
        console.log(response);
        setDocument(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch document');
        setLoading(false);
      });
  }, [documentId]);

  if (loading) return <IsLoadingComponent />;
  if (error) return <div className="text-red-600">{error}</div>;

  const tagColors = ['text-blue-500', 'text-red-500', 'text-green-500', 'text-yellow-500'];

  return (
    <div className="p-8 shadow-lg rounded-lg bg-white">
     <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-3xl font-bold text-gray-900">{document?.title}</h2>
        <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faFileAlt} className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">Type:</span>
            <span className="ml-2 text-sm font-medium text-blue-500">{document?.document_type.name}</span>
        </div>
        </div>
  
      <div className="mt-6">
        <p className="text-gray-700 whitespace-pre-line">{document?.content}</p>
      </div>
  
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900">Tags</h3>
        <div className="flex flex-wrap items-center mt-2">
            <FontAwesomeIcon icon={faTags} className="w-5 h-5 text-blue-500" />
            {document?.tags.map((tag, index) => (
            <span key={tag.id} className={`ml-2 text-sm font-medium ${tagColors[index % tagColors.length]}`}>
                {tag.name}
            </span>
            ))}
        </div>
        </div>

  
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Status:</span>
          <span className="font-medium text-blue-500">{document?.status}</span>
        </div>
        <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-blue-500" />
        <span className="text-gray-700">Created By:</span>
        <span className="font-medium text-blue-500">
            {`${document?.created_by.first_name} ${document?.created_by.last_name}`}
        </span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faCalendarAlt} className="w-5 h-5 text-blue-500" />
          <span className="text-gray-700">Last Updated:</span>
          <span className="font-medium text-blue-500">{new Date(document?.last_updated).toLocaleString()}</span>
        </div>
  
        {document?.file && (
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faDownload} className="w-5 h-5 text-blue-500" />
            <a href={document?.file} className="font-medium text-blue-500">Download File</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentDetailView;
