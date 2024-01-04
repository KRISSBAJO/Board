import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Determine the current day of the week
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 6 = Saturday
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    // Format today's date to display on hover
    const formattedDate = today.toLocaleDateString();

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClickOutside = event => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    return (
        <header className="flex justify-between bg-slate-500 items-center p-5 shadow-lg">
            <div className="logo-container flex items-center space-x-4">
                <Link to="/" className="flex items-center space-x-4">
                    <img src={logo} alt="LogaXP Logo" className="h-14 w-auto rounded-md shadow-lg p-1" />
                    <h2 className="text-2xl font-bold text-white hidden md:inline">DocCenter</h2>
                </Link>
            </div>
    
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                    <FontAwesomeIcon icon={faBars} size="2x" />
                </button>
            </div>
    
            {/* Mobile Dropdown */}
            <div ref={dropdownRef} className={`transition-all md:hidden ${isOpen ? 'block' : 'hidden'} w-1/2 md:w-full max-h-60 overflow-y-auto bg-white rounded-lg shadow-lg absolute right-5 top-20 z-10`}>
                <button onClick={() => setIsOpen(false)} className="absolute right-3 top-2 text-gray-700 hover:text-gray-900">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                            {/* Welcome Section */}
                <div className="bg-gradient-to-r from-purple-400 to-blue-500 p-5 rounded-t-lg text-white">
                    <h3 className="font-semibold text-xl mb-2">Welcome to DocCenter!</h3>
                    <p className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>{formattedDate}</span>
                    </p>
                </div>
                <nav className="flex flex-col gap-4 p-5">
                    {['Features', 'About', 'Contact', 'Profile', 'Notifications', 'Login'].map((text, idx) => (
                        <Link 
                            key={idx} 
                            to={`/${text.toLowerCase()}`} 
                            className={`text-gray-700 hover:text-gray-900 hover:bg-gray-100 font-medium py-2 px-4 rounded-lg ${text === 'Notifications' && isWeekend ? 'text-yellow-400' : ''}`}
                            title={text === 'Notifications' ? formattedDate : ''}
                        >
                            {text === 'Notifications' ? '🔔' : text}
                        </Link>
                    ))}
                </nav>
            </div>
    
           {/* Desktop Navigation */}
<nav className="hidden md:flex gap-6 items-center">
    <div className="relative group">
        <Link 
            to="/notifications" 
            className={`text-white hover:text-gray-200 font-medium py-2 px-4 transition-transform transform hover:scale-105 ${isWeekend ? 'text-yellow-400' : ''}`}
            title={formattedDate}
        >
            🔔
        </Link>

        {/* Dropdown Content */}
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 hidden group-hover:block z-10">
            <div className="bg-gradient-to-r from-purple-400 to-blue-500 p-3 rounded-lg text-white">
                <h3 className="font-semibold text-xl mb-2">Welcome to DocCenter!</h3>
                <p className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>{formattedDate}</span>
                </p>
            </div>
        </div>
    </div>

    {['Features', 'About', 'Contact', 'Services', 'Login'].map((text, idx) => (
        <Link 
            key={idx} 
            to={`/${text.toLowerCase()}`} 
            className="text-white hover:text-gray-200 font-medium py-2 px-4 transition-transform transform hover:scale-105"
        >
            {text}
        </Link>
    ))}
</nav>


        </header>
    );
}
    
    export default Header;
    