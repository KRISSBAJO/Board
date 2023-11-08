import React from 'react';
import { ReactComponent as Notes } from '../../../assets/images/notes.svg'; 
const PickUpComponent = () => {
    const projects = [
        { title: "Local Setup", description: "Test-Automation-Xstore", date: "October 27, 2023" },
        { title: "Test Automation Xstore Home", description: "Onboarding - Let's get the ball rolling", date: "October 26, 2023" },
        { title: "Project Structure", description: "Test-Automation-Xstore", date: "October 26, 2023" },
        { title: "Local Setup", description: "Test-Automation-Xstore", date: "October 27, 2023" },
        { title: "Test Automation Xstore Home", description: "Onboarding - Let's get the ball rolling", date: "October 26, 2023" },
        { title: "Project Structure", description: "Test-Automation-Xstore", date: "October 26, 2023" },
        // ... add more projects or tasks as needed
    ];

    return (
        <div className="mt-6 space-y-4">
            <h2 className="text-xl md:text-xl font-bold mb-4">Pick Up Where You Left Off</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-medium text-lg flex items-center space-x-2">
                            <span className="text-blue-500">
                                <Notes 
                                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 rounded-md px-2 py-1 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60"
                                    aria-label="Note" 
                                    role="button" 
                                    tabIndex="0"
                                    title="Note" 
                                />
                            </span>
                            <span className='text-sm'>{project.title}</span>
                        </h3>
                        <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                        <p className="text-sm text-blue-400 mt-4">{project.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default PickUpComponent;