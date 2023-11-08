import React, { useState } from 'react';
import Select from 'react-select';
import { ReactComponent as Submit } from '../../../assets/images/submit.svg'; 
import { useEmployee } from '../../../context/EmployeeContext';


const users = [
    { id: 1, name: 'krissbajo@gmail.com' },
    { id: 2, name: 'patbajo@yahoo.com' },
    { id: 3, name: 'jason@hotmail.com' },
    // ... add as many users as you need
];

const documents = [
    { id: 1, title: 'Installation of Python' },
    { id: 2, title: 'Test Automation Demo' },
    { id: 3, title: 'Setting Up Selenium' },
    // ... add as many documents as you need
];

function TaggingComponent() {
    const { employee } = useEmployee(); 
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [tags, setTags] = useState([]);
    const [notification, setNotification] = useState(null);

    const handleTagUser = () => {
        if (selectedUser && selectedDocument) {
            const user = users.find((u) => u.id === Number(selectedUser));
            const document = documents.find((d) => d.id === Number(selectedDocument));
            if (user && document) {
                setTags((prevTags) => [...prevTags, `${user.name} on ${document.title}`]);
                setNotification(`Notification: ${user.name} has been tagged on ${document.title}!`);
                setTimeout(() => setNotification(null), 3000);
            }
        }
    };
    const userOptions = users.map(user => ({ value: user.id, label: user.name }));
    const documentOptions = documents.map(doc => ({ value: doc.id, label: doc.title }));
    return (
        <div className="bg-gray-100 p-4 grid grid-cols-1">
            <div className="w-full max-w-5xl mx-auto bg-white shadow-md rounded-lg p-4">
            <div className="grid grid-cols-5 gap-4 mb-4 items-center">
    {/* Dropdown to select user */}
    <Select
        className="mb-4 col-span-2 text-xs"
        placeholder="Select a user"
        options={userOptions}
        value={userOptions.find(option => option.value === selectedUser)}
        onChange={(option) => setSelectedUser(option ? option.value : null)}
    />

    {/* Dropdown to select document */}
    <Select
        className="mb-4 col-span-2 text-xs"
        placeholder="Select a document"
        options={documentOptions}
        value={documentOptions.find(option => option.value === selectedDocument)}
        onChange={(option) => setSelectedDocument(option ? option.value : null)}
    />
    
    {/* Button to tag user */}
    <Submit 
        className="text-blue-600 bg-slate-300 hover:text-blue-700 focus:text-blue-700 rounded-md px-1 py-1 transition duration-300 ease-in-out transform hover:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60" 
        aria-label="Edit" 
        role="button" 
        tabIndex="0"
        title="Tag"
        onClick={handleTagUser}
    />
</div> {/* End of the div for two dropdowns side by side */}
            {/* Notification */}
            {notification && (
                <div className="bg-yellow-200 p-4 rounded mb-4 border">
                    {notification}
                </div>
            )}
    
            {/* List of tagged users on documents */}
            <div className="mt-4">
                <h2 className="text-sm font-semibold mb-2">Tagged Users on Documents:</h2>
                <ul>
                    {tags.map((tag, index) => (
                        <li key={index} className="border-b p-2 text-xs">
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    );
                    }    

export default TaggingComponent;
