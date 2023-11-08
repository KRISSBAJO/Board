import React, { useState } from 'react';
import Sidebar from './Sidebar';
import AdminHeader from './AdminHeader';
// ... other imports

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* AdminHeader spans the full width */}
      <AdminHeader />

      <div className="flex h-screen">
        {/* Sidebar component */}
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main content area */}
        <div className={`flex-1 ${sidebarOpen ? 'ml-10' : 'ml-0', 'mt-1'}`}> {/* Adjust margin as needed */}
          {children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
