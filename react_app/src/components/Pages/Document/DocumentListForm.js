import React, { useState, useEffect } from 'react';
import IsLoadingComponent from '../../Hooks/IsLoading';
import { listDocuments } from '../../../api/main_api';
import { Link } from 'react-router-dom';

const DocumentListForm = () => {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State for loading status

  useEffect(() => {
    const fetchDocuments = async () => {
      setIsLoading(true); // Start loading
      try {
        const response = await listDocuments();
        console.log(response.data);
        setDocuments(response.data);
      } catch (error) {
        console.error('Failed to fetch documents:', error);
      }
      setIsLoading(false); // Stop loading once the data is fetched
    };

    fetchDocuments();
  }, []);

  const truncateContent = (content) => {
    const words = content.split(' ');
    return words.length > 3 ? `${words.slice(0, 3).join(' ')}...` : content;
  };

  if (isLoading) {
    return <IsLoadingComponent />; // Show loading component while data is being fetched
  }

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Document List</h2>
        <Link to="/documents/new" className="text-blue-600 hover:underline">
          Create Document
        </Link>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Type
            </th>
            <th scope="col" className="py-3 px-6">
              Title
            </th>
            <th scope="col" className="py-3 px-6">
              Content
            </th>
            <th scope="col" className="py-3 px-6">
              Tags
            </th>
            <th scope="col" className="py-3 px-6">
              Url
            </th>
            <th scope="col" className="py-3 px-6">
              Created
            </th>
          </tr>
        </thead>
        <tbody>
            {Array.isArray(documents) && documents.map((document) => (
                <tr key={document.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="py-4 px-6">{document.document_type.name}</td>
                <td className="py-4 px-6">{document.title}</td>
                <td className="py-4 px-6">
                    <Link to={`/documents/${document.id}`} className="text-blue-600 hover:underline">
                    {truncateContent(document.content)}
                    </Link>
                </td>
                <td className="py-4 px-6">{document.tags.map(tag => tag.name).join(', ')}</td>
                <td className="py-4 px-6">{document.slug}</td>
                <td className="py-4 px-6">{`${document.created_by.first_name} ${document.created_by.last_name}`}</td>

                </tr>
            ))}
            </tbody>

      </table>
    </div>
  );
};

export default DocumentListForm;
