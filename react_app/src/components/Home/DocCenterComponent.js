import React from 'react';
import docIcon3 from '../../assets/images/docu6.png'; 


const DocCenterComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full p-10">
            {/* Image */}
            <img src={ docIcon3} alt="DocCenter Usage" className="w-3/5 rounded-lg mb-8"/>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold mb-4">DocCenter</h1>

            {/* Sub-heading */}
            <p className="text-lg mb-6 text-center">
                Discover and leverage the powerful tools and resources from Logaxp's DocCenter to streamline your documentation processes.
            </p>

            {/* CTA Button */}
            <button className="py-2 px-6 border-2 bg-white  rounded-full hover:bg-white">
            Explore DocCenter
            </button>

        </div>
    );
}

export default DocCenterComponent;
