import React from 'react';

const DashboardComponent = () => {
    return (
        <div className="bg-gray-100 h-screen w-full p-6">
            <div className="bg-white p-6 rounded shadow-md">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">LogaXP - DocCenter</div>
                    <div className="space-x-4">
                        <input className="border p-2 rounded" placeholder="Search" />
                        <button className="bg-gray-600 text-white px-4 py-2 rounded">Profile</button>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-6">
                    {/* Overview section */}
                    <div className="bg-blue-100 p-4 rounded shadow-md">
                        <h3 className="font-bold">Overview</h3>
                        {/* Additional content for Overview */}
                    </div>

                    {/* Recent Activities */}
                    <div className="bg-blue-100 p-4 rounded shadow-md">
                        <h3 className="font-bold">Recent Activities</h3>
                        {/* List of activities */}
                    </div>

                    {/* Quick Links */}
                    <div className="bg-blue-100 p-4 rounded shadow-md">
                        <h3 className="font-bold">Quick Links</h3>
                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Quickstart</button>
                    </div>
                </div>

                {/* Spaces */}
                <div className="mt-6">
                    <h2 className="font-bold text-xl">Spaces</h2>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Example Spaces */}
                        <div className="bg-white p-4 rounded shadow-md">
                            <h3 className="font-bold">Patience Adebajo</h3>
                            {/* Additional content for this space */}
                        </div>
                        {/* ... Add more spaces as needed */}
                    </div>
                </div>

                {/* Notifications */}
                <div className="mt-6">
                    <h2 className="font-bold text-xl">Notifications</h2>
                    <div className="mt-4 bg-white p-4 rounded shadow-md">
                        <p>We're keeping you in the loop. Stay in-the-know by following people and spaces.</p>
                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Edit feed</button>
                    </div>
                </div>

                {/* Discover section */}
                <div className="mt-6">
                    <h2 className="font-bold text-xl">Discover What's Happening</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        <div className="bg-white p-4 rounded shadow-md">
                            <h3 className="font-bold">Following</h3>
                            {/* Content */}
                        </div>
                        <div className="bg-white p-4 rounded shadow-md">
                            <h3 className="font-bold">Popular</h3>
                            {/* Content */}
                        </div>
                        <div className="bg-white p-4 rounded shadow-md">
                            <h3 className="font-bold">Announcements</h3>
                            {/* Content */}
                        </div>
                        <div className="bg-white p-4 rounded shadow-md">
                            <h3 className="font-bold">Calendars</h3>
                            {/* Content */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardComponent;
