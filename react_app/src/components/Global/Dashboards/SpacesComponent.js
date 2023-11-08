import React from 'react';
import { FaPlus } from 'react-icons/fa';
import CalendarComponent from './CalendarComponent';
import { useEmployee } from '../../../context/EmployeeContext';


const SpacesComponent = () => {
    const { employee } = useEmployee(); 
    const { first_name = '', last_name = '' } = employee || {};

    const spaces = [
        { name: `${first_name} ${last_name}`, icon: "🌟" },
        { name: "Support Systems", icon: "📚" },
        { name: "Test-Automation-Loga", icon: "💡" },
        { name: "DevOps Resource Kernel", icon: "🔧" },
        { name: "LogaXP SOP Docs", icon: "📦" },
        { name: "LogaXP - DocCenter", icon: "📝"},
        { name: "Termes Of Use", icon: "⚖️"},
        { name: "Privacy Policy", icon: "🔒"},
    ]
    
    return (
        <div className="space-y-4 max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl  md:justify-between sm:justify-center">  {/* Adjusted max-width for different screen sizes */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-bold">Spaces</h2>
                <button className="text-blue-500 hover:text-blue-600">
                    <FaPlus size={20} />
                </button>
            </div>
            <div className="flex justify-between items-center">
            <ul>
                {spaces.map((space, index) => (
                    <li key={index} className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
                        <span className="text-2xl md:text-2xl">{space.icon}</span> {/* Adjusted icon size for medium screens */}
                        <span className="font-medium md:text-sm">{space.name}</span> {/* Adjusted text size for medium screens */}
                    </li>
                ))}
            </ul>
            </div>
            {/* Calendar Section */}
            <div className="mt-4">
                <CalendarComponent />
            </div>
        </div>
    );
}
    
    export default SpacesComponent;
    