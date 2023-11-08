import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from "../../assets/images/logo.png";

const Footer = () => {
    return (
        <div className="footer-container bg-white py-6 px-8">
            <div className="mb-8">
              
              
                <div className="mb-4 flex space-x-4">
                <p className='font-bold text-gray-700 mb-4 '>Follow Us</p>
                    <a href="#" className="text-purple-800 hover:text-gray-600">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    <a href="#" className="text-blue-500 hover:text-gray-600">
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a href="#" className="text-red-500 hover:text-red-600">
                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                    </a>
                    <a href="#" className="text-blue-500 hover:text-gray-600">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                    <a href="#" className="text-blue-500 hover:text-gray-600">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                </div>
            </div>
            <div className="border-t pt-4">
            <div className="mb-4 flex justify-center items-center">
                <span className="text-gray-500"> ➡️ EN | ES</span>
            </div>
                        <div className="flex justify-between items-center">
                    
                    <div>
                        <img src={logo} alt="Logo" className="h-10 w-auto rounded-lg" /> {/* Replace with the path to your logo */}
                    </div>
                    <div className="flex gap-4 mx-auto">
                        <a href="#" className="text-gray-500 hover:text-gray-600">Privacy</a>
                        <a href="#" className="text-gray-500 hover:text-gray-600">Terms</a>
                        <a href="#" className="text-gray-500 hover:text-gray-600">About LogaXP</a>
                        <a href="#" className="text-gray-500 hover:text-gray-600">LogaXP Products</a>
                        <a href="#" className="text-gray-500 hover:text-gray-600">DocCenter</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
