import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BookingPageLayout from './BookingPageLayout';

import './SettingsPageLayout.css';
import { Outlet } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBusinessTime,
  faUsers,
  faConciergeBell,
  faTools,
  faBookOpen,
  faWallet,
  faChartBar,
  faFileInvoiceDollar,
  faBell,
  faStar,
  faDownload,
  faRunning,
  faHeart,
  faQuestionCircle,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

const SidebarItem = ({ icon, name, isActive, onClick }) => (
    <div className={`sidebar-item ${isActive ? 'active' : ''}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} className="sidebar-icon" />
      {name}
    </div>
  );

  const SettingsPageLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const activeTab = location.pathname.split('/').slice(-1)[0]; // Gets the last segment of the URL
  
    const handleTabChange = (tabName) => {
      navigate(tabName); // This will navigate to the correct route
    };
  
    return (
      <div className="settings-layout">
        <aside className="sidebar">
         
          <SidebarItem
            icon={faUser}
            name="My Profile"
            isActive={activeTab === 'profile'}
            onClick={() => handleTabChange('profile')}
          />
        <SidebarItem
          icon={faBusinessTime}
          name="My Business"
          isActive={activeTab === 'myBusiness'}
          onClick={() => handleTabChange('myBusiness')}
        />
        <SidebarItem
          icon={faUsers}
          name="My Team"
          isActive={activeTab === 'myTeam'}
          onClick={() => handleTabChange('myTeam')}
        />
        <SidebarItem
          icon={faConciergeBell}
          name="Services"
          isActive={activeTab === 'myServices'}
          onClick={() => handleTabChange('myServices')}
        />
        <SidebarItem
          icon={faTools}
          name="Location Setup"
          isActive={activeTab === 'locationSetup'}
          onClick={() => handleTabChange('locationSetup')}
        />
        {/* ...other sidebar items... */}
        <SidebarItem
          icon={faSignOutAlt}
          name="Log out"
          isActive={activeTab === 'logout'}
          onClick={() => handleTabChange('logout')}
        />
        <h3 className='seetings-header'> MANAGE</h3>
        <SidebarItem
          icon={faBookOpen}
          name="Booking Page"
          isActive={activeTab === 'bookingpage'}
          onClick={() => handleTabChange('bookingpage')} 
        />
        <SidebarItem
          icon={faWallet}
          name="Payments"
          isActive={activeTab === 'Payments'}
          onClick={() => handleTabChange('Payments')}
        />
        <SidebarItem
          icon={faChartBar}
          name="Reports"
          isActive={activeTab === 'Reports'}
          onClick={() => handleTabChange('Reports')}
        />
        <SidebarItem
          icon={faFileInvoiceDollar}
          name="Invoices"
          isActive={activeTab === 'Invoices'}
          onClick={() => handleTabChange('Invoices')}
        />
        <SidebarItem
          icon={faBell}
          name="Notifications"
          isActive={activeTab === 'Notifications'}
          onClick={() => handleTabChange('Notifications')}
        />
        <SidebarItem
          icon={faStar}
          name="Reviews"
          isActive={activeTab === 'Reviews'}
          onClick={() => handleTabChange('Reviews')}
        />
    <h3 className='seetings-header'> MORE LINKS</h3>
        <SidebarItem
          icon={faDownload}
          name="Download App"
          isActive={activeTab === 'DownloadApp'}
          onClick={() => handleTabChange('DownloadApp')}
        />
        <SidebarItem
          icon={faRunning}
          name="LogaXP Blog"
          isActive={activeTab === 'Blog'}
          onClick={() => handleTabChange('Blog')}
        />
        <SidebarItem
          icon={faHeart}
          name="Refer a Friend"
          isActive={activeTab === 'referAfriend'}
          onClick={() => handleTabChange('referAfriend')}
        />
        <SidebarItem
          icon={faQuestionCircle}
          name="Help & Support"
          isActive={activeTab === 'HelpAndSupport'}
          onClick={() => handleTabChange('HelpAndupport')}
        />
      </aside>
      <main className="content">
        <Outlet />
        
      </main>
    </div>
  );
};

export default SettingsPageLayout;
