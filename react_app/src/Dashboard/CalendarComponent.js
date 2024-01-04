// Calendar.js
import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import profilePic from '../assets/images/chris.jpeg';
import { ReactComponent as GoogleIcon } from '../assets/images/googleIcon.svg'; 
import { ReactComponent as MicrosoftIcon } from '../assets/images/microsoftIcon.svg';
import './CalendarComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCalendarAlt, faEllipsisV, faShare, faClipboardList, faUsers, faSquare, faColumns, faCaretDown, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [newBookingDropdown, setNewBookingDropdown] = useState(false);
  const [calendarViewDropdown, setCalendarViewDropdown] = useState(false);
  const [shareDropdown, setShareDropdown] = useState(false);
  const [viewStatsDropdown, setViewStatsDropdown] = useState(false);
  const [connectCalendarDropdownOpen, setConnectCalendarDropdownOpen] = useState(false);
  const myEventsList = [
    {
      id: 0,
      title: 'Long Event',
      start: new Date(2023, 11, 25, 7, 30, 0),
      end: new Date(2023, 11, 25, 10, 30, 0),
    },
    {
      id: 1,
      title: 'Meeting',
      start: new Date(2023, 11, 29, 8, 30, 0),
      end: new Date(2023, 11, 29, 12, 30, 0),
    }
  ];

   // Toggle dropdowns
   const toggleNewBookingDropdown = () => setNewBookingDropdown(!newBookingDropdown);
   const toggleCalendarViewDropdown = () => setCalendarViewDropdown(!calendarViewDropdown);
   const toggleShareDropdown = () => setShareDropdown(!shareDropdown);

   const toggleConnectCalendarDropdown = () => {
    setConnectCalendarDropdownOpen(!connectCalendarDropdownOpen);
  };
 
   const toggleViewStatsDropdown = () => {
    setViewStatsDropdown(!viewStatsDropdown);
  };
  return (
    <div className="calendar-layout">
     <header className="calendar-header">
        <div className="header-controls">
          <button onClick={toggleNewBookingDropdown} className="header-button text-white bg-gray-500 text-md font-bold"  title="Add">
            <FontAwesomeIcon icon={faPlus} className='' />
          </button>
          {newBookingDropdown && (
            <div className="dropdown-menus new-booking-dropdown">
             <div className="dropdown-menus">
              <ul className='text-gray-700'>
                <li>Add staff</li>
                <li>Add service</li>
                <li>Add customer</li>
                <li>Add class</li>
              </ul>
            </div>
            </div>
          )}

          <button onClick={toggleCalendarViewDropdown} className="header-button text-purple-500 text-lg" title="Calendar View">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </button>
          {calendarViewDropdown && (
           <div className="dropdown-menus calendar-view-dropdown">
           <ul>
             <li><FontAwesomeIcon icon={faSquare} /> Day <span className="shortcut">D</span></li>
             <li><FontAwesomeIcon icon={faColumns} /> Week <span className="shortcut">W</span></li>
             <li><FontAwesomeIcon icon={faCalendarAlt} /> Month <span className="shortcut">M</span></li>
             <li><FontAwesomeIcon icon={faClipboardList} /> Agenda <span className="shortcut">A</span></li>
             <li><FontAwesomeIcon icon={faUsers} /> Team <span className="shortcut">T</span></li>
           </ul>
           <div className="view-toggle">
             <span>Hide weekends</span>
             <label className="switch">
               <input type="checkbox" />
               <span className="slider round"></span>
             </label>
           </div>
         </div>
         
          )}

          <button onClick={toggleShareDropdown} className="header-button text-yellow-500 text-2xl font-extrabold" title="More">
            <FontAwesomeIcon icon={faEllipsisV} />
            
          </button>
          {shareDropdown && (
            <div className="dropdown-menus share-dropdown">
            <ul>
              <li>
                Enable off-hours booking
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </li>
              <li>
                Enable double booking
                <label className="switch">
                  <input type="checkbox" checked />
                  <span className="slider round"></span>
                </label>
              </li>
              <li>Calendar preferences</li>
              <li>Change working hours</li>
              <li className="nested-dropdown">
              View booking stats
              <FontAwesomeIcon icon={faCaretDown} onClick={toggleViewStatsDropdown} className="dropdown-icon" />
              {viewStatsDropdown && (
                <div className="nested-menu">
                  <ul>
                    <li>25 Dec - 31 Dec</li>
                    <li>0 Appts</li>
                    <li>$0.00 Confirmed</li>
                    <li>$0.00 Projected</li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
          </div>
          )}
        </div>

        <button onClick={toggleShareDropdown} className="header-share-button">
            <FontAwesomeIcon icon={faShare} />
            <span>Share</span>
          </button>
      </header>
      <div className="calendar-body">
      <aside className="calendar-sidebar">
            <div className="calendar-profile">
              <img src={profilePic} alt="User Profile" className="profile-pic" />
              <h3>Chris</h3>
              <p><FontAwesomeIcon icon={faEnvelope} className='mr-2 text-blue-500' />logaxpapp@gmail.com</p>
              <div className="connect-calendar-dropdown">
                <button onClick={toggleConnectCalendarDropdown}>
                <FontAwesomeIcon icon={faLink} className='mr-2 text-red-300' />
                  Connect Calendar
                </button>
                {connectCalendarDropdownOpen && (
                  <div className="connect-calendar-menu">
                    <button className="connect-google-btn">
                    <GoogleIcon className="google-icon" aria-label="Edit" role="button" title="Submit" tabIndex="0" /> Connect with Google
                    </button>
                    <button className="connect-microsoft-btn">
                    <MicrosoftIcon className="microsoft-icon" aria-label="Edit" role="button" title="Submit" tabIndex="0" /> Connect with Microsoft
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* ... other sidebar content ... */}
          </aside>
        <main className="calendar-main">
          <BigCalendar
          className='calendar-style'
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            defaultView="month"
            views={['month', 'week', 'day']}
            style={{ height: 'calc(100vh - 50px)' }} 
          />
        </main>
        <aside className="calendar-sidebar">
           {/* Notifications */}
        <div className="notifications">
          <h4>Notifications</h4>
          <span className="notification-count">3 New</span>
        </div>
        {/* Pending Appointments Feature */}
        <div className="pending-appointments">
          <h4>Pending Appointments</h4>
    <ul className="appointment-list">
      {/* Map through pending appointments and display them */}
      {/* Example: */}
      <li>Appointment with Dr. Smith</li>
      <li>Team Meeting at 3 PM</li>
      {/* ... */}
    </ul>
    <button className="view-all-btn">View All</button>
  </div>
</aside>

      </div>
    </div>
  );
};

export default CalendarComponent;