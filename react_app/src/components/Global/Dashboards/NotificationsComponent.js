import React from 'react';

const NotificationsComponent = () => {
    return (
        <div className="bg-white p-4 rounded-md shadow-md mt-4 ">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-md font-bold">We're keeping you in the loop</h2>
            </div>

            <p className="text-gray-600 mb-4 text-sm">
                Stay in-the-know by following people and spaces. They will show up in your feed, but you won't receive email notifications about it. Add to, edit, or delete anytime.
            </p>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Edit feed
            </button>
        </div>
    );
}

export default NotificationsComponent;
