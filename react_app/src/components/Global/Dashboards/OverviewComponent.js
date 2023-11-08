import React, { useState } from 'react';

const OverviewComponent = () => {
    const [selected, setSelected] = useState('overview');

    const items = [
        { id: 'overview', label: 'Overview', icon: '🔍' }, // Placeholder icon
        { id: 'recent', label: 'Recent', icon: '📅' },    // Placeholder icon
        { id: 'starred', label: 'Starred', icon: '⭐' },  // Placeholder icon
        { id: 'drafts', label: 'Drafts', icon: '📝' },
        { id: 'tagged', label: 'Tagged', icon: '🏷️' },
        { id: 'trash', label: 'Trash', icon: '🗑️' },

    ];

    return (
        <div className="flex border-b border-gray-300 mb-6">
            {items.map(item => (
                <div
                    key={item.id}
                    className={`flex items-center space-x-2 p-4 cursor-pointer 
                        ${selected === item.id ? 'border-b-2 border-blue-500' : ''}`}
                    onMouseEnter={() => setSelected(item.id)}
                    onClick={() => setSelected(item.id)}
                >
                    <span>{item.icon}</span>  {/* Replace with your actual icon */}
                    <span>{item.label}</span>
                </div>
            ))}
        </div>
    );
}

export default OverviewComponent;
