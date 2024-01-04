import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGlobe, faPhone, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';
import logo from '../../assets/images/logo6.png';
import logo2 from '../../assets/images/nlogo.png';
import './Header.css'

const Header = ({ onJoinClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showHero, setShowHero] = useState(true);
    const [isSticky, setIsSticky] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState('');

    const handleMouseEnter = (section) => {
        setDropdownOpen(section);
      };
      
      const handleMouseLeave = () => {
        setDropdownOpen('');
      };
    useEffect(() => {
        const handleScroll = () => {
          // Check if user has scrolled more than 200 pixels
          setIsSticky(window.scrollY > 200);
          // More complex logic to determine if the hero should be shown can be added here
          setShowHero(window.scrollY < 50); // Adjust as needed
        };
    
        // Add event listener on mount
        window.addEventListener('scroll', handleScroll);
    
        // Remove event listener on cleanup
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);;
  return (
    <header className={`${isSticky ? 'sticky-header' : ''} bg-green-400 text-black`}>
      {/* Top Header */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
            <Link to="/">
            <img src={logo2} alt="LogaXP Logo" className="h-12 mr-6" />
            </Link>

          {/* Hamburger Menu Icon - Visible on Mobile */}
          <button
            className="text-gray-500 inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 w-full gap-20 md:w-auto bg-gray-100 md:bg-transparent flex-col md:flex-row p-6 md:p-0 transition duration-300 ease-in-out items-center space-y-6 md:space-y-0 md:space-x-6 z-20`}>

                
                {/* Services Dropdown */}
                <div className="nav-item" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
                    <Link to="/" className="nav-link font-bold hover:text-green-500 block md:inline-block">Services</Link>
                    <Dropdown isOpen={dropdownOpen === 'services'} section="services" onMouseLeave={handleMouseLeave} />
                </div>

                {/* Industries Dropdown */}
                <div className="nav-item" onMouseEnter={() => handleMouseEnter('industries')} onMouseLeave={handleMouseLeave}>
                    <Link to="/" className="nav-link font-bold">Industries</Link>
                    <Dropdown isOpen={dropdownOpen === 'industries'} section="industries" onMouseLeave={handleMouseLeave} />
                </div>

                {/* Insights Dropdown */}
                <div className="nav-item" onMouseEnter={() => handleMouseEnter('insights')} onMouseLeave={handleMouseLeave}>
                    <Link to="/" className="nav-link font-bold hover:text-green-500 block md:inline-block">Insights</Link>
                    <Dropdown isOpen={dropdownOpen === 'insights'} section="insights" onMouseLeave={handleMouseLeave} />
                </div>

                {/* Careers Dropdown */}
                <div className="nav-item" onMouseEnter={() => handleMouseEnter('careers')} onMouseLeave={handleMouseLeave}>
                    <Link to="/" className="nav-link font-bold hover:text-green-500 block md:inline-block">Careers</Link>
                    <Dropdown isOpen={dropdownOpen === 'careers'} section="careers" onMouseLeave={handleMouseLeave} />
                </div>
                </nav>
        {/* Search and Icons */}
        <div className={`flex items-center space-x-4 bg-gray- text-white ${isMenuOpen ? 'block' : 'hidden'} md:block `}>
          {/* Search Bar */}
          <div className="flex items-center mb-1 rounded overflow-hidden p-1">
            <input
              type="text"
              className="px-2 text-white leading-tight focus:outline-none"
              id="search"
              placeholder="Search"
            />
            <button className="flex items-center justify-center px-4 border-l">
              <FontAwesomeIcon icon={faSearch} className="text-gray-900" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
  {/* Contact Icons */}
        <Link to="/contact" className="text-black hover:text-green-500 flex items-center">
            <FontAwesomeIcon icon={faGlobe} className="mr-2" />
            Contact Us
        </Link>

        {/* Separator */}
        <span className="text-white font-bold">||</span>

        <a href="tel:+1-888-555-5555" className="text-black hover:text-green-500 flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +1-888-555-5555
        </a>

        {/* Separator */}
        <span className="text-white font-bold">||</span>

        {/* User Icon */}
        <Link to="/login" className="text-black hover:text-green-500 flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Login
        </Link>
        </div>

        </div>
      </div>
        <hr className="border-2 bg-white text-white"/>
      {/* Hero Section */}
        <div className={`hero-section transition-all duration-500 ease-in-out bg-green-100 ${!showHero ? 'collapsed' : ''}`}>
        <div className="container mx-auto px-6 py-2 flex flex-col items-center justify-center">
            {/* <div className="text-center">
            <h1 className="text-4xl font-bold mb-2 ">
                <span className="text-green-500 loga">LogaXP</span><span className='ml- text-5xl'><br/> DocCenter</span>
                <span className="text-wh text-sm text-right ml-4 ">Ultimate Vault for Every Document</span>
            </h1>
            
            </div> */}
      
      </div>
    
        </div>
        <nav className="bg-white border-b shadow-xl">
  {/* <div className="mx-auto flex justify-center items-center">
    <button onClick={onJoinClick} className="font-bold text-green-700 hover:bg-green-50 md:inline-block py-1 px-6 rounded transition duration-300 ease-in-out" aria-label="Sign up for LogaXP">
      Get Started
    </button>
  </div> */}
</nav>

    </header>
  );
};

export default Header;
