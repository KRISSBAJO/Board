import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faTrash, faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { toast as notify } from 'react-toastify';
import { listDocumentTypes, deleteDocumentType } from "../../../api/main_api";
import ConfirmationDialog from '../../Hooks/ConfirmationDialog'; // Make sure this path is correct
import Tooltip from '../../Hooks/Tooltip'; // Make sure this path is correct

const ListDocumentTypesComponent = () => {
  const [documentTypes, setDocumentTypes] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentDocumentTypeId, setCurrentDocumentTypeId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await listDocumentTypes();

      if (result.success) {
        setDocumentTypes(result.data);
      } else {
        notify.error(result.message);
      }
    }

    fetchData();
  }, []);

  const handleDeleteDocumentType = async (id) => {
    // Update the state to show the confirmation dialog
    setCurrentDocumentTypeId(id);
    setIsDialogOpen(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await deleteDocumentType(currentDocumentTypeId);

      if (response.success) {
        notify.success("Document type deleted successfully!");

        // To remove the deleted item from the state
        const newDocumentTypes = documentTypes.filter(docType => docType.id !== currentDocumentTypeId);
        setDocumentTypes(newDocumentTypes);

      } else {
        notify.error(response.message);
      }
    } catch (error) {
      notify.error("An error occurred while deleting the document type.");
    }
    // Hide the dialog after action
    setIsDialogOpen(false);
  };

  // Callback for cancel action
  const cancelDelete = () => {
    setIsDialogOpen(false);
  };

  const handleEditDocumentType = (id) => {
    // Redirect to the edit document type page
    window.location.href = `/edit-document-type/${id}`;
  };

  return (
    <div className="flex flex-col">
      <ConfirmationDialog 
        isOpen={isDialogOpen}
        onCancel={cancelDelete} // Assuming ConfirmationDialog expects a prop named onCancel
        onConfirm={confirmDelete}
        title="Delete Document Type"
        message={`document type with ID ${currentDocumentTypeId}?`}
        />

      <table className="min-w-full table-fixed text-sm sm:text-lg shadow-md bg-white rounded-lg">
      <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-3 text-left font-medium">
              Name
            </th>
            <th className="px-6 py-3 text-left font-medium">
              Description
            </th>
            <th className="px-6 py-3 text-right font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {documentTypes.map((documentType) => (
            <tr key={documentType.id}>
              <td className="px-4 py-2">{documentType.name}</td>
              <td className="px-4 py-2">{documentType.description}</td>
              <td className="px-6 py-4 flex justify-end items-center space-x-2">
                <Tooltip content="Delete Document Type">
                  <button
                    onClick={() => handleDeleteDocumentType(documentType.id)}
                    className=" hover:bg-red-700 text-red-500 p-2 rounded"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </Tooltip>
                <Tooltip content="Edit Document Type">
                  <button
                    onClick={() => handleEditDocumentType(documentType.id)}
                    className="text-blue-500 hover:bg-blue-100 p-2 rounded"
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </Tooltip>
                <Tooltip content="Add New Document Type">
                    <Link
                        to="/document_type-form"
                        className=" hover:bg-slate-200 text-green-700 p-2 rounded"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </Link>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDocumentTypesComponent;
