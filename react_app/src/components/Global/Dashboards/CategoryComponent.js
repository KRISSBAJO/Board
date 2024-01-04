import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, // Assuming this for Insurance
  faPenFancy, // Assuming this for Shops
  faBrain, // Assuming this for Knowledge
  faFileAlt, // Assuming this for Manual
  faHome, // Assuming this for Mortgage
  faFileSignature, // Assuming this for Forms
  faDollarSign, // Assuming this for Collections
  faPhotoVideo, // Assuming this for Media
  faArchive // Assuming this for General Storage
} from '@fortawesome/free-solid-svg-icons';

const categories = [
  { icon: faShieldAlt, label: 'Insurance', to: '/insurance_layout' },
  { icon: faPenFancy, label: 'Sign', to: '/mydashboard' },
  { icon: faBrain, label: 'Knowledge', to: '/' },
  { icon: faFileAlt, label: 'Manual', to: '/' },
  { icon: faHome, label: 'Mortgage', to: '/' },
  { icon: faFileSignature, label: 'Health', to: '/' },
  { icon: faDollarSign, label: 'Collections', to: '/' },
  { icon: faPhotoVideo, label: 'Media', to: '/' },
  { icon: faArchive, label: 'General Storage', to: '/' },

];
const CategoryComponent = () => {
  return (
    <div className="flex flex-wrap justify-center bg-white lg:space-x-20 md:space-x-1 shadow-lg">
      {categories.map((category, index) => (
        <Link key={index} to={category.to}  className="flex flex-col items-center p-4  rounded-lg transition-all duration-300 transform hover:scale-110">
          <div className="w-20 h-20 flex items-center justify-center border rounded-full bg-gray-50 text-gray-500 ">
            <FontAwesomeIcon icon={category.icon} size="lg" />
          </div>
          <span className="mt-2 text-xs text-gray-900">{category.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryComponent;
