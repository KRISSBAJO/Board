import React from 'react';
import { useEmployee } from '../../../context/EmployeeContext';
import { Link } from 'react-router-dom';

const QuickLinksComponent = () => {
    const { employee } = useEmployee();

    const isAdminOrSuperuser = employee?.role === 'Admin' || employee?.role === 'Superuser';
    
    if (!employee || !employee.role) {
        return null; // or a fallback UI
    }
    
    return (
        <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-4 text-sm">
                <li className="flex items-center space-x-2">
                    <span>📄</span>
                    <Link to="/list_permissions" className="text-blue-600 hover:underline focus:outline-none">
                        Create New Document/Task
                    </Link>
                </li>
                <li className="flex items-center space-x-2">
                    <span>🔍</span>
                    <button className="text-blue-600 hover:underline focus:outline-none">
                        Quick Search
                    </button>
                </li>
                <li className="flex items-center space-x-2">
                    <span>⭐</span>
                    <button className="text-blue-600 hover:underline focus:outline-none">
                        Bookmark/Starred Items
                    </button>
                </li>
                <li className="flex items-center space-x-2">
                    <span>📂</span>
                    <button className="text-blue-600 hover:underline focus:outline-none">
                        Manage Folders & Categories
                    </button>
                </li>
                <li className="flex items-center space-x-2">
                    <span>🔐</span>
                    <button className="text-blue-600 hover:underline focus:outline-none">
                        Access Controls & Permissions
                    </button>
                </li>
                <li className="flex items-center space-x-2">
                    <span>🔄</span>
                    <button className="text-blue-600 hover:underline focus:outline-none">
                        Version History
                    </button>
                </li>
                <li className="flex items-center space-x-2">
                    <span>📤</span>
                    <button className="text-blue-600 hover:underline focus:outline-none">
                        Export/Backup Documents
                    </button>
                </li>
                {isAdminOrSuperuser && (
                        <li className="relative group">
                            <button className="text-blue-600 hover:underline focus:outline-none">
                            📤 Configuration
                            </button>
                            <div className="absolute left-0 z-10 w-48 bg-white border mt-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                            <ul className="py-1 text-sm text-gray-700">
                                <li>
                                    <Link to="/permissions" className="block px-4 py-2 hover:bg-gray-100">
                                        Create Permissions
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/list_permissions" className="block px-4 py-2 hover:bg-gray-100">
                                        List Permissions
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/list_roles" className="block px-4 py-2 hover:bg-gray-100">
                                        List Roles
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/roles_form" className="block px-4 py-2 hover:bg-gray-100">
                                        Add Roles
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/list_document-types" className="block px-4 py-2 hover:bg-gray-100">
                                        List Documents
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/document_type-form" className="block px-4 py-2 hover:bg-gray-100">
                                        Add Document
                                    </Link>
                                </li>
                                {/* ... more dropdown items ... */}
                            </ul>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default QuickLinksComponent;